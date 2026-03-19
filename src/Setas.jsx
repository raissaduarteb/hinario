import { useNavigate, useParams } from "react-router-dom";
import SetasIcon from "../imgs/setahino.svg";
import { irParaAnterior, irParaProximo, useSwipe } from "./navegacao";

const Setas = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleTouchStart, handleTouchEnd } = useSwipe(
    () => irParaProximo(identificador, navigate),
    () => irParaAnterior(identificador, navigate),
  );

  return (
    <div className="setas">
      <button
        type="button"
        className="seta seta-anterior"
        onClick={() => irParaAnterior(id, navigate)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img src={SetasIcon} width={"30%"} alt="seta"></img>
      </button>
      <button
        type="button"
        className="seta seta-proximo"
        onClick={() => irParaProximo(id, navigate)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img src={SetasIcon} width={"30%"} alt="seta"></img>
      </button>
    </div>
  );
};

export default Setas;
