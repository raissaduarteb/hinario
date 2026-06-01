import Setabaixo from "../../../imgs/seta-selecao.svg";

const SetaSelecao = ({ isOpen }) => {
  return (
    <img
      src={Setabaixo}
      alt="seta"
      className={`seta-selecao ${isOpen ? "seta-selecao--aberta" : ""}`}
    />
  );
};

export default SetaSelecao;
