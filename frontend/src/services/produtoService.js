import { api } from './api.js';

export const produtoService = {
  list: () => api.get('/products'),
  create: (product) => api.post('/products', product),
  update: (id, product) => api.put(`/products/${id}`, product),
  remove: (id) => api.remove(`/products/${id}`),
};
