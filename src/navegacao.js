const ordemTipos = ["H", "C", "S", "HC", "L"];

export const parseIdentificador = (id) => {
  const [tipo, numero] = id.split("/");
  return { tipo, numero: Number(numero) };
};

export const irParaProximo = async (identificador, navigate) => {
  const { tipo, numero } = parseIdentificador(identificador);

  let res = await fetch(`/api/hino/${tipo}/${numero}/proximo`);
  let data = await res.json();

  if (data) {
    navigate(`/hino/${data.id}`);
    return;
  }

  const index = ordemTipos.indexOf(tipo);

  for (let i = index + 1; i < ordemTipos.length; i++) {
    res = await fetch(`/api/hino/${ordemTipos[i]}/primeiro`);
    data = await res.json();

    if (data) {
      navigate(`/hino/${data.id}`);
      return;
    }
  }
};

export const irParaAnterior = async (identificador, navigate) => {
  const { tipo, numero } = parseIdentificador(identificador);

  let res = await fetch(`/api/hinos/${tipo}/${numero}/anterior`);
  let data = await res.json();

  if (data) {
    navigate(`/hino/${data.id}`);
    return;
  }

  const index = ordemTipos.indexOf(tipo);

  for (let i = index - 1; i >= 0; i--) {
    res = await fetch(`/api/hinos/${ordemTipos[i]}/ultimo`);
    data = await res.json();

    if (data) {
      navigate(`/hino/${data.id}`);
      return;
    }
  }
};
