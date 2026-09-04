const { randomUUID } = require('crypto');
const store = require('../models/dataStore');

function list() {
  return store.read().products;
}

function create(input) {
  const data = store.read();
  const product = {
    id: input.id || randomUUID(),
    producerEmail: input.producerEmail,
    producer: input.producer || 'Produtor Rural',
    name: input.name,
    quantity: Number(input.quantity) || 0,
    unit: input.unit || 'kg',
    price: Number(input.price) || 0,
    harvest: input.harvest || '',
    description: input.description || '',
  };
  data.products.push(product);
  store.write(data);
  return product;
}

function update(id, input) {
  const data = store.read();
  const index = data.products.findIndex((product) => product.id === id);
  if (index < 0) return null;
  data.products[index] = { ...data.products[index], ...input, id };
  store.write(data);
  return data.products[index];
}

function remove(id) {
  const data = store.read();
  const before = data.products.length;
  data.products = data.products.filter((product) => product.id !== id);
  if (before === data.products.length) return false;
  store.write(data);
  return true;
}

module.exports = { list, create, update, remove };
