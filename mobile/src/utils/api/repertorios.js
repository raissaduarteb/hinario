const BASE_URL = "https://hinario-api.onrender.com/api/Repertorio";

export async function fetchRepertorioAtivo(tamanhoPagina) {
  const res = await fetch(`${BASE_URL}/Ativo?tamanhoPagina=${tamanhoPagina}`);

  if (!res.ok) {
    const err = new Error("Falha ao buscar repertório.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}
