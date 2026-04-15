# Gesine Grundmann Website (Next.js 15 + PayloadCMS 3.75 + SQLite)

Full-Stack-Anwendung: Next.js 15 rendert die öffentlichen Seiten per SSR, PayloadCMS 3.75 liefert das Admin-Panel und die API. Daten liegen in einer SQLite-Datei — kein externer Datenbankserver nötig.

## Features

- **SQLite Database**: Selbstständige `local.db`-Datei, kein DB-Server nötig
- **Media Support**: Uploads für Bilder und Videos
- **Rich Text**: Lexical-Editor für Beschreibungen
- **SSR Frontend + Admin Panel**: Alles in einer Anwendung auf Port 3000

## Lokale Entwicklung

```bash
pnpm install
cp .env.example .env   # DATABASE_URL und PAYLOAD_SECRET anpassen
pnpm dev
```

- Frontend: http://localhost:3000
- Admin-Panel: http://localhost:3000/admin

---

## Deployment auf Debian 12 mit PM2

Diese Anleitung führt Schritt für Schritt durch das Deployment auf einem frischen Debian 12 Server. Jeder Block erklärt kurz, **was** passiert und **warum**.

**Voraussetzungen:**
- Debian 12 Server mit Root- oder Sudo-Zugang
- Eine Domain (z. B. `yourdomain.com`), die per DNS auf die Server-IP zeigt
- SSH-Zugang zum Server

### 1. Server vorbereiten

Wir installieren die Laufzeitumgebung: Node.js führt die Anwendung aus, pnpm verwaltet Pakete, PM2 hält den Prozess am Leben und startet ihn nach einem Reboot automatisch neu.

```bash
# Paketquellen aktualisieren
sudo apt-get update && sudo apt-get upgrade -y

# Node.js 20 LTS aus offizieller NodeSource-Quelle installieren
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# pnpm (Paketmanager) und PM2 (Prozessmanager) global installieren
sudo npm install -g pnpm pm2
```

**Kurz prüfen**, ob alles installiert ist:

```bash
node -v    # sollte v20.x.x anzeigen
pnpm -v
pm2 -v
```

### 2. Firewall einrichten (empfohlen)

UFW sorgt dafür, dass nur die Ports offen sind, die wirklich gebraucht werden. Ohne Firewall ist der Node-Port 3000 sonst direkt aus dem Internet erreichbar.

```bash
sudo apt-get install -y ufw
sudo ufw allow OpenSSH        # SSH-Zugang (Port 22) weiterhin erlauben
sudo ufw allow 'WWW Full'     # HTTP (80) + HTTPS (443) erlauben
sudo ufw enable
```

### 3. Projekt auf den Server bringen

Wir legen einen Zielordner unter `/var/www/` an (Standard-Ort für Webprojekte) und holen den Code dorthin.

```bash
sudo mkdir -p /var/www/gesine
sudo chown $USER:$USER /var/www/gesine   # Ordner dem aktuellen Benutzer zuweisen
cd /var/www/gesine

# Variante A: per Git klonen
git clone <REPO_URL> .

# Variante B: per rsync vom lokalen Rechner (auf dem lokalen Rechner ausführen!)
# rsync -avz --exclude node_modules --exclude .next --exclude .env \
#   ./ user@server:/var/www/gesine/
```

**Wichtig — bestehende Inhalte übertragen:**

Die Datenbank (`local.db`) und die hochgeladenen Medien (`media/`) sind in `.gitignore` eingetragen und werden **nicht** per `git clone` mitgeliefert. Wer bestehende Inhalte auf den Server bringen will, muss sie separat übertragen (auf dem lokalen Rechner ausführen):

```bash
# Datenbank und Medien vom lokalen Projekt auf den Server kopieren
rsync -avz ./local.db  user@server:/var/www/gesine/local.db
rsync -avz ./media/    user@server:/var/www/gesine/media/
```

Wird dieser Schritt ausgelassen, startet die Seite mit leerer Datenbank — Inhalte müssen dann im Admin-Panel neu angelegt werden.

### 4. Umgebungsvariablen konfigurieren

Die `.env`-Datei enthält geheime Werte, die nicht ins Git-Repository gehören. Sie wird aus der Vorlage erzeugt.

```bash
cd /var/www/gesine
cp .env.example .env
```

**Sicheren `PAYLOAD_SECRET` generieren** (langer Zufallsstring, schützt Session-Tokens):

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Ausgabe kopieren und in `.env` eintragen:

