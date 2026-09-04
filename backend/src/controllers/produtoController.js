const produtoService = require('../services/produtoService');

function list() { return produtoService.list(); }
function create(body) { if (!body || !body.name || !body.producerEmail) return { status: 400, body: { error: 'name and producerEmail are required' } }; return { status: 201, body: produtoService.create(body) }; }
function update(id, body) { const product = produtoService.update(id, body || {}); return product ? { status: 200, body: product } : { status: 404, body: { error: 'product not found' } }; }
function remove(id) { return produtoService.remove(id) ? { status: 204, body: null } : { status: 404, body: { error: 'product not found' } }; }

module.exports = { list, create, update, remove };
