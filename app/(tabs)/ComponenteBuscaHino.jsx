import React from "react";
import HinosPesquisa from "./HinosPesquisa";
import LinhaBusca from "./LinhaBusca";

const ComponenteBuscaHino = (hino) => {
  return (
    <a href="/letrahino">
      {<HinosPesquisa />}
      {<LinhaBusca />}
    </a>
  );
};

export default ComponenteBuscaHino;
