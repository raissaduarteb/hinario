import React from "react";
import { useNavigate } from "react-router-dom";
import voltarIcon from "../imgs/voltar.svg";

const Voltar = () => {
  const navigate = useNavigate();

  return (
    <button type="button" className="botaoVoltar" onClick={() => navigate(-1)}>
      <img src={voltarIcon} alt="voltar" />
    </button>
  );
};

export default Voltar;
