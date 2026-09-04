import { api } from './api.js';

export const compraService = {
  list: () => api.get('/purchases'),
  create: (purchase) => api.post('/purchases', purchase),
};
