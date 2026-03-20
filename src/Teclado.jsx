import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApagarBotao from "./ApagarBotao";
import BotaoBusca from "./BotaoBusca";
import Tecla from "./Tecla";
import { fetchHinoPorIdentificador } from "./api/hinos";

const Teclado = React.forwardRef(({ modo }, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const [textoPreview, setTextoPreview] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");

  React.useEffect(() => {
    if (location.state?.clearInput) {
      setTextoPreview("");
      setMensagemErro("");
    }
  }, [location.state]);

  React.useImperativeHandle(ref, () => ({
    LimparTudo: () => {
      setTextoPreview("");
      setMensagemErro("");
    },
  }));

  const teclas =
    modo === "Hinário"
      ? ["C", "H", "S", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const ApagarUltimo = () => {
    setTextoPreview((prev) => prev.slice(0, -1));
  };

  const tratarEntrada = (valor) => {
    const ehNumero = typeof valor === "number";

    if (!ehNumero) {
      setTextoPreview(valor);
      return;
    }
    if (textoPreview.length === 0 && ehNumero && modo === "Hinário") {
      setTextoPreview("H");
    }

    // ❌ Não permitir 0 isolado
    if (valor === 0 && textoPreview.length === 0) return;

    // ❌ Não permitir C0, H0, S0 (mantém só a letra)
    if (valor === 0 && ["C", "H", "S"].includes(textoPreview)) {
      return;
    }

    // Limite de tamanho
    const maxLength = modo === "Hinário" ? 4 : 3;
    if (textoPreview.length >= maxLength) return;
    setTextoPreview((prev) => prev + valor);
  };

  const clickBusca = () => {
    const minLengthBusca = modo === "Hinário" ? 2 : 1;
    let identificador = modo != "Hinário" ? "HC-" + textoPreview : textoPreview;

    if (identificador.length >= minLengthBusca) {
      setMensagemErro("");
      setBuscando(true);
      queryClient
        .fetchQuery({
          queryKey: ["hino", identificador],
          queryFn: ({ signal }) =>
            fetchHinoPorIdentificador(identificador, { signal }),
        })
        .then(() => {
          navigate(`/hino/${identificador}`, { state: { from: "teclado" } });
        })
        .catch((err) => {
          if (err?.status === 404) {
            setMensagemErro("Esse hino não existe.");
            return;
          }
          setMensagemErro(
            "Não foi possível buscar o hino agora. Tente novamente.",
          );
        })
        .finally(() => setBuscando(false));
    } else {
      setMensagemErro("");
    }
  };

  return (
    <div className="main">
      <div className="textpreview">
        {textoPreview}{" "}
        {textoPreview && (
          <ApagarBotao onApagar={ApagarUltimo} ativo={textoPreview !== ""} />
        )}
      </div>
      {mensagemErro ? <div className="mensagemErro">{mensagemErro}</div> : null}
      <div className="tecbotao">
        <div
          className={
            modo == "Hinário"
              ? "teclado teclado-normal"
              : "teclado teclado-expansivo"
          }
        >
          {teclas.map((v, i) => (
            <Tecla
              key={i}
              indice={i}
              numero={v}
              onClickTecla={() => tratarEntrada(v)}
            />
          ))}
        </div>

        <BotaoBusca onClickBusca={clickBusca} loading={buscando} />
      </div>
    </div>
  );
});

export default Teclado;
