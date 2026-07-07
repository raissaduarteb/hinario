const TOKEN_KEY = "hinario_admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function adminFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { ...authHeaders(), ...options.headers },
  });

  if (res.status === 401) {
    clearToken();
    const err = new Error("Sessão expirada. Faça login novamente.");
    err.status = 401;
    throw err;
  }

  if (!res.ok) {
    let mensagem = "Falha na requisição.";
    try {
      const body = await res.json();
      mensagem = body.mensagem || mensagem;
    } catch {
      /* resposta sem corpo JSON */
    }
    const err = new Error(mensagem);
    err.status = res.status;
    throw err;
  }

  if (res.status === 204) return null;
  return res.json();
}
