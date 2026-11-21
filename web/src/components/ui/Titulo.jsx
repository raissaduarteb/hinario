import { useQuery } from "@tanstack/react-query";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import LogoLaranja from "../../../imgs/LogoLaranja.svg";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import Menu from "../hymn/Menu";

const Titulo = ({ busca, setBusca }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const match = useMatch("/hino/:id");
  const id = match?.params?.id;
  const isHome = location.pathname === "/";

  const { data: hino } = useQuery({
    queryKey: ["hino", id],
    queryFn: () => fetchHinoPorIdentificador(id),
    enabled: !!id,
  });

  return (
    <div className="containersuperior">
      <div className="containertitulo">
        <img src={LogoLaranja} alt="logolaranja" style={{ width: "15px" }} />
        <h1 className="titulo">Hinário</h1>
      </div>

      {!isHome && <Menu hino={hino} />}

      {isHome && (
        <label className="campo-pesquisa">
          <svg
            className="campo-pesquisa-icone"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M13.75 13.75L10.6687 10.6687M12.3333 6.66667C12.3333 9.79628 9.79628 12.3333 6.66667 12.3333C3.53705 12.3333 1 9.79628 1 6.66667C1 3.53705 3.53705 1 6.66667 1C9.79628 1 12.3333 3.53705 12.3333 6.66667Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="campo-pesquisa-input"
            placeholder="Pesquisar por nome ou letra"
            aria-label="Pesquisar hino por nome ou letra"
            value={busca}
            onChange={(e) => {
              const texto = e.target.value;
              setBusca(texto);
              if (texto.length > 0) navigate("/pesquisa");
            }}
          />
          {busca ? (
            <button
              type="button"
              className="campo-pesquisa-limpar"
              aria-label="Limpar pesquisa"
              onClick={() => setBusca("")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          ) : null}
        </label>
      )}
    </div>
  );
};

export default Titulo;
