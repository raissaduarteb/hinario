import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import Hino from "./components/hymn/Hino";
import Teclado from "./components/keyboard/Teclado";
import Selecao from "./components/selecao/Selecao";
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
  const location = useLocation();

  const { modo, setModo } = useModoState();
  const { busca, setBusca } = useBuscaState();
  const { setHinoSelecionado } = useHinoSelecionado();

  // Limpar busca quando voltando de rotas específicas
  React.useEffect(() => {
    if (location.state?.clearInput) {
      setBusca("");
    }
  }, [location.state, setBusca]);

  if (location.pathname.startsWith("/admin")) {
    return <AdminApp />;
  }

  return (
    <>
      <FontSizeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Titulo busca={busca} setBusca={setBusca} />

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
          <Route
            path="/selecao"
            element={
              <>
                <Selecao />
              </>
            }
          />
        </Routes>
        <BottomMenu />
      </FontSizeProvider>
    </>
  );
};
export default App;
