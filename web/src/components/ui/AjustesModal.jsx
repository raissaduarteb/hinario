import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import IconeSol from "../../../imgs/Sun.svg";
import IconeLetra from "../../../imgs/text_fields.svg";
import { useFontSize } from "../../contexts/FontSizeContext";

const AjustesModal = ({ open, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const isHinoPage = location.pathname.startsWith("/hino");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const { fontSize, setFontSize } = useFontSize();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    // A classe precisa ir também no <html>: é o fundo dele que pinta toda a área
    // de rolagem. Aplicada só no <body>, o fim da página (os últimos hinos da
    // seleção, por exemplo) aparecia com o fundo claro por baixo.
    document.documentElement.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
    document.documentElement.style.setProperty("--font-size", fontSize + "px");
  }, [darkMode, fontSize]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 30));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!open && !isClosing) return null;

  return (
    <div className="toggle-wrapper overlay" onClick={handleClose}>
      <div
        className={`modal ${darkMode ? "dark" : ""} ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modo Claro/Escuro */}
        <div className="section">
          <img src={IconeSol} alt="sol" style={{ width: "10%" }}></img>
          <div className="toggle-wrapper modo-toggle">
            <div
              className="toggle-slider"
              style={{
                transform: `translateX(${darkMode ? "100%" : "0"})`,
              }}
            />
            <button
              className={`toggle-option toggle-option-ajustes ${!darkMode ? "selected" : ""}`}
              onClick={() => setDarkMode(false)}
            >
              Claro
            </button>
            <button
              className={`toggle-option toggle-option-ajustes ${darkMode ? "selected" : ""}`}
              onClick={() => setDarkMode(true)}
            >
              Escuro
            </button>
          </div>
        </div>
        {/* Ajustes de Fonte */}
        {isHinoPage && (
          <div className="section">
            <img
              src={IconeLetra}
              alt="icon fonte"
              style={{ width: "19%" }}
            ></img>
            <div className="font-controls">
              <button onClick={decreaseFont} disabled={fontSize <= 12}>
                -
              </button>
              <button onClick={increaseFont} disabled={fontSize >= 30}>
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AjustesModal;
