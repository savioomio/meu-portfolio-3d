# Deploy automático — servidor caseiro (Termux/Android + Cloudflare Tunnel)

Este portfólio é servido por um celular Android rodando Termux, exposto via
Cloudflare Tunnel. Como o celular está atrás de CGNAT (sem IP público), o
deploy automático **não** usa SSH direto (como era na VPS antiga). Em vez
disso, usamos um **webhook**: o GitHub avisa o celular quando há push na `main`,
e o celular se atualiza sozinho.

## Fluxo

```
git push main
   → GitHub dispara webhook (POST assinado com HMAC)
   → deploy.savioomiodev.com.br (Cloudflare Tunnel)
   → webhook-server.cjs no celular (porta 3002, só localhost)
   → valida assinatura → deploy.sh
   → git pull + npm install + fix WASM + build + pm2 restart portfolio
```

## Arquivos

- `webhook-server.cjs` — servidor HTTP (Node puro) que valida o webhook do
  GitHub e dispara o deploy. Roda via pm2 (`deploy-webhook`), só em `127.0.0.1`.
- `deploy.sh` — script que atualiza o repo e rebuilda o site.
- `fix-rollup-termux.sh` — reaplica o fallback WASM do Rollup (necessário no
  Termux, onde o binário nativo do Rollup não carrega).

## Variáveis de ambiente (no celular)

O `webhook-server.cjs` precisa de:

- `WEBHOOK_SECRET` — **obrigatória**, o mesmo segredo configurado no webhook do
  GitHub. Guardado em `~/.webhook-secret` (fora do git).
- `WEBHOOK_PORT` — default `3002`.

## Como subir o webhook no celular (via pm2)

```sh
export WEBHOOK_SECRET="$(cat ~/.webhook-secret)"
pm2 start ~/meu-portfolio-3d/deploy/webhook-server.cjs --name deploy-webhook
pm2 save
```

## Config do webhook no GitHub

Settings → Webhooks → Add webhook:

- Payload URL: `https://deploy.savioomiodev.com.br/webhook`
- Content type: `application/json`
- Secret: o mesmo de `~/.webhook-secret`
- Events: apenas **push**

## Rota no Cloudflare Tunnel

Em `~/.cloudflared/config.yml`, sob `ingress:`:

```yaml
  - hostname: deploy.savioomiodev.com.br
    service: http://localhost:3002
```

E criar o DNS: `cloudflared tunnel route dns casa deploy.savioomiodev.com.br`
