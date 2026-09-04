import { api } from './api.js';

export const produtorService = {
  list: () => api.get('/producers'),
  remember: (producer) => api.post('/producers', producer),
};
