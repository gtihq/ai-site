import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('./dist', import.meta.url)));
const updatesRoot = resolve(fileURLToPath(new URL('./public/updates', import.meta.url)));
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';

const mime = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

function safePath(base, urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const cleaned = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const target = resolve(base, `.${cleaned}`);
  if (target !== base && !target.startsWith(`${base}${sep}`)) {
    return null;
  }
  return target;
}

function sendFile(res, path, status = 200) {
  const extension = extname(path).toLowerCase();
  const type = mime[extension] || 'application/octet-stream';
  const isUpdate = path.startsWith(`${updatesRoot}${sep}`);
  let cache = 'public, max-age=3600';
  if (isUpdate) {
    cache = 'public, max-age=300';
  } else if (extension === '.html') {
    cache = 'no-cache';
  }
  res.writeHead(status, {
    'Cache-Control': cache,
    'Content-Type': type,
    'X-Content-Type-Options': 'nosniff',
  });
  createReadStream(path).pipe(res);
}

function sendText(res, status, message) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
}

const server = createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  if (pathname.startsWith('/updates')) {
    const target = safePath(updatesRoot, pathname.slice('/updates'.length) || '/');
    if (!target) {
      sendText(res, 403, 'Forbidden');
      return;
    }
    if (existsSync(target) && statSync(target).isFile()) {
      sendFile(res, target);
      return;
    }
    sendText(res, 404, 'Not found');
    return;
  }

  const target = safePath(root, pathname);
  if (!target) {
    sendText(res, 403, 'Forbidden');
    return;
  }
  if (existsSync(target) && statSync(target).isFile()) {
    sendFile(res, target);
    return;
  }

  const fallback = join(root, 'index.html');
  if (existsSync(fallback)) {
    sendFile(res, fallback);
    return;
  }

  sendText(res, 404, 'Build the site first: npm run build');
});

server.listen(port, host, () => {
  console.log(`ai-site listening on http://${host}:${port}`);
});
