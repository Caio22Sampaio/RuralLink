import { produtoService } from '../services/produtoService.js';

export const producerPage = {
  products: () => produtoService.list(),
};
