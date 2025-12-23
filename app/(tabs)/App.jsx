import React from "react";
import Titulo from "./Titulo";
import Teclado from "./Teclado";
import Switch from "./Switch";
import BarraPesquisa from "./assets/BarraPesquisa";
import { Routes, Route } from "react-router-dom";
import Buscas from "./Buscas";
import ComponenteBuscaHino from "./ComponenteBuscaHino";
import { useNavigate } from "react-router-dom";
import Hino from "./Hino";

const App = () => {
  const tecladoRef = React.useRef();
  const navigate = useNavigate();

  const [modo, setModo] = React.useState("Hinário");
  const [busca, setBusca] = React.useState("");

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
              <ComponenteBuscaHino />
            </>
          }
        />
        <Route
          path="/letrahino"
          element={
            <>
              <Hino />
            </>
          }
        />
      </Routes>
    </>
  );
};
export default App;
