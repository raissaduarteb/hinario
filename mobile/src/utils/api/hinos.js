const API_BASE_URL = "https://hinario-api.onrender.com/api";

export async function fetchHinoPorIdentificador(identificador) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/Hino/identificador/${identificador}`,
    );

    if (!res.ok) {
      const err = new Error("Falha ao buscar hino.");
      err.status = res.status;
      throw err;
    }

    return res.json();
  } catch (error) {
    console.error("Erro ao buscar hino:", error);
    throw error;
  }
}

export async function fetchHinosPorPesquisa(texto) {
  try {
    const res = await fetch(`${API_BASE_URL}/Hino/pesquisar?texto=${texto}`);

    if (!res.ok) {
      throw new Error("Falha ao pesquisar hinos.");
    }

    return res.json();
  } catch (error) {
    console.error("Erro ao pesquisar hinos:", error);
    throw error;
  }
}
