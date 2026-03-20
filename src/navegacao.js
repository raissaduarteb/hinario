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
    navigate(`/hino/${data.identificador.replace("-", "")}`);
    return;
  }

  const index = ordemTipos.indexOf(tipo);

  for (let i = index - 1; i >= 0; i--) {
    res = await fetch(`/api/hino/${ordemTipos[i]}/ultimo`);
    data = await res.json();

    if (data) {
      navigate(`/hino/${data.identificador.replace("-", "")}`);
      return;
    }
  }
};

export const useSwipe = (onSwipeLeft, onSwipeRight, minDistance = 50) => {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const [dragX, setDragX] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const handleTouchStart = (e) => {
    if (exiting) return;

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setDragX(0);
    setOpacity(1);
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current === null || exiting) return;
    const diffX = e.touches[0].clientX - touchStartX.current;
    const diffY = e.touches[0].clientY - touchStartY.current;

    // Se o movimento vertical for maior que o horizontal, não permitir arrasto horizontal
    if (Math.abs(diffY) > Math.abs(diffX)) {
      return;
    }

    setDragX(diffX);
    setOpacity(Math.max(0, 1 - Math.abs(diffX) / 100));
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || exiting) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Só permitir swipe horizontal se o movimento vertical for mínimo
    if (Math.abs(diffY) > 20) {
      setOpacity(1);
      setDragX(0);
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }

    const opacityAtEnd = Math.max(0, 1 - Math.abs(diffX) / 100);

    if (opacityAtEnd < 0.8) {
      setOpacity(0);
      setDragX(0);
      if (diffX > 0) onSwipeLeft();
      else onSwipeRight();
    } else {
      setOpacity(1);
      setDragX(0);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return {
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    dragX,
    exiting,
    opacity,
    setOpacity,
  };
};
