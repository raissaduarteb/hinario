import { useCallback, useEffect, useState } from "react";
import { useLimparAoSairDoApp } from "./useLimparAoSairDoApp";

const CHAVE_ANTIGA = "busca";

/**
 * Hook para gerenciar o estado da busca.
 * O texto vive apenas enquanto o app está aberto: não é persistido e é
 * apagado ao sair do app, então ao reabrir a barra de pesquisa está vazia.
 */
export const useBuscaState = () => {
  const [busca, setBusca] = useState("");

  // Remove a busca salva por versões anteriores do app
  useEffect(() => {
    localStorage.removeItem(CHAVE_ANTIGA);
  }, []);

  useLimparAoSairDoApp(useCallback(() => setBusca(""), []));

  return { busca, setBusca };
};
