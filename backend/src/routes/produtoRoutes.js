const controller = require('../controllers/produtoController');

module.exports = { get: controller.list, post: controller.create, put: controller.update, delete: controller.remove };
