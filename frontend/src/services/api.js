const API_BASE = globalThis.RURAL_LINK_API_URL || '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, { headers: { 'Content-Type': 'application/json' }, ...options });
  const body = response.status === 204 ? null : await response.json();
  if (!response.ok) throw Object.assign(new Error(body?.error || 'API request failed'), { status: response.status, body });
  return body;
}

export const api = {
  get: (path) => request(path),
  post: (path, data) => request(path, { method: 'POST', body: JSON.stringify(data) }),
  put: (path, data) => request(path, { method: 'PUT', body: JSON.stringify(data) }),
  remove: (path) => request(path, { method: 'DELETE' }),
};
