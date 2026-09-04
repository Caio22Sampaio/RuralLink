const compraService = require('../services/compraService');

function list() { return compraService.list(); }
function create(body) {
  const result = compraService.create(body || {});
  if (result.error === 'PRODUCT_NOT_FOUND') return { status: 404, body: { error: 'product not found' } };
  if (result.error === 'INSUFFICIENT_STOCK') return { status: 409, body: { error: 'insufficient stock', available: result.available } };
  if (result.error) return { status: 400, body: { error: 'invalid quantity' } };
  return { status: 201, body: result };
}

module.exports = { list, create };
