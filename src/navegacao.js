const ordemTipos = ["H", "C", "S", "HC", "L"];

export const parseIdentificador = (id) => {
  const match = id.match(/^([A-Za-z]+)(\d+)$/);
  if (!match) return { tipo: "", numero: 0 };
  return { tipo: match[1], numero: Number(match[2]) };
};

export const irParaProximo = async (identificador, navigate) => {
  const { tipo, numero } = parseIdentificador(identificador);

  let res = await fetch(
    `https://hinario-api.onrender.com/api/hino/${tipo}/${numero}/proximo`,
  );
  let data = await res.json();

  if (data) {
    navigate(`/hino/${data.identificador.replace("-", "")}`);
    return;
  }

  const index = ordemTipos.indexOf(tipo);

  for (let i = index + 1; i < ordemTipos.length; i++) {
    res = await fetch(
      `https://hinario-api.onrender.com/api/hino/${ordemTipos[i]}/primeiro`,
    );
    data = await res.json();

    if (data) {
      navigate(`/hino/${data.identificador.replace("-", "")}`);
      return;
    }
  }
};

export const irParaAnterior = async (identificador, navigate) => {
  const { tipo, numero } = parseIdentificador(identificador);

  let res = await fetch(
    `https://hinario-api.onrender.com/api/hino/${tipo}/${numero}/anterior`,
  );
  let data = await res.json();

  if (data) {
    navigate(`/hino/${data.id}`);
    return;
  }

  const index = ordemTipos.indexOf(tipo);

  for (let i = index - 1; i >= 0; i--) {
    res = await fetch(`/api/hino/${ordemTipos[i]}/ultimo`);
    data = await res.json();

    if (data) {
      navigate(`/hino/${data.id}`);
      return;
    }
  }
};
