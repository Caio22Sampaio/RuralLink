const produtorService = require('../services/produtorService');

function list() { return produtorService.list(); }
function remember(body) { if (!body || !body.email) return { status: 400, body: { error: 'email is required' } }; return { status: 200, body: produtorService.remember(body) }; }

module.exports = { list, remember };
