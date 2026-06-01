import React from "react";

const Tecla = ({ indice, numero, onClickTecla }) => {
  return (
    <div
      onClick={() => onClickTecla(numero)}
      key={indice}
      className={`botao ${numero === 0 ? "zero" : ""}`}
    >
      <span style={isNaN(numero) ? { fontWeight: 800 } : { fontWeight: 300 }}>
        {numero}
      </span>
    </div>
  );
};

export default Tecla;
