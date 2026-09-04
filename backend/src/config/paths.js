const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..', '..');

module.exports = {
  rootDir,
  dataFile: path.join(rootDir, 'backend', 'data', 'ruralLink.json'),
  frontendDir: path.join(rootDir, 'frontend'),
};
