export function normalizarIdentificador(valor) {
  return (valor || "").toUpperCase().replace(/-/g, "").trim();
}

export function hinoCorrespondeABusca(hino, termo) {
  const termoNormalizado = termo.trim().toLowerCase();
  if (!termoNormalizado) return true;

  const termoIdentificador = normalizarIdentificador(termo);
  const tituloMatch = hino.titulo?.toLowerCase().includes(termoNormalizado);
  const identificadorMatch = normalizarIdentificador(hino.identificador).startsWith(
    termoIdentificador,
  );

  return Boolean(tituloMatch || identificadorMatch);
}
