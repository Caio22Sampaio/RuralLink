const compradorService = require('../services/compradorService');

function list() { return compradorService.list(); }
function remember(body) { if (!body || !body.email) return { status: 400, body: { error: 'email is required' } }; return { status: 200, body: compradorService.remember(body) }; }

module.exports = { list, remember };