```env
DATABASE_URL=file:./local.db
PAYLOAD_SECRET=hier-den-generierten-string-einfügen
```

Datei bearbeiten z. B. mit `nano .env` — speichern mit `Ctrl+O`, schließen mit `Ctrl+X`.

### 5. Abhängigkeiten installieren und Produktions-Build erstellen

`pnpm install` lädt alle Pakete. `pnpm build` kompiliert Next.js für den Produktionsbetrieb (optimiert, minimiert).

```bash
pnpm install
pnpm build
```

Der Build kann einige Minuten dauern. Am Ende erscheint eine Übersicht der generierten Routen.

**Niemals `node_modules` vom lokalen Rechner übertragen.** Darin stecken plattform-spezifische Binärdateien (z. B. für SQLite und Bildverarbeitung). Auf einem Linux-Server werden die passenden Linux-Versionen erst bei `pnpm install` heruntergeladen. Kopierte Mac- oder Windows-Pakete führen zu Laufzeitfehlern wie `Cannot find module 'libsql'`.

**Zur `.npmrc`:** Im Projekt-Root liegt eine Datei `.npmrc` mit folgenden Zeilen:

```
public-hoist-pattern[]=*libsql*
public-hoist-pattern[]=*better-sqlite3*
```

Diese sorgt dafür, dass die nativen SQLite-Module so in `node_modules` abgelegt werden, dass der Next.js-Build sie zur Laufzeit findet. Falls die Datei fehlt (z. B. versehentlich vom Transfer ausgeschlossen), produziert der Server einen 500-Fehler auf allen Payload-API-Routen (`Cannot find module 'libsql'`). In dem Fall Datei anlegen und `rm -rf node_modules .next && pnpm install && pnpm build` wiederholen.

### 6. Mit PM2 starten

PM2 startet die Anwendung im Hintergrund, sammelt Logs und startet sie neu, falls sie abstürzt. Wir nutzen eine kleine Konfigurationsdatei, weil das zuverlässiger ist als PM2 direkt mit `pnpm` zu starten.

**Datei `ecosystem.config.cjs` im Projektordner anlegen:**

```js
module.exports = {
  apps: [
    {
      name: 'gesine',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/gesine',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
    },
  ],
}
```

**Starten und dauerhaft aktivieren:**

```bash
pm2 start ecosystem.config.cjs
pm2 save                 # aktuelle Prozessliste speichern
pm2 startup              # zeigt einen sudo-Befehl an — diesen kopieren und ausführen
```

Der `pm2 startup`-Befehl gibt eine Zeile aus wie `sudo env PATH=... pm2 startup systemd -u <user> --hp /home/<user>`. **Diese Zeile genau so kopieren und ausführen**, damit PM2 nach einem Reboot automatisch startet.

**Nützliche PM2-Befehle:**

```bash
pm2 status            # Läuft die App? Status und CPU/RAM
pm2 logs gesine       # Live-Logs (Beenden mit Ctrl+C)
pm2 restart gesine    # Nach Code-Update neu starten
pm2 stop gesine       # Stoppen
```

**Kurztest:** `curl http://127.0.0.1:3000` sollte HTML zurückgeben.

### 7. Apache 2 als Reverse Proxy

Apache nimmt die Anfragen auf Port 80/443 entgegen und leitet sie intern an Next.js auf Port 3000 weiter. So bleibt Port 3000 von außen unerreichbar und Apache übernimmt später auch HTTPS.

```bash
sudo apt-get install -y apache2
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers
```

**Konfiguration anlegen:** `/etc/apache2/sites-available/gesine.conf`

```apache
<VirtualHost *:80>
    ServerName yourdomain.com

    # Upload-Limit für Media (hier: 100 MB) — ohne diese Zeile blockiert Apache große Uploads
    LimitRequestBody 104857600

    ProxyPreserveHost On
    ProxyRequests Off

    # WebSocket-Weiterleitung (für Live-Funktionen im Admin-Panel)
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteCond %{HTTP:Connection} upgrade [NC]
    RewriteRule /(.*) ws://127.0.0.1:3000/$1 [P,L]

    # Alle übrigen Requests an Next.js auf Port 3000 weiterleiten
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    # Next.js mitteilen, ob die ursprüngliche Anfrage HTTP oder HTTPS war
    RequestHeader set X-Forwarded-Proto "http"

    ErrorLog ${APACHE_LOG_DIR}/gesine-error.log
    CustomLog ${APACHE_LOG_DIR}/gesine-access.log combined
</VirtualHost>
```

