import React from "react";
import BarraPesquisa from "./assets/BarraPesquisa";
import Voltar from "./Voltar";

const Buscas = ({ busca, setBusca, value, onChange }) => {
  return (
    <div className="pesquisaBuscas">
      <Voltar />
      <BarraPesquisa value={value} onChange={onChange} autoFocus={true} />
    </div>
  );
};

export default Buscas;
