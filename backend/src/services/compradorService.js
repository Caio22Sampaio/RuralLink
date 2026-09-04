const store = require('../models/dataStore');

function list() {
  const data = store.read();
  return data.buyers.map((buyer) => {
    const purchases = data.purchases.filter((purchase) => purchase.buyerEmail === buyer.email);
    return { ...buyer, purchases, purchaseCount: purchases.length, total: purchases.reduce((sum, item) => sum + Number(item.total || 0), 0) };
  });
}

function remember(input) {
  const data = store.read();
  const buyer = { email: input.email, name: input.name || 'Comprador' };
  const index = data.buyers.findIndex((item) => item.email === buyer.email);
  if (index >= 0) data.buyers[index] = { ...data.buyers[index], ...buyer };
  else data.buyers.push(buyer);
  store.write(data);
  return buyer;
}

module.exports = { list, remember };
