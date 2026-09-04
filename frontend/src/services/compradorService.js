import { api } from './api.js';

export const compradorService = {
  list: () => api.get('/buyers'),
  remember: (buyer) => api.post('/buyers', buyer),
};
