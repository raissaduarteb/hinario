import { useState } from "react";

const BottomMenu = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="bottomMenu">
      <button
        className={`menu-item ${active === "home" ? "active" : ""}`}
        onClick={() => setActive("home")}
      >
        <img
          src={
            active === "home" ? "imgs/casinhalaranja.svg" : "imgs/casinha.svg"
          }
          alt="casinha"
        />
        <span className="label">Home</span>
      </button>
      <button
        className={`menu-item ${active === "selecao" ? "active" : ""}`}
        onClick={() => setActive("selecao")}
      >
        <img
          src={
            active === "selecao"
              ? "imgs/selecaolaranja.svg"
              : "imgs/selecao.svg"
          }
          alt="selecao"
        />
        <span className="label">Seleção</span>
      </button>
      <button
        className={`menu-item ${active === "ajustes" ? "active" : ""}`}
        onClick={() => setActive("ajustes")}
      >
        <img
          src={
            active === "ajustes"
              ? "imgs/ajusteslaranja.svg"
              : "imgs/ajustes.svg"
          }
          alt="ajustes"
        />
        <span className="label">Ajustes</span>
      </button>
    </div>
  );
};

export default BottomMenu;
