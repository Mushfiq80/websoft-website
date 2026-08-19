#!/usr/bin/env bash
# Deploy Web Soft BD on the VPS: pull, install, build, restart.
# Run from the repo root (the directory pm2 serves): /var/www/websoft-website
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Pulling latest code"
git pull --ff-only

echo "==> Installing dependencies"
pnpm install --frozen-lockfile

echo "==> Building web app"
pnpm --filter web build

echo "==> Restarting pm2 app: websoftbd"
pm2 restart websoftbd --update-env

echo "==> Deploy complete."