`yourdomain.com` durch die echte Domain ersetzen (`nano /etc/apache2/sites-available/gesine.conf`).

**Aktivieren und Apache neu laden:**

```bash
sudo a2ensite gesine.conf
sudo a2dissite 000-default.conf          # Standard-Seite deaktivieren
sudo apache2ctl configtest                # Syntax prüfen — sollte "Syntax OK" ausgeben
sudo systemctl reload apache2
```

Jetzt sollte die Seite unter `http://yourdomain.com` erreichbar sein.

### 8. SSL mit Let's Encrypt (dringend empfohlen)

Certbot erstellt automatisch ein kostenloses SSL-Zertifikat, passt die Apache-Konfiguration an und erneuert das Zertifikat automatisch vor Ablauf.

```bash
sudo apt-get install -y certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com
```

Certbot fragt nach einer E-Mail-Adresse und ob HTTP-Anfragen automatisch auf HTTPS umgeleitet werden sollen — **Ja** wählen.

Certbot erzeugt dabei eine neue Datei `/etc/apache2/sites-available/gesine-le-ssl.conf`. **In dieser Datei** den Header auf `https` setzen, damit Next.js die richtigen Links generiert:

```apache
RequestHeader set X-Forwarded-Proto "https"
```

Danach:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

Automatische Erneuerung testen:

```bash
sudo certbot renew --dry-run
```

### 9. Backups der SQLite-Datenbank

Da alle Inhalte in `local.db` liegen, sollte diese Datei regelmäßig gesichert werden. Einfache Variante mit Cron (tägliches Backup um 3 Uhr nachts, 7 Tage Aufbewahrung):

```bash
sudo mkdir -p /var/backups/gesine
sudo crontab -e
```

Folgende Zeile hinzufügen:

```cron
0 3 * * * cp /var/www/gesine/local.db /var/backups/gesine/local-$(date +\%F).db && find /var/backups/gesine -name "local-*.db" -mtime +7 -delete
```

Auch den Ordner `/var/www/gesine/media` regelmäßig sichern (enthält die hochgeladenen Bilder).

---

## Update-Workflow

Wenn Änderungen am Code deployt werden sollen:

```bash
cd /var/www/gesine
git pull              # neue Commits holen
pnpm install          # ggf. neue Abhängigkeiten installieren
pnpm build            # neuen Produktions-Build erstellen
pm2 restart gesine    # App mit neuem Build neu starten
```

Die SQLite-Datei und der `media`-Ordner bleiben dabei unangetastet.

## Fehlersuche

| Problem | Lösung |
|---------|--------|
| 502 Bad Gateway | Läuft PM2? `pm2 status` — ggf. `pm2 logs gesine` prüfen |
| Seite lädt, aber Admin-Login schlägt fehl | `.env` prüfen — `PAYLOAD_SECRET` muss gesetzt sein |
| Uploads schlagen fehl | `LimitRequestBody` in Apache zu niedrig, oder Berechtigung des `media`-Ordners |
| Nach Reboot ist App offline | `pm2 startup`-Befehl nicht ausgeführt — Schritt 6 wiederholen |
| HTTPS zeigt Mixed-Content-Warnungen | `X-Forwarded-Proto "https"` in der `-le-ssl.conf` setzen (Schritt 8) |
| 500 auf `/api/...`, `pm2 logs` zeigt `Cannot find module 'libsql'` | `.npmrc` fehlt oder wurde ignoriert. Inhalt siehe Schritt 5. Danach `rm -rf node_modules .next && pnpm install && pnpm build && pm2 restart gesine` |
| Kacheln auf `/works` zeigen keine Bilder (400 im Browser, 404 auf `/api/media/file/...`) | Meist eine der drei Ursachen: (a) `media/`-Ordner wurde nicht auf den Server übertragen → Schritt 3 nachholen; (b) nach Code-Änderung wurde nicht neu gebaut → `pnpm build && pm2 restart gesine`; (c) Browser-Cache hält altes Ergebnis → mit `Ctrl+Shift+R` bzw. `Cmd+Shift+R` hart neu laden |
| Nach `git pull` laufen Seiten oder Admin-Panel fehlerhaft | Build-Cache veraltet — `rm -rf .next && pnpm build && pm2 restart gesine` |
