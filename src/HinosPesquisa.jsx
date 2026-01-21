import React from "react";
import LetrasHinosBusca from "./LetrasHinosBusca";
import RefHino from "./RefHino";
import { useEffect, useState } from "react";
import LinhaBusca from "./LinhaBusca";
import { useNavigate } from "react-router-dom";

const HinosPesquisa = ({ busca }) => {
  const [hinos, setHinos] = useState([]);
  useEffect(() => {
    if (busca.busca.length === 0) {
      setHinos([]);
      return;
    }

    fetch(`http://localhost:5252/api/Hino/pesquisar?texto=${busca.busca}`)
      .then((res) => res.json())
      .then((data) => setHinos(data))
      .catch((err) => console.error(err));
  }, [busca]);
  const navigate = useNavigate();

  return (
    <div className="hinos-busca">
      {hinos.map((hino) => (
        <div key={hino.id}>
          <div
            onClick={() => navigate(`/hino/${hino.identificador}`)}
            className="hino-item"
          >
            <RefHino id={hino.identificador} />
            <LetrasHinosBusca tituloHino={hino.titulo} letraHino={hino.letra} />
          </div>
          <LinhaBusca />
        </div>
      ))}
    </div>
  );
};

export default HinosPesquisa;
