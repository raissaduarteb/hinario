import { useLocation, useNavigate } from "react-router-dom";
import voltarIcon from "../imgs/voltar.svg";

const Voltar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleVoltar = () => {
    const from = location.state?.from;
    console.log(from);
    if (from === "teclado") {
      navigate("/", { state: { clearInput: true } });
    } else if (from === "pesquisa") {
      navigate("/pesquisa");
    } else {
      navigate("/", { state: { clearInput: true } });
    }
  };

  return (
    <button type="button" className="botaoVoltar" onClick={handleVoltar}>
      <img src={voltarIcon} alt="voltar" />
    </button>
  );
};

export default Voltar;
