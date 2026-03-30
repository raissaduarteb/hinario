import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Hino from "./components/hymn/Hino";
import Teclado from "./components/keyboard/Teclado";
import BarraPesquisa from "./components/ui/BarraPesquisa";
import BottomMenu from "./components/ui/BottomMenu";
import Buscas from "./components/ui/Buscas";
import ComponenteBuscaHino from "./components/ui/ComponenteBuscaHino";
import Switch from "./components/ui/Switch";
import Titulo from "./components/ui/Titulo";
import { FontSizeProvider } from "./contexts/FontSizeContext";
import { useBuscaState } from "./hooks/useBuscaState";
import { useHinoSelecionado } from "./hooks/useHinoSelecionado";
import { useModoState } from "./hooks/useModoState";

const App = () => {
  const tecladoRef = React.useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const { modo, setModo } = useModoState();
  const { busca, setBusca } = useBuscaState();
  const { hinoSelecionado, setHinoSelecionado } = useHinoSelecionado();

  // Limpar busca quando voltando de rotas específicas
  React.useEffect(() => {
    if (location.state?.clearInput) {
      setBusca("");
    }
  }, [location.state, setBusca]);

  const handleSwitch = () => {
    tecladoRef.current.LimparTudo();
  };

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
