import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useMatch } from "react-router-dom";
import LogoLaranja from "../../../imgs/LogoLaranja.svg";
import MenuPontos from "../../../imgs/menupoints.svg";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import Copy from "./Copy";

const Titulo = () => {
  const match = useMatch("/hino/:id");
  const id = match?.params?.id;
  const [menuAberto, setMenuAberto] = useState(false);

  const { data: hino } = useQuery({
    queryKey: ["hino", id],
    queryFn: () => fetchHinoPorIdentificador(id),
    enabled: !!id,
  });

  const copiarHino = () => {
    if (!hino) return;
    const texto = `${hino.titulo}\n\n${hino.letra}`;
    navigator.clipboard.writeText(texto);
    setMenuAberto(false);
  };

  return (
    <div className="containersuperior">
      <div className="containertitulo">
        <img src={LogoLaranja} alt="logolaranja" style={{ width: "15px" }} />
        <h1 className="titulo">Hinário</h1>
      </div>
      {id && (
        <div className="menu-pontos-container">
          <img
            src={MenuPontos}
            alt="menu"
            onClick={() => setMenuAberto((v) => !v)}
            style={{ cursor: "pointer", display: "block" }}
          />
          {menuAberto && (
            <>
              <div
                className="menu-pontos-overlay"
                onClick={() => setMenuAberto(false)}
              />
              <div className="menu-pontos-dropdown">
                <button onClick={copiarHino}>
                  <Copy />
                  Copiar hino
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Titulo;
