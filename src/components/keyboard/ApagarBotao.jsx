import { useEffect, useState } from "react";
import deleteButton from "../../../imgs/deletebutton.png";

const ApagarBotao = ({ onApagar, ativo }) => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (ativo) {
      setVisivel(true); // entra
    } else {
      setVisivel(false); // sai (MAS continua no DOM)
    }
  }, [ativo]);

  return (
    <img
      onClick={onApagar}
      className={`botao-Apagar ${visivel ? "visivel" : ""}`}
      src={deleteButton}
      alt="botao de apagar"
    />
  );
};

export default ApagarBotao;
