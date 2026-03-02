import { useState } from "react";
import iconeajustes from "../imgs/ajustes.svg";
import iconeajusteslaranja from "../imgs/ajusteslaranja.svg";
import iconehome from "../imgs/casinha.svg";
import iconehomelaranja from "../imgs/casinhalaranja.svg";
import iconeselecao from "../imgs/selecao.svg";
import iconeselecaolaranja from "../imgs/selecaolaranja.svg";

const BottomMenu = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="bottomMenu">
      <button
        className={`menu-item ${active === "home" ? "active" : ""}`}
        onClick={() => setActive("home")}
      >
        <img
          src={active === "home" ? iconehomelaranja : iconehome}
          alt="casinha"
        />
        <span className="label">Home</span>
      </button>
      <button
        className={`menu-item ${active === "selecao" ? "active" : ""}`}
        onClick={() => setActive("selecao")}
      >
        <img
          src={active === "selecao" ? iconeselecaolaranja : iconeselecao}
          alt="selecao"
        />
        <span className="label">Seleção</span>
      </button>
      <button
        className={`menu-item ${active === "ajustes" ? "active" : ""}`}
        onClick={() => setActive("ajustes")}
      >
        <img
          src={active === "ajustes" ? iconeajusteslaranja : iconeajustes}
          alt="ajustes"
        />
        <span className="label">Ajustes</span>
      </button>
    </div>
  );
};

export default BottomMenu;
