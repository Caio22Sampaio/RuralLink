const { randomUUID } = require('crypto');
const store = require('../models/dataStore');

function list() {
  return store.read().purchases;
}

function create(input) {
  const data = store.read();
  const product = data.products.find((item) => item.id === input.productId);
  const quantity = Number(input.quantity);
  if (!product) return { error: 'PRODUCT_NOT_FOUND' };
  if (!Number.isFinite(quantity) || quantity <= 0) return { error: 'INVALID_QUANTITY' };
  if (quantity > Number(product.quantity)) return { error: 'INSUFFICIENT_STOCK', available: product.quantity };
  product.quantity = Number(product.quantity) - quantity;
  const purchase = {
    id: randomUUID(),
    buyerEmail: input.buyerEmail,
    producerEmail: product.producerEmail,
    producer: product.producer,
    productId: product.id,
    product: product.name,
    quantity,
    unit: product.unit,
    price: Number(product.price),
    total: quantity * Number(product.price),
    date: new Date().toLocaleDateString('pt-BR'),
  };
  data.purchases.push(purchase);
  store.write(data);
  return { purchase, product };
}

module.exports = { list, create };
