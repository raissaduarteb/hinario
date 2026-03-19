import SetasIcon from "../imgs/setahino.svg";
const Setas = () => {
  return (
    <div className="setas">
      <button type="button" className="seta seta-anterior">
        <img src={SetasIcon} width={"30%"} alt="seta"></img>
      </button>
      <button type="button" className="seta seta-proximo">
        <img src={SetasIcon} width={"30%"} alt="seta"></img>
      </button>
    </div>
  );
};

export default Setas;
