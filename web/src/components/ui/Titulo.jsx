import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import Iconsearch from "../../../imgs/Iconsearch.svg";
import LogoLaranja from "../../../imgs/LogoLaranja.svg";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import Menu from "../hymn/Menu";

const Titulo = ({ busca, setBusca }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const match = useMatch("/hino/:id");
  const id = match?.params?.id;
  const isHome = location.pathname === "/";

  const [buscaAberta, setBuscaAberta] = useState(false);

  // Fecha a busca ao sair da Home (ajuste de estado durante o render)
  const [eraHome, setEraHome] = useState(isHome);
  if (eraHome !== isHome) {
    setEraHome(isHome);
    if (!isHome) setBuscaAberta(false);
  }

  const { data: hino } = useQuery({
    queryKey: ["hino", id],
    queryFn: () => fetchHinoPorIdentificador(id),
    enabled: !!id,
  });

  const fecharBusca = () => {
    setBusca?.("");
    setBuscaAberta(false);
  };

  return (
    <div className="containersuperior">
      {isHome && (
        <button
          type="button"
          className="header-lupa"
          aria-label="Pesquisar"
          onClick={() => setBuscaAberta(true)}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 13.75L10.6687 10.6687M12.3333 6.66667C12.3333 9.79628 9.79628 12.3333 6.66667 12.3333C3.53705 12.3333 1 9.79628 1 6.66667C1 3.53705 3.53705 1 6.66667 1C9.79628 1 12.3333 3.53705 12.3333 6.66667Z"
              stroke="#666"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}

      <div className="containertitulo">
        <img src={LogoLaranja} alt="logolaranja" style={{ width: "15px" }} />
        <h1 className="titulo">Hinário</h1>
      </div>

      <Menu hino={hino} />

      {isHome && buscaAberta && (
        <div className="header-busca">
          <img src={Iconsearch} alt="" className="header-busca-icon" />
          <input
            autoFocus
            type="text"
            className="header-busca-input"
            placeholder="Pesquise por letras de hinos..."
            value={busca}
            onChange={(e) => {
              const texto = e.target.value;
              setBusca(texto);
              if (texto.length > 0) navigate("/pesquisa");
            }}
          />
          <button
            type="button"
            className="header-busca-fechar"
            aria-label="Fechar pesquisa"
            onClick={fecharBusca}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Titulo;
