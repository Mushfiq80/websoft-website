# Websoft VPS Deployment Guide

## VPS Details

| Property | Value |
|----------|-------|
| **IP Address** | 163.245.217.40 |
| **Username** | root |
| **Domain** | preview.websoftbd.net |
| **SSH Access** | `ssh root@163.245.217.40` |

---

## Prerequisites

### Local Machine Requirements
- Git installed
- SSH access to VPS
- GitHub repository access

### VPS Server Stack
- **OS**: Ubuntu Linux
- **Web Server**: Nginx
- **Process Manager**: PM2
- **Runtime**: Node.js 20.x
- **Package Manager**: pnpm (with Turborepo monorepo)

---

## Deployment Process

### Step 1: Push Code to GitHub

On your local machine, commit and push your changes:

```bash
cd c:\G\WebSoft\websoft-website
git add .
git commit -m "feat: describe your changes"
git push origin main
```

---

### Step 2: SSH into VPS

```bash
ssh root@163.245.217.40
# Enter your password when prompted
```

---

### Step 3: Navigate to Project Directory

```bash
cd /root/websoft-website
```

---

### Step 4: Pull Latest Code

```bash
git pull origin main
```

---

### Step 5: Install Dependencies

```bash
pnpm install
```

This installs all dependencies for the monorepo workspace.

---

### Step 6: Build the Application

```bash
pnpm build
```

This builds the entire monorepo. The web application will be built to:
```
apps/web/.next/
```

---

### Step 7: Restart PM2 Process

```bash
pm2 restart all
```

This restarts the Next.js application with the new build.

---

### Step 8: Verify Deployment

1. **Check PM2 status:**
```bash
pm2 status
```

2. **Check logs if there are issues:**
```bash
pm2 logs
```

3. **Visit the website:**
   - http://preview.websoftbd.net
   - https://preview.websoftbd.net (if SSL is configured)

---

## PM2 Commands Reference

| Command | Description |
|---------|-------------|
| `pm2 list` | List all processes |
| `pm2 status` | Show process status |
| `pm2 restart all` | Restart all processes |
| `pm2 restart <id>` | Restart specific process by ID |
| `pm2 logs` | View all logs |
| `pm2 logs --lines 100` | View last 100 log lines |
| `pm2 stop all` | Stop all processes |
| `pm2 delete all` | Remove all processes |
| `pm2 monit` | Real-time monitoring dashboard |

---

## Common Issues & Solutions

### Issue: Build fails with "Module not found"

**Solution:**
```bash
pnpm install --force
pnpm build
```

### Issue: PM2 shows "errored" status

**Solution:**
```bash
pm2 logs --lines 50
# Check the error, then:
pm2 restart all
```

### Issue: Port already in use

**Solution:**
```bash
# Find the process using the port
lsof -i :3000
# Kill it if needed
kill -9 <PID>
pm2 restart all
```

### Issue: Nginx 502 Bad Gateway

**Solution:**
```bash
# Check if Next.js is running
pm2 status
# If stopped, restart:
pm2 restart all
# Check Nginx status
systemctl status nginx
# Restart Nginx if needed
systemctl restart nginx
```

---

## Quick Deployment Script

For faster deployments, use this one-liner after SSH:

```bash
cd /root/websoft-website && git pull origin main && pnpm install && pnpm build && pm2 restart all
```

---

## Nginx Configuration (Reference)

The site is served through Nginx. Configuration is typically located at:
```
/etc/nginx/sites-available/preview.websoftbd.net
```

After Nginx config changes, reload with:
```bash
nginx -t
systemctl reload nginx
```

---

## Environment Variables

If you need to add environment variables:

1. Create/Edit `.env` file:
```bash
nano /root/websoft-website/apps/web/.env
```

2. Restart PM2 after changes:
```bash
pm2 restart all
```

---

## SSL Certificate (HTTPS)

If SSL is configured with Let's Encrypt:

### Check certificate status:
```bash
certbot certificates
```

### Renew certificates (auto-renews usually):
```bash
certbot renew
```

### Reload Nginx after renewal:
```bash
systemctl reload nginx
```

---

## Project Structure on VPS

```
/root/websoft-website/
├── apps/
│   └── web/              # Main Next.js application
│       ├── .next/        # Build output
│       ├── public/       # Static assets
│       ├── app/          # App router pages
│       └── components/   # React components
├── packages/
│   └── ui/               # Shared UI components
├── pnpm-workspace.yaml   # Turborepo config
├── package.json          # Root package.json
└── turbo.json           # Turborepo config
```

---

## Security Notes

⚠️ **Important:**
- Never commit `.env` files with sensitive data
- Keep your VPS password secure
- Consider using SSH keys instead of password authentication
- Regularly update the server: `apt update && apt upgrade`

---

## Contact for Issues

If you encounter issues not covered in this guide:
- **Email**: info@websoftbd.net
- **Phone**: +8801716983511

---

*Last Updated: August 2026*
