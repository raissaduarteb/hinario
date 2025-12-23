import React from "react";
import LetrasHinosBusca from "./LetrasHinosBusca";
import RefHino from "./RefHino";

const HinosPesquisa = () => {
  return (
    <div className="hinos-busca">
      <RefHino id="C10" />
      <LetrasHinosBusca
        tituloHino="ESTA PAZ"
        letraHino="Esta paz que sinto em minh’alma, Não é porque tudo me vai bem;"
      />
    </div>
  );
};

export default HinosPesquisa;
