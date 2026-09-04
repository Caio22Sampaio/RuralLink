const controller = require('../controllers/compradorController');

module.exports = { get: controller.list, post: controller.remember };
