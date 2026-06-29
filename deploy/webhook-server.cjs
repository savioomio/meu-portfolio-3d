// ============================================================
// Servidor de Webhook de Deploy (Node puro, sem dependencias)
// ------------------------------------------------------------
// Recebe o webhook "push" do GitHub, valida a assinatura HMAC
// (X-Hub-Signature-256) com o segredo, confere que foi push na
// branch main e dispara o script de deploy.
//
// Variaveis de ambiente:
//   WEBHOOK_SECRET  (obrigatoria) segredo compartilhado com o GitHub
//   WEBHOOK_PORT    (default 3002)
//   DEPLOY_SCRIPT   (default ~/meu-portfolio-3d/deploy/deploy.sh)
//   DEPLOY_BRANCH   (default main)
// ============================================================
const http = require("http");
const crypto = require("crypto");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

const SECRET = process.env.WEBHOOK_SECRET;
const PORT = parseInt(process.env.WEBHOOK_PORT || "3002", 10);
const HOME = os.homedir();
const DEPLOY_SCRIPT =
  process.env.DEPLOY_SCRIPT || path.join(HOME, "meu-portfolio-3d", "deploy", "deploy.sh");
const DEPLOY_BRANCH = process.env.DEPLOY_BRANCH || "main";
const LOG_FILE = path.join(HOME, "deploy.log");

if (!SECRET) {
  console.error("ERRO: variavel WEBHOOK_SECRET nao definida. Abortando.");
  process.exit(1);
}

let deploying = false;

function log(msg) {
  const line = `[webhook ${new Date().toISOString()}] ${msg}\n`;
  process.stdout.write(line);
  try {
    fs.appendFileSync(LOG_FILE, line);
  } catch (_) {}
}

// Comparacao segura contra timing attacks
function verifySignature(rawBody, signatureHeader) {
  if (!signatureHeader) return false;
  const expected =
    "sha256=" + crypto.createHmac("sha256", SECRET).update(rawBody).digest("hex");
  const a = Buffer.from(signatureHeader);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function runDeploy() {
  if (deploying) {
    log("Deploy ja em andamento — ignorando disparo concorrente.");
    return;
  }
  deploying = true;
  log("Disparando deploy: " + DEPLOY_SCRIPT);
  const child = spawn("sh", [DEPLOY_SCRIPT], {
    detached: true,
    stdio: ["ignore", fs.openSync(LOG_FILE, "a"), fs.openSync(LOG_FILE, "a")],
    env: process.env,
  });
  child.on("exit", (code) => {
    deploying = false;
    log("Deploy script terminou com codigo " + code);
  });
  child.on("error", (err) => {
    deploying = false;
    log("Falha ao iniciar deploy: " + err.message);
  });
}

const server = http.createServer((req, res) => {
  // Healthcheck simples
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok\n");
    return;
  }

  if (req.method !== "POST" || req.url !== "/webhook") {
    res.writeHead(404);
    res.end("not found\n");
    return;
  }

  const chunks = [];
  let size = 0;
  req.on("data", (c) => {
    size += c.length;
    if (size > 5 * 1024 * 1024) {
      // payload absurdo: corta
      req.destroy();
      return;
    }
    chunks.push(c);
  });

  req.on("end", () => {
    const rawBody = Buffer.concat(chunks);
    const sig = req.headers["x-hub-signature-256"];

    if (!verifySignature(rawBody, sig)) {
      log("Assinatura invalida — rejeitado (401). IP: " + req.socket.remoteAddress);
      res.writeHead(401, { "Content-Type": "text/plain" });
      res.end("invalid signature\n");
      return;
    }

    const event = req.headers["x-github-event"];
    if (event === "ping") {
      log("Recebido ping do GitHub — OK.");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("pong\n");
      return;
    }

    if (event !== "push") {
      log("Evento ignorado: " + event);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("ignored event\n");
      return;
    }

    let payload;
    try {
      payload = JSON.parse(rawBody.toString("utf8"));
    } catch (e) {
      res.writeHead(400);
      res.end("bad json\n");
      return;
    }

    const ref = payload.ref || "";
    if (ref !== "refs/heads/" + DEPLOY_BRANCH) {
      log("Push em ref " + ref + " — nao e a branch de deploy (" + DEPLOY_BRANCH + "). Ignorado.");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("not deploy branch\n");
      return;
    }

    log("Push valido na branch " + DEPLOY_BRANCH + " por " + (payload.pusher && payload.pusher.name));
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.end("deploy accepted\n");
    runDeploy();
  });
});

server.listen(PORT, "127.0.0.1", () => {
  log("Servidor de webhook ouvindo em 127.0.0.1:" + PORT);
});
