import React from "react";

const BotaoBusca = ({ onClickBusca }) => {
  return (
    <button onClick={onClickBusca} className="botaoBusca">
      Buscar
    </button>
  );
};

export default BotaoBusca;
