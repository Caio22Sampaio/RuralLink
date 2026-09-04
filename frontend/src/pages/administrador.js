import { produtorService, compradorService, produtoService, compraService } from '../services/index.js';

export const adminPage = {
  producers: () => produtorService.list(),
  buyers: () => compradorService.list(),
  products: () => produtoService.list(),
  purchases: () => compraService.list(),
};
