import React from "react";
import LogoLaranja from "../imgs/LogoLaranja.svg";

const Titulo = () => {
  return (
    <div className="containertitulo">
      <img src={LogoLaranja} alt="logolaranja" />
      <h1 className="titulo">Hinário</h1>
    </div>
  );
};

export default Titulo;
