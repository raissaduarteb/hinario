import { useEffect, useRef } from "react";

/**
 * Executa `limpar` quando o app deixa de ficar visível (trocar de app,
 * bloquear a tela, fechar a aba). Limpando na saída, ao reabrir o app o
 * campo já aparece vazio — sem o texto antigo piscando na tela.
 */
export const useLimparAoSairDoApp = (limpar) => {
  const limparRef = useRef(limpar);

  useEffect(() => {
    limparRef.current = limpar;
  }, [limpar]);

  useEffect(() => {
    const executar = () => limparRef.current?.();
    const aoTrocarVisibilidade = () => {
      if (document.visibilityState === "hidden") executar();
    };

    document.addEventListener("visibilitychange", aoTrocarVisibilidade);
    // iOS/Safari nem sempre dispara visibilitychange ao sair do app
    window.addEventListener("pagehide", executar);

    return () => {
      document.removeEventListener("visibilitychange", aoTrocarVisibilidade);
      window.removeEventListener("pagehide", executar);
    };
  }, []);
};
