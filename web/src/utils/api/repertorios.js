export async function Repertorio(tamanhoPagina) {
  const res = await fetch(
    `https://hinario-api.onrender.com/api/Repertorio/Ativo?tamanhoPagina=${tamanhoPagina}`,
  );

  if (!res.ok) {
    const err = new Error("Falha ao buscar repertório.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}
