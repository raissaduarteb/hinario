import React from "react";
import Voltar from "./Voltar";
import RefHino from "./RefHino";
import LetrasHinosBusca from "./LetrasHinosBusca";
import LetraHino from "./LetraHino";

const Hino = () => {
  return (
    <>
      <div className="hinos-busca" style={{ marginBottom: "0" }}>
        <Voltar />
        <RefHino id={"C10"} />

        <h3>
          <LetrasHinosBusca tituloHino="ESTA PAZ" />
        </h3>
      </div>
      <LetraHino />
    </>
  );
};

export default Hino;
