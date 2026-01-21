import React from "react";
import deleteButton from "../imgs/deletebutton.png";

const ApagarBotao = ({ onApagar }) => {
  return (
    <img
      onClick={onApagar}
      className="botao-Apagar"
      src={deleteButton}
      alt="botao de apagar"
    />
  );
};

export default ApagarBotao;
