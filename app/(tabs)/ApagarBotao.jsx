import React from "react";

const ApagarBotao = ({ onApagar }) => {
  return (
    <img
      onClick={onApagar}
      className="botao-Apagar"
      src="imgs/deletebutton.png"
      alt="botao de apagar"
    ></img>
  );
};

export default ApagarBotao;
