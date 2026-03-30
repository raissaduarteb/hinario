import { useState } from "react";

/**
 * Hook para gerenciar o estado do modo (Hinário ou Harpa Cristã)
 */
export const useModoState = (initialValue = "Hinário") => {
  const [modo, setModo] = useState(initialValue);

  const handleSwitch = (newModo) => {
    setModo(newModo);
  };

  return { modo, setModo: handleSwitch };
};
