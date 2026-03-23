import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import BarraPesquisa from "./BarraPesquisa";
import BottomMenu from "./BottomMenu";
import Buscas from "./Buscas";
import ComponenteBuscaHino from "./ComponenteBuscaHino";
import { FontSizeProvider } from "./FontSizeContext";
import Hino from "./Hino";
import Switch from "./Switch";
import Teclado from "./Teclado";
import Titulo from "./Titulo";

const App = () => {
  const tecladoRef = React.useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [modo, setModo] = React.useState("Hinário");
  const [busca, setBusca] = React.useState(() => {
    const saved = localStorage.getItem("busca");
    return saved || "";
  });

  React.useEffect(() => {
    localStorage.setItem("busca", busca);
  }, [busca]);

  React.useEffect(() => {
    if (location.state?.clearInput) {
      setBusca("");
    }
  }, [location.state]);

  const handleSwitch = () => {
    tecladoRef.current.LimparTudo();
  };

  const [hinoSelecionado, setHinoSelecionado] = React.useState({
    id: "",
    titulo: "",
    letra: "",
  });

  return (
    <>
      <FontSizeProvider>
        <Titulo />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>
                  <BarraPesquisa
                    value={busca}
                    onChange={(texto) => {
                      setBusca(texto);
                      if (texto.length > 0) {
                        navigate("/pesquisa");
                      }
                    }}
                  />
                </div>
                <Switch
                  options={["Hinário", "Harpa Cristã"]}
                  selectedOption={modo}
                  onChange={(value) => setModo(value)}
                  onClickSwitch={() => tecladoRef.current.LimparTudo()}
                />

                <Teclado
                  ref={tecladoRef}
                  modo={modo}
                  setHinoSelecionado={setHinoSelecionado}
                />
              </div>
            }
          />
          <Route
            path="/pesquisa"
            element={
              <>
                <Buscas value={busca} onChange={setBusca} />{" "}
                <ComponenteBuscaHino busca={busca} />
              </>
            }
          />
          <Route
            path="/hino/:id"
            element={
              <>
                <Hino />
              </>
            }
          />
          <Route path="/selecao" element={<></>} />
        </Routes>
        <BottomMenu />
      </FontSizeProvider>
    </>
  );
};
export default App;
