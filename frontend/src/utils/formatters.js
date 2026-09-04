export function money(value) {
  return `R$ ${Number(value || 0).toFixed(2).replace('.', ',')}`;
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}
