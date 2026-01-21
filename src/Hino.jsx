import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Voltar from "./Voltar";
import RefHino from "./RefHino";
import LetrasHinosBusca from "./LetrasHinosBusca";
import LetraHino from "./LetraHino";

const Hino = () => {
  const { id } = useParams(); // pega o id da rota
  const [hino, setHino] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5252/api/Hino/identificador/${id}`)
      .then((res) => res.json())
      .then((data) => setHino(data))
      .catch((err) => console.error(err));
  }, [id]);
  if (!hino) return <p>Carregando...</p>;

  return (
    <>
      <div className="hino-item margin" style={{ marginBottom: "0" }}>
        <Voltar />

        <RefHino id={hino.identificador} />
        <h3 style={{ margin: 0 }}>
          <LetrasHinosBusca tituloHino={hino.titulo} />
        </h3>
      </div>
      <LetraHino letra={hino.letra} />
    </>
  );
};

export default Hino;
