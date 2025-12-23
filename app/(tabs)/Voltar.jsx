import React from "react";
import { useNavigate } from "react-router-dom";

const Voltar = () => {
  const navigate = useNavigate();

  return (
    <button className="botaoVoltar" onClick={() => navigate(-1)}>
      <img src="imgs/voltar.svg"></img>
    </button>
  );
};

export default Voltar;
