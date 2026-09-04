const controller = require('../controllers/produtorController');

module.exports = { get: controller.list, post: controller.remember };
