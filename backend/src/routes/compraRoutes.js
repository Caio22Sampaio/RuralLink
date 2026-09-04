const controller = require('../controllers/compraController');

module.exports = { get: controller.list, post: controller.create };
