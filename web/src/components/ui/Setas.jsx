import { useNavigate, useParams } from "react-router-dom";
import SetasIcon from "../../../imgs/setahino.svg";
import { irParaAnterior, irParaProximo } from "../../utils/navegacao";

const Setas = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="setas">
      <button
        type="button"
        className="seta seta-anterior"
        aria-label="Hino anterior"
        onClick={() => irParaAnterior(id, navigate)}
      >
        <img src={SetasIcon} alt="" />
      </button>
      <button
        type="button"
        className="seta seta-proximo"
        aria-label="Próximo hino"
        onClick={() => irParaProximo(id, navigate)}
      >
        <img src={SetasIcon} alt="" />
      </button>
    </div>
  );
};

export default Setas;
