// Runs the site without Vercel (e.g. on Render, free), using the same api/ handlers and the same Turso database.
// Added 19-11-2026 when the Vercel Hobby team was paused for going over its monthly CPU limit.
// Mirrors vercel.json: the app/ folder is the website, api/<name>.js are the functions, plus the same rewrites/redirects.
// Start: node server.js   (PORT, TURSO_*, GOOGLE_CLIENT_ID, SESSION secrets etc. come from the host's environment)
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname, APP = path.join(ROOT, 'app'), API = path.join(ROOT, 'api');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json' };

// "/data/:f" -> regex with named params; destination params filled in
function match(src, p) {
  const names = [];
  const re = new RegExp('^' + src.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/:(\w+)/g, (_, n) => { names.push(n); return '([^/]+)'; }) + '$');
  const m = re.exec(p);
  if (!m) return null;
  const o = {}; names.forEach((n, i) => { o[n] = m[i + 1]; });
  return o;
}
const fill = (dest, o) => dest.replace(/:(\w+)/g, (_, n) => o[n] ?? '');

const handlers = {};
function handlerFor(name) {
  if (!/^[a-z0-9-]+$/i.test(name) || name.startsWith('_')) return null;
  if (!(name in handlers)) { const f = path.join(API, name + '.js'); handlers[name] = fs.existsSync(f) ? require(f) : null; }
  return handlers[name];
}

function serveFile(req, res, p) {
  let f = path.normalize(path.join(APP, decodeURIComponent(p)));
  if (!f.startsWith(APP)) { res.statusCode = 403; return res.end(); }
  try { if (fs.statSync(f).isDirectory()) f = path.join(f, 'index.html'); } catch (e) {
    if (!path.extname(f) && fs.existsSync(f + '.html')) f += '.html'; // Vercel cleanUrls-style fallback
  }
  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) {
      res.statusCode = 404; res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end('<h1>404</h1><p>Not found. <a href="/">Home</a></p>');
    }
    res.setHeader('Content-Type', TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream');
    res.setHeader('Content-Length', st.size);
    // pages always fresh (they change on every deploy), other files cached for an hour
    res.setHeader('Cache-Control', /\.html$/.test(f) ? 'no-cache' : 'public, max-age=3600');
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(f).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://x');
    let p = u.pathname, search = u.search;
    for (const r of cfg.redirects || []) {
      const o = match(r.source, p);
      if (o) { res.statusCode = r.permanent ? 308 : 307; res.setHeader('Location', fill(r.destination, o)); return res.end(); }
    }
    for (const r of cfg.rewrites || []) {
      const o = match(r.source, p);
      if (o) {
        const d = new URL(fill(r.destination, o), 'http://x');
        for (const [k, v] of u.searchParams) if (!d.searchParams.has(k)) d.searchParams.set(k, v);
        p = d.pathname; search = d.search; req.url = p + search;
        break;
      }
    }
    if (p.startsWith('/api/')) {
      const h = handlerFor(p.slice(5).replace(/\/$/, ''));
      if (!h) { res.statusCode = 404; res.setHeader('Content-Type', 'application/json'); return res.end('{"error":"Not found"}'); }
      req.query = Object.fromEntries(new URLSearchParams(search));
      return await h(req, res);
    }
    if (p === '/healthz') { res.statusCode = 200; return res.end('ok'); }
    serveFile(req, res, p);
  } catch (e) {
    console.error(e);
    if (!res.headersSent) { res.statusCode = 500; res.setHeader('Content-Type', 'application/json'); }
    res.end('{"error":"Something went wrong"}');
  }
});

const PORT = parseInt(process.env.PORT || '3000', 10);
server.listen(PORT, () => console.log('bachy101 listening on ' + PORT));
