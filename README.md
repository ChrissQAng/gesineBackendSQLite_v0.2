# Gesine Backend (PayloadCMS 3.0 + SQLite)

This is the backend for the Gesine Grundmann website, built with PayloadCMS 3.0 and SQLite.

## Features
- **SQLite Database**: Self-contained `local.db` file. No external database server required.
- **Media Support**: Uploads for Images AND Videos.
- **Rich Text**: Robust editor for descriptions.
- **Headless CMS**: Serves content via API to the React frontend.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/admin](http://localhost:3000/admin) to manage content.

## Deployment (Apache + Node.js)
To deploy on your Apache server without Docker:

1. **Build the Backend**:
   ```bash
   npm run build
   npm start
   ```
   (Use a process manager like PM2 to keep it running: `pm2 start npm --name "gesine-backend" -- start`)

2. **Frontend Build**:
   ```bash
   cd ../frontend
   npm run build
   ```
   Copy the `dist` folder to your Apache web root.

3. **Apache Configuration (Reverse Proxy)**:
   Configure Apache to serve the static frontend files, but proxy `/api` and `/admin` requests to the Node.js backend running on port 3000.

   ```apache
   <VirtualHost *:80>
       ServerName yourdomain.com
       DocumentRoot /var/www/html/frontend-dist

       # Enable Proxy
       ProxyPreserveHost On
       ProxyPass /api http://localhost:3000/api
       ProxyPassReverse /api http://localhost:3000/api
       ProxyPass /admin http://localhost:3000/admin
       ProxyPassReverse /admin http://localhost:3000/admin

       # Serve static frontend
       <Directory /var/www/html/frontend-dist>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
           RewriteEngine on
           # Don't rewrite files or directories
           RewriteCond %{REQUEST_FILENAME} -f [OR]
           RewriteCond %{REQUEST_FILENAME} -d
           RewriteRule ^ - [L]
           # Rewrite everything else to index.html to allow html5 routing
           RewriteRule ^ index.html [L]
       </Directory>
   </VirtualHost>
   ```

4. **Frontend Config**:
   Ensure `VITE_SWITCH_LOCAL_SERVER` is empty (`""`) in production so requests go to `/api/...` (relative path), which Apache handles.
