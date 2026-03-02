import { useState } from "react";

const BottomMenu = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="bottomMenu">
      <button
        className={`menu-item ${active === "home" ? "active" : ""}`}
        onClick={() => setActive("home")}
      >
        <object
          data="imgs/casinha.svg"
          width="25px"
          height="25px"
          className="icon"
        />{" "}
        <span className="label">Home</span>
      </button>
      <button
        className={`menu-item ${active === "selecao" ? "active" : ""}`}
        onClick={() => setActive("selecao")}
      >
        <object
          data="imgs/selecao.svg"
          width="25px"
          height="25px"
          className="icon"
        />{" "}
        <span className="label">Seleção</span>
      </button>
      <button
        className={`menu-item ${active === "ajustes" ? "active" : ""}`}
        onClick={() => setActive("ajustes")}
      >
        <object
          data="imgs/ajustes.svg"
          width="25px"
          height="25px"
          className="icon"
        />{" "}
        <span className="label">Ajustes</span>
      </button>
    </div>
  );
};

export default BottomMenu;
