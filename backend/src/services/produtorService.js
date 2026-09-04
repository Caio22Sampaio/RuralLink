const store = require('../models/dataStore');

function list() {
  const data = store.read();
  return data.producers.map((producer) => ({
    ...producer,
    products: data.products.filter((product) => product.producerEmail === producer.email),
  }));
}

function remember(input) {
  const data = store.read();
  const producer = { email: input.email, name: input.name || 'Produtor Rural', whatsapp: input.whatsapp || 'Código WhatsApp simulado' };
  const index = data.producers.findIndex((item) => item.email === producer.email);
  if (index >= 0) data.producers[index] = { ...data.producers[index], ...producer };
  else data.producers.push(producer);
  store.write(data);
  return producer;
}

module.exports = { list, remember };
