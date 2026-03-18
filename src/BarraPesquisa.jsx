import React from "react";
import Iconsearch from "../imgs/Iconsearch.svg";

const BarraPesquisa = ({ value, onChange, autoFocus }) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <div className="search-container">
      <img src={Iconsearch} style={{ marginRight: "10px" }} alt="buscar" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
        placeholder="Pesquise por número ou letras..."
      />
    </div>
  );
};

export default BarraPesquisa;
