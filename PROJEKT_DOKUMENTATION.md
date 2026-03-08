# Gesine Grundmann Website - Projektdokumentation

## Übersicht

Dieses Projekt ist eine **Next.js-Anwendung** mit **Payload CMS** als Backend. Es wurde vom ursprünglichen **Vite/React-Frontend** migriert und nutzt nun das App Router-System von Next.js.

---

## Projektstruktur: Alt vs. Neu

### Vergleichstabelle

| Altes Frontend (Vite/React)       | Neues Frontend (Next.js/Payload)   |
| --------------------------------- | ---------------------------------- |
| `src/pages/`                      | `src/app/(frontend)/`              |
| `src/components/`                 | `src/components/`                  |
| `public/`                         | `public/`                          |
| React Router (`react-router-dom`) | Next.js App Router (Ordnerbasiert) |
| `import.meta.env.VITE_*`          | Direkte API-Aufrufe über Payload   |

### Seitenstruktur

```
ALTES PROJEKT (Vite)              NEUES PROJEKT (Next.js)
─────────────────────              ─────────────────────────
src/pages/                        src/app/(frontend)/
├── Home/Home.jsx          →      ├── page.tsx (Homepage)
├── About/About.jsx        →      ├── about/page.tsx
├── Contact/Contact.jsx    →      ├── contact/page.tsx
├── Works/Works.jsx        →      ├── works/page.tsx
├── Detail/Details.jsx     →      ├── details/[id]/page.tsx
├── Music/Music.jsx        →      ├── music/page.tsx
├── Views/Views.jsx        →      ├── views/page.tsx
├── Texts/Texts.jsx        →      ├── texts/page.tsx
└── Imprint/Imprint.jsx    →      └── imprint/page.tsx
```

### Komponenten

```
ALTES PROJEKT                      NEUES PROJEKT
─────────────                      ─────────────
src/components/                    src/components/
├── Backarrow/Backarrow.jsx  →    ├── BackArrow/BackArrow.tsx
├── Tile.jsx                 →    ├── Tile/Tile.tsx
└── Scrolltotop/             →    └── ScrollToTop/ScrollToTop.tsx
```

---

## Wichtige Unterschiede

### 1. Routing

**Alt (React Router):**

```jsx
import { Link, useNavigate } from 'react-router-dom'
const navigate = useNavigate()
navigate('/about')
```

**Neu (Next.js):**

```tsx
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const router = useRouter()
router.push('/about')
router.back() // Zurück navigieren
```

### 2. Datenabruf

**Alt (Vite):**

```jsx
const res = await fetch(import.meta.env.VITE_SERVER_IP + '/api/artobjects')
```

**Neu (Next.js + Payload):**

```tsx
import { getPayload } from 'payload'
import config from '@/payload.config'

const payload = await getPayload({ config: await config })
const artObjects = await payload.find({ collection: 'artObjects' })
```

### 3. Client- vs. Server-Komponenten

Next.js unterscheidet zwischen **Server-Komponenten** (Standard) und **Client-Komponenten**:

```tsx
// Server-Komponente (Standard) - kann async sein, kein useState/useEffect
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Client-Komponente - benötigt 'use client' Direktive
;('use client')
import { useState, useEffect } from 'react'
export default function InteractiveComponent() {
  const [state, setState] = useState(0)
  // ...
}
```

---

## Deployment auf Apache Server

### ⚠️ Wichtig: Kein statischer Export möglich

Da dieses Projekt **Payload CMS** verwendet, ist ein **statischer Export nicht möglich**. Payload benötigt:

- Server-seitige API-Routen (`/api/*`)
- Admin-Panel mit Authentifizierung (`/admin`)
- Dynamische Routen (`/details/[id]`)
- Datenbank-Verbindung (SQLite)

Deshalb muss das Projekt als **Node.js-Server** laufen.

---

### Node.js Server mit Apache Reverse Proxy

#### 1. Build erstellen

```bash
npm run build
```

Dies erstellt den `.next/`-Ordner mit dem optimierten Build.

#### 2. PM2 installieren (Process Manager)

PM2 hält den Node.js-Server am Laufen, auch nach Server-Neustart:

```bash
npm install -g pm2
```

#### 3. Server starten

```bash
# Im Projektordner:
pm2 start npm --name "gesine-website" -- start

# PM2 beim Server-Neustart automatisch starten:
pm2 startup
pm2 save
```

#### 4. Apache als Reverse Proxy konfigurieren

**Apache-Module aktivieren:**

```bash
sudo a2enmod proxy proxy_http
sudo systemctl restart apache2
```

**VirtualHost-Konfiguration** (`/etc/apache2/sites-available/gesine.conf`):

```apache
<VirtualHost *:80>
    ServerName gesinegrundmann.org
    ServerAlias www.gesinegrundmann.org

    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    # Optional: SSL mit Let's Encrypt
    # Verwende certbot für automatische SSL-Konfiguration
</VirtualHost>
```

**Site aktivieren:**

```bash
sudo a2ensite gesine.conf
sudo systemctl reload apache2
```

#### 5. Nützliche PM2-Befehle

```bash
pm2 list              # Alle Prozesse anzeigen
pm2 logs gesine-website  # Logs anzeigen
pm2 restart gesine-website  # Neustart
pm2 stop gesine-website     # Stoppen
pm2 delete gesine-website   # Entfernen
```

---

### Alternative: Docker Deployment

Falls Docker verfügbar ist:

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t gesine-website .
docker run -d -p 3000:3000 gesine-website
```

---

## Komponenten-Referenz

### BackArrow

- **Pfad:** `src/components/BackArrow/BackArrow.tsx`
- **Verwendung:** `<BackArrow />` oder `<BackArrow color="white" />`
- **Funktion:** Navigiert zur vorherigen Seite

### Tile

- **Pfad:** `src/components/Tile/Tile.tsx`
- **Verwendung:** `<Tile object={artObject} />`
- **Funktion:** Zeigt Artwork-Vorschau (Bild oder Video)

### ScrollToTop

- **Pfad:** `src/components/ScrollToTop/ScrollToTop.tsx`
- **Verwendung:** `<ScrollToTop />`
- **Funktion:** Button zum sanften Scrollen nach oben

---

## Entwicklungsserver starten

```bash
cd gesineBackendSQLite
npm run dev
```

Der Server läuft auf:

- **Frontend:** http://localhost:3000
- **Admin-Panel:** http://localhost:3000/admin

---

## Umgebungsvariablen

| Variable         | Beschreibung                   |
| ---------------- | ------------------------------ |
| `DATABASE_URI`   | SQLite-Datenbankpfad           |
| `PAYLOAD_SECRET` | Geheimer Schlüssel für Payload |

---

## Häufige Probleme

### Bilder/Videos werden nicht angezeigt

- Prüfen, ob die Dateien in `/public/` liegen
- Pfade müssen mit `/` beginnen (z.B. `/images/image.png`)

### 404 auf Unterseiten (Apache)

- `.htaccess` mit Rewrite-Regeln erstellen
- Apache `mod_rewrite` aktivieren

### API-Fehler

- Prüfen, ob der Payload-Server läuft
- Admin-Panel unter `/admin` aufrufen und Daten prüfen
