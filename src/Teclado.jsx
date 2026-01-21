import { useEffect, useState } from "react";
import BotaoBusca from "./BotaoBusca";
import Tecla from "./Tecla";
import ApagarBotao from "./ApagarBotao";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Teclado = React.forwardRef(({ modo }, ref) => {
  const navigate = useNavigate();
  const { id } = useParams(); // pega o id da rota

  const [textoPreview, setTextoPreview] = useState("");
  const [hino, setHino] = useState(null);

  React.useImperativeHandle(ref, () => ({
    LimparTudo: () => {
      setTextoPreview("");
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

    if (textoPreview.length >= minLengthBusca) {
      fetch(
        `http://localhost:5252/api/Hino/identificador/${textoPreview}`,
      ).then((res) => {
        if (res.ok) {
          navigate(`/hino/${textoPreview}`);
        } else {
          className.push("botaoBusca.desativado");
        }
      });
    }
  };

  return (
    <div className="main">
      <div className="textpreview">
        {textoPreview} {textoPreview && <ApagarBotao onApagar={ApagarUltimo} />}
      </div>
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

        <BotaoBusca onClickBusca={clickBusca} />
      </div>
    </div>
  );
});

export default Teclado;
