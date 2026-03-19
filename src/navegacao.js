import { useRef, useState } from "react";
const ordemTipos = ["H", "C", "S", "HC", "L"];

export const parseIdentificador = (id) => {
  const match = id.match(/^([A-Za-z]+)-?(\d+)$/);
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

export const useSwipe = (onSwipeLeft, onSwipeRight, minDistance = 50) => {
  const touchStartX = useRef(null);
  const [dragX, setDragX] = useState(0);
  const [exiting, setExiting] = useState(false);

  const handleTouchStart = (e) => {
    if (exiting) return;

    touchStartX.current = e.touches[0].clientX;
    setDragX(0);
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current === null || exiting) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    setDragX(diff);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || exiting) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) >= minDistance) {
      const direction = diff > 0 ? -1 : 1; // -1 esquerda, 1 direita
      setExiting(true);
      setDragX(direction * window.innerWidth); // joga para fora da tela

      // espera a animação terminar antes de navegar
      setTimeout(() => {
        setExiting(false);
        setDragX(0);
        if (diff > 0) onSwipeLeft();
        else onSwipeRight();
      }, 300);
    } else {
      // não completou, volta ao lugar
      setDragX(0);
    }

    touchStartX.current = null;
  };

  return { handleTouchStart, handleTouchEnd, handleTouchMove, dragX, exiting };
};
