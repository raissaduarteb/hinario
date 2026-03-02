import { useState } from "react";

const AjustesModal = ({ open, onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  if (!open) return null;

  return (
    <div className="toggle-wrapper overlay" onClick={onClose}>
      <div
        className={`modal ${darkMode ? "dark" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tema */}
        <div className="row">
          <span>☀</span>
          <div className="toggle">
            <button
              className={"toggle-option" + !darkMode ? "active" : ""}
              onClick={() => setDarkMode(false)}
            >
              Claro
            </button>
            <button
              className={darkMode ? "active" : ""}
              onClick={() => setDarkMode(true)}
            >
              Escuro
            </button>
          </div>
        </div>

        {/* Tamanho texto */}
        <div className="row">
          <span>Tt</span>
          <input
            type="range"
            min="12"
            max="30"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>

        <button className="fechar" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default AjustesModal;
