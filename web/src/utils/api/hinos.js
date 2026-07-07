import { adminFetch } from "./adminAuth.js";

const BASE_URL = "https://hinario-api.onrender.com/api/Hino";

export async function fetchHinoPorIdentificador(identificador, { signal } = {}) {
  const res = await fetch(
    `https://hinario-api.onrender.com/api/Hino/identificador/${identificador}`,
    { signal },
  );

  if (!res.ok) {
    const err = new Error("Falha ao buscar hino.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function fetchHinoPorId(id) {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    const err = new Error("Falha ao buscar hino.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function fetchTodosHinos() {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    const err = new Error("Falha ao buscar hinos.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function criarHino({ identificador, titulo, letra }) {
  return adminFetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identificador, titulo, letra }),
  });
}

export async function atualizarHino(id, { identificador, titulo, letra }) {
  return adminFetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, identificador, titulo, letra }),
  });
}

export async function apagarHino(id) {
  return adminFetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}

