#!/data/data/com.termux/files/usr/bin/sh
# ============================================================
# Fix do Rollup para Termux/Android (Bionic libc)
# ------------------------------------------------------------
# O binario nativo do Rollup (@rollup/rollup-android-arm64) nao
# carrega no Termux: dlopen falha com "__emutls_get_address"
# (simbolo da glibc/libgcc que nao existe na Bionic libc do Android).
#
# Solucao oficial: usar o fallback WebAssembly (@rollup/wasm-node),
# copiando o dist dele por cima do dist do rollup nativo.
#
# Rode este script APOS cada `npm install` no celular, antes do build.
# Ele e idempotente (pode rodar varias vezes sem problema).
# ============================================================
set -e

PROJ_DIR="${1:-$HOME/meu-portfolio-3d}"
cd "$PROJ_DIR"

# Descobre a versao do rollup instalada para casar a versao do wasm-node
ROLLUP_VER=$(node -p "require('./node_modules/rollup/package.json').version" 2>/dev/null || echo "")

if [ -z "$ROLLUP_VER" ]; then
  echo "[fix-rollup] rollup nao encontrado em node_modules — pulei o fix."
  exit 0
fi

# Se ja esta com WASM aplicado, nao faz nada
if [ -f "node_modules/rollup/dist/wasm-node/bindings_wasm_bg.wasm" ]; then
  echo "[fix-rollup] WASM ja aplicado (rollup $ROLLUP_VER). OK."
  exit 0
fi

echo "[fix-rollup] Instalando @rollup/wasm-node@$ROLLUP_VER ..."
npm install --legacy-peer-deps --ignore-scripts --no-save "@rollup/wasm-node@$ROLLUP_VER"

echo "[fix-rollup] Copiando dist do wasm-node sobre o rollup nativo ..."
cp -r node_modules/@rollup/wasm-node/dist/* node_modules/rollup/dist/

if [ -f "node_modules/rollup/dist/wasm-node/bindings_wasm_bg.wasm" ]; then
  echo "[fix-rollup] OK — rollup $ROLLUP_VER agora usa WASM."
else
  echo "[fix-rollup] ERRO: WASM nao foi aplicado corretamente." >&2
  exit 1
fi
