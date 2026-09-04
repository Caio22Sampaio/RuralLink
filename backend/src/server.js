const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { rootDir } = require('./config/paths');
const { readJson } = require('./middleware/json');
const { applyCors } = require('./middleware/cors');
const produtorRoutes = require('./routes/produtorRoutes');
const compradorRoutes = require('./routes/compradorRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const compraRoutes = require('./routes/compraRoutes');

const port = Number(process.env.PORT || 3000);
const staticFiles = { '/': 'index.html', '/index.html': 'index.html', '/app.js': 'app.js', '/styles.css': 'styles.css' };

function send(response, status, body) {
  response.statusCode = status;
  if (body === null) return response.end();
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(body));
}

function serveStatic(request, response, pathname) {
  const relative = staticFiles[pathname];
  const file = relative ? path.join(rootDir, relative) : pathname.startsWith('/frontend/') ? path.join(rootDir, pathname.slice(1)) : null;
  if (!file || !path.resolve(file).startsWith(path.resolve(rootDir))) return false;
  if (!fs.existsSync(file)) return false;
  const contentType = file.endsWith('.css') ? 'text/css; charset=utf-8' : file.endsWith('.js') ? 'text/javascript; charset=utf-8' : 'text/html; charset=utf-8';
  response.statusCode = 200;
  response.setHeader('Content-Type', contentType);
  response.end(fs.readFileSync(file));
  return true;
}

async function handle(request, response) {
  applyCors(response);
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (request.method === 'OPTIONS') return send(response, 204, null);
  if (!url.pathname.startsWith('/api/')) return serveStatic(request, response, url.pathname) || send(response, 404, { error: 'not found' });
  const parts = url.pathname.split('/').filter(Boolean);
  const resource = parts[1];
  const id = parts[2];
  const routes = { producers: produtorRoutes, buyers: compradorRoutes, products: produtoRoutes, purchases: compraRoutes };
  const route = routes[resource];
  if (!route || !route[request.method.toLowerCase()]) return send(response, 404, { error: 'route not found' });
  try {
    const body = ['POST', 'PUT'].includes(request.method) ? await readJson(request) : undefined;
    const handler = route[request.method.toLowerCase()];
    const result = request.method === 'PUT' || request.method === 'DELETE' ? handler(id, body) : handler(body);
    return send(response, result?.status || 200, result?.body === undefined ? result : result.body);
  } catch (error) {
    return send(response, error.message === 'invalid json' ? 400 : 500, { error: error.message });
  }
}

const server = http.createServer(handle);
if (require.main === module) server.listen(port, () => console.log(`RuralLink API listening on http://localhost:${port}`));
module.exports = server;
