import { useNavigate, useParams } from "react-router-dom";
import SetasIcon from "../imgs/setahino.svg";
import { irParaAnterior, irParaProximo } from "./navegacao";

const Setas = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="setas">
      <button
        type="button"
        className="seta seta-anterior"
        onClick={() => irParaAnterior(id, navigate)}
      >
        <img src={SetasIcon} width={"30%"} alt="seta"></img>
      </button>
      <button
        type="button"
        className="seta seta-proximo"
        onClick={() => irParaProximo(id, navigate)}
      >
        <img src={SetasIcon} width={"30%"} alt="seta"></img>
      </button>
    </div>
  );
};

export default Setas;
