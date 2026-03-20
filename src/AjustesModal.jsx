import { useEffect, useState } from "react";

const AjustesModal = ({ open, onClose }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("fontSize");
    return saved ? parseInt(saved) : 16;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("fontSize", fontSize);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    document.documentElement.style.setProperty("--font-size", fontSize + "px");
  }, [darkMode, fontSize]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 30));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));

  if (!open) return null;

  return (
    <div className="toggle-wrapper overlay" onClick={onClose}>
      <div
        className={`modal ${darkMode ? "dark" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ajustes de Fonte */}
        <div className="section">
          <h3>Ajustes de Fonte</h3>
          <div className="font-controls">
            <button onClick={decreaseFont} disabled={fontSize <= 12}>
              -
            </button>
            <span>{fontSize}px</span>
            <button onClick={increaseFont} disabled={fontSize >= 30}>
              +
            </button>
          </div>
        </div>

        {/* Modo Claro/Escuro */}
        <div className="section">
          <h3>Modo</h3>
          <div className="toggle">
            <button
              className={`toggle-option ${!darkMode ? "active" : ""}`}
              onClick={() => setDarkMode(false)}
            >
              Claro
            </button>
            <button
              className={`toggle-option ${darkMode ? "active" : ""}`}
              onClick={() => setDarkMode(true)}
            >
              Escuro
            </button>
          </div>
        </div>

        <button className="fechar" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default AjustesModal;
