import { produtoService, compraService } from '../services/index.js';

export const buyerPage = {
  products: () => produtoService.list(),
  purchases: () => compraService.list(),
};
