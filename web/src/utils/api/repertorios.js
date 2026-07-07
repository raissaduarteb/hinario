import { adminFetch } from "./adminAuth.js";

const BASE_URL = "https://hinario-api.onrender.com/api/Repertorio";

export async function Repertorio(tamanhoPagina) {
  const res = await fetch(
    `${BASE_URL}/Ativo?tamanhoPagina=${tamanhoPagina}`,
  );

  if (!res.ok) {
    const err = new Error("Falha ao buscar repertório.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function fetchTodosRepertorios() {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    const err = new Error("Falha ao buscar repertórios.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function fetchRepertorioPorId(id) {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    const err = new Error("Falha ao buscar repertório.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function criarRepertorio({ nome, data }) {
  return adminFetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, data }),
  });
}

export async function atualizarRepertorio(id, { nome, data }) {
  return adminFetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, data }),
  });
}

export async function apagarRepertorio(id) {
  return adminFetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}

export async function ativarRepertorio(id) {
  return adminFetch(`${BASE_URL}/${id}/ativar`, { method: "PUT" });
}

export async function adicionarHinoRepertorio(id, hinoId) {
  return adminFetch(`${BASE_URL}/${id}/hinos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hinoId }),
  });
}

export async function removerHinoRepertorio(id, itemId) {
  return adminFetch(`${BASE_URL}/${id}/hinos/${itemId}`, { method: "DELETE" });
}

export async function reordenarHinosRepertorio(id, itemIds) {
  return adminFetch(`${BASE_URL}/${id}/hinos/ordem`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemIds }),
  });
}
