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

