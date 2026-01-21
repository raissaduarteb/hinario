import React from "react";
import Iconsearch from "../imgs/Iconsearch.svg";

const BarraPesquisa = ({ value, onChange, autoFocus }) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="search-container">
      <img src={Iconsearch} style={{ marginRight: "10px" }} alt="buscar" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        placeholder="Pesquise por número ou letras..."
      />
    </div>
  );
};

export default BarraPesquisa;
