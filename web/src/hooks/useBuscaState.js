import { useEffect, useState } from "react";

/**
 * Hook para gerenciar o estado da busca com persistência em localStorage
 */
export const useBuscaState = () => {
  const [busca, setBusca] = useState(() => {
    const saved = localStorage.getItem("busca");
    return saved || "";
  });

  useEffect(() => {
    localStorage.setItem("busca", busca);
  }, [busca]);

  return { busca, setBusca };
};
