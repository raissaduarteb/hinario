import { useState } from "react";

/**
 * Hook para gerenciar o estado do hino selecionado
 */
export const useHinoSelecionado = () => {
  const [hinoSelecionado, setHinoSelecionado] = useState({
    id: "",
    titulo: "",
    letra: "",
  });

  return { hinoSelecionado, setHinoSelecionado };
};
