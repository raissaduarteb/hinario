import React from "react";
import { useNavigate } from "react-router-dom";
import ApagarBotao from "./ApagarBotao";
import BotaoBusca from "./BotaoBusca";
import Tecla from "./Tecla";

const Teclado = React.forwardRef(({ modo }, ref) => {
  const navigate = useNavigate();

  React.useImperativeHandle(ref, () => ({
    LimparTudo: () => {
      incrementarPreview("");
    },
  }));

  const [textoPreview, incrementarPreview] = React.useState("");

  const teclas =
    modo === "Hinário"
      ? ["C", "H", "S", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const ApagarUltimo = () => {
    incrementarPreview(textoPreview.slice(0, -1));
  };

  const limparTextoPreview = () => {
    incrementarPreview("");
  };

  const verifiaSeEhNumero = (numero) => {
    return /^\d+$/.test(numero);
  };

  const clickBusca = () => {
    let maxLengthBusca = modo == "Hinário" ? 2 : 1;
    if (textoPreview.length >= maxLengthBusca) {
      navigate("/letrahino");
    }
  };

  return (
    <>
      <div className="main">
        <div className="textpreview">
          {textoPreview}{" "}
          {textoPreview == "" ? "" : <ApagarBotao onApagar={ApagarUltimo} />}
        </div>
        <div className="tecbotao">
          <div className="teclado">
            {teclas.map((v, i) => (
              <Tecla
                key={i}
                onClickTecla={(numero) => {
                  if (
                    verifiaSeEhNumero(numero) &&
                    textoPreview.length == 0 &&
                    modo == "Hinário"
                  ) {
                    incrementarPreview("H");
                  }
                  if (!verifiaSeEhNumero(numero)) {
                    limparTextoPreview();
                  }

                  let maxLength = modo == "Hinário" ? 4 : 3;
                  if (textoPreview.length < maxLength) {
                    incrementarPreview((prev) => prev + numero);
                  }
                }}
                indice={i}
                numero={v}
              />
            ))}
          </div>

          <BotaoBusca onClickBusca={clickBusca} />
        </div>
      </div>
    </>
  );
});

export default Teclado;
