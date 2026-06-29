#!/data/data/com.termux/files/usr/bin/sh
# ============================================================
# Deploy do portfolio no servidor caseiro (Termux/Android)
# ------------------------------------------------------------
# Chamado pelo servidor de webhook quando ha push na branch main.
# Faz: git pull -> npm install -> fix rollup WASM -> build -> restart.
# Loga tudo em ~/deploy.log.
# ============================================================
set -e

PROJ_DIR="${PROJ_DIR:-$HOME/meu-portfolio-3d}"
PM2_APP="${PM2_APP:-portfolio}"
PREFIX=/data/data/com.termux/files/usr
export PATH="$PREFIX/bin:$PATH"
PM2="$PREFIX/bin/node $PREFIX/lib/node_modules/pm2/bin/pm2"

log() { echo "[deploy $(date '+%Y-%m-%d %H:%M:%S')] $*"; }

cd "$PROJ_DIR"

log "Iniciando deploy em $PROJ_DIR"

log "git fetch + pull (main)"
git fetch origin main
git checkout main
git pull --ff-only origin main

log "npm install (legacy-peer-deps, ignore-scripts)"
npm install --legacy-peer-deps --ignore-scripts

log "aplicando fix do rollup WASM"
sh "$PROJ_DIR/deploy/fix-rollup-termux.sh" "$PROJ_DIR"

log "npm run build"
npm run build

log "restart do pm2 ($PM2_APP)"
$PM2 restart "$PM2_APP"

log "Deploy finalizado com sucesso."
