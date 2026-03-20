import React from "react";
import Iconsearch from "../imgs/Iconsearch.svg";

const BarraPesquisa = ({ value, onChange, autoFocus }) => {
  const inputRef = React.useRef(null);
  const [isFocused, setIsFocused] = React.useState(autoFocus);

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current?.blur();
      setIsFocused(false);
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
        onFocus={() => setIsFocused(true)} // volta o teclado quando clicar
        className="search-input"
        placeholder="Pesquise por hinos, letras..."
      />
    </div>
  );
};

export default BarraPesquisa;
