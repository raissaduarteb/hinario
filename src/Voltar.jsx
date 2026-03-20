import { useLocation, useNavigate } from "react-router-dom";
import voltarIcon from "../imgs/voltar.svg";

const Voltar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleVoltar = () => {
    const from = location.state?.from;
    if (from === "teclado") {
      navigate("/teclado");
    } else if (from === "pesquisa") {
      navigate("/pesquisa");
    } else {
      navigate("/pesquisa");
    }
  };

  return (
    <button type="button" className="botaoVoltar" onClick={handleVoltar}>
      <img src={voltarIcon} alt="voltar" />
    </button>
  );
};

export default Voltar;
