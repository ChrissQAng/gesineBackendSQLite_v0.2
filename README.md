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

## Deployment auf Debian 12 mit PM2

### 1. Server vorbereiten

```bash
# Node.js 20 LTS installieren
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# pnpm und PM2 global installieren
sudo npm install -g pnpm pm2
```

### 2. Projekt auf den Server bringen

```bash
# Beispiel: Projekt nach /var/www/gesine klonen oder kopieren
sudo mkdir -p /var/www/gesine
cd /var/www/gesine

# Per Git:
git clone <REPO_URL> .

# Oder per rsync vom lokalen Rechner:
# rsync -avz --exclude node_modules --exclude .next --exclude .env ./ user@server:/var/www/gesine/
```

### 3. Konfiguration

```bash
cd /var/www/gesine
cp .env.example .env
```

`.env` anpassen:

```env
DATABASE_URL=file:./local.db
PAYLOAD_SECRET=ein-sicherer-zufallsstring
```

### 4. Build

```bash
pnpm install
pnpm build
```

### 5. Mit PM2 starten

```bash
pm2 start pnpm --name "gesine" -- start
pm2 save
pm2 startup   # Folge der Anweisung, damit PM2 nach Reboot automatisch startet
```

Nützliche PM2-Befehle:

```bash
pm2 status            # Status anzeigen
pm2 logs gesine       # Logs anzeigen
pm2 restart gesine    # Neustarten
pm2 stop gesine       # Stoppen
```

### 6. Apache 2 als Reverse Proxy

```bash
sudo apt-get install -y apache2
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers
```

Konfiguration unter `/etc/apache2/sites-available/gesine.conf`:

```apache
<VirtualHost *:80>
    ServerName yourdomain.com

    # Für Media-Uploads
    LimitRequestBody 104857600

    ProxyPreserveHost On
    ProxyRequests Off

    # WebSocket-Support (für HMR / Admin-Live-Updates)
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteCond %{HTTP:Connection} upgrade [NC]
    RewriteRule /(.*) ws://127.0.0.1:3000/$1 [P,L]

    # Alle Requests an Next.js weiterleiten
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    RequestHeader set X-Forwarded-Proto "http"
</VirtualHost>
```

Aktivieren:

```bash
sudo a2ensite gesine.conf
sudo a2dissite 000-default.conf
sudo apache2ctl configtest && sudo systemctl reload apache2
```

### 7. SSL mit Let's Encrypt (optional, empfohlen)

```bash
sudo apt-get install -y certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com
```

Nach SSL-Aktivierung den Header anpassen (`RequestHeader set X-Forwarded-Proto "https"`).

### Update-Workflow

```bash
cd /var/www/gesine
git pull
pnpm install
pnpm build
pm2 restart gesine
```
