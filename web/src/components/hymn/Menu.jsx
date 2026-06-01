import { useState } from "react";
import { useMatch } from "react-router-dom";
import MenuPontos from "../../../imgs/menupoints.svg";
import Copy from "../ui/Copy";

const Menu = ({ hino }) => {
  const match = useMatch("/hino/:id");

  const id = match?.params?.id;
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div>
      {id && (
        <div className="menu-pontos-container">
          <img
            src={MenuPontos}
            alt="menu"
            onClick={() => setMenuAberto((v) => !v)}
            style={{ cursor: "pointer", display: "block", width: "4px" }}
          />
          {menuAberto && (
            <>
              <div
                className="menu-pontos-overlay"
                onClick={() => setMenuAberto(false)}
              />
              <div className="menu-pontos-dropdown">
                <Copy hino={hino} onClose={() => setMenuAberto(false)} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
