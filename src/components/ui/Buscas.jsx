import Voltar from "../hymn/Voltar";
import BarraPesquisa from "./BarraPesquisa";

const Buscas = ({ value, onChange }) => {
  return (
    <div className="pesquisaBuscas">
      <Voltar />
      <BarraPesquisa value={value} onChange={onChange} autoFocus={true} />
    </div>
  );
};

export default Buscas;
