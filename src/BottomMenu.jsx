import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AjustesModal from "./AjustesModal";

import iconeajustes from "../imgs/ajustes.svg";
import iconeajusteslaranja from "../imgs/ajusteslaranja.svg";
import iconehome from "../imgs/casinha.svg";
import iconehomelaranja from "../imgs/casinhalaranja.svg";
import iconeselecao from "../imgs/selecao.svg";
import iconeselecaolaranja from "../imgs/selecaolaranja.svg";

const BottomMenu = () => {
  const [active, setActive] = useState("home");
  const [prevActive, setPrevActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const isHinoPage = location.pathname.startsWith("/hino");
  const [openAjustes, setOpenAjustes] = useState(false);

  return (
    <>
      <div className="bottomMenu">
        <button
          className={`menu-item ${!isHinoPage && active === "home" ? "active" : ""}`}
          onClick={() => {
            setActive("home");
            navigate("/");
          }}
        >
          <img
            src={
              !isHinoPage && active === "home" ? iconehomelaranja : iconehome
            }
            alt="casinha"
            className="icon"
          />
          <span className="label">Home</span>
        </button>
        <button
          className={`menu-item ${!isHinoPage && active === "selecao" ? "active" : ""}`}
          onClick={() => {
            setActive("selecao");
            navigate("/selecao");
          }}
        >
          <img
            src={
              !isHinoPage && active === "selecao"
                ? iconeselecaolaranja
                : iconeselecao
            }
            alt="selecao"
            className="icon"
          />
          <span className="label">Seleção</span>
        </button>
        <button
          className={`menu-item ${active === "ajustes" ? "active" : ""}`}
          onClick={() => {
            if (active !== "ajustes") {
              setPrevActive(active);
            }
            setActive("ajustes"); // botão ativado
            setOpenAjustes(true);
          }}
        >
          <img
            src={active === "ajustes" ? iconeajusteslaranja : iconeajustes}
            alt="ajustes"
            className="icon"
          />
          <span className="label">Ajustes</span>
        </button>
      </div>
      <AjustesModal
        open={openAjustes}
        onClose={() => {
          setOpenAjustes(false);
          setActive(null);
        }}
      />
    </>
  );
};
export default BottomMenu;
