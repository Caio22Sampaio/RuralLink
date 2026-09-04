const fs = require('fs');
const { dataFile } = require('../config/paths');

const emptyData = () => ({
  producers: [],
  buyers: [],
  products: [],
  purchases: [],
});

function ensureFile() {
  fs.mkdirSync(require('path').dirname(dataFile), { recursive: true });
  if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, JSON.stringify(emptyData(), null, 2));
}

function read() {
  ensureFile();
  try {
    return { ...emptyData(), ...JSON.parse(fs.readFileSync(dataFile, 'utf8')) };
  } catch (error) {
    return emptyData();
  }
}

function write(data) {
  ensureFile();
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  return data;
}

module.exports = { read, write };
