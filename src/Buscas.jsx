import React from "react";
import BarraPesquisa from "./BarraPesquisa";
import Voltar from "./Voltar";

const Buscas = ({ value, onChange }) => {
  return (
    <div className="pesquisaBuscas">
      <Voltar />
      <BarraPesquisa value={value} onChange={onChange} autoFocus={true} />
    </div>
  );
};

export default Buscas;
