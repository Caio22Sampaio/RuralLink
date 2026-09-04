import { appState } from './state/appState.js';
import { produtorService } from './services/produtorService.js';
import { compradorService } from './services/compradorService.js';
import { produtoService } from './services/produtoService.js';
import { compraService } from './services/compraService.js';

export const services = { produtorService, compradorService, produtoService, compraService };

export function mountApp() {
  window.RuralLink = { appState, services };
  const script = document.createElement('script');
  script.src = '/app.js';
  script.dataset.legacyUi = 'compatibility-layer';
  document.body.appendChild(script);
}
