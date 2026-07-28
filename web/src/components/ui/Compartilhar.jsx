import { useState } from "react";

const Compartilhar = ({ hino }) => {
  const [toast, setToast] = useState("");

  const mostrarToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1800);
  };

  const compartilhar = async () => {
    if (!hino) return;
    const texto = `${hino.titulo}\n\n${hino.letra}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: hino.titulo, text: texto });
      } else {
        await navigator.clipboard.writeText(texto);
        mostrarToast("Hino copiado!");
      }
    } catch {
      // usuário cancelou o compartilhamento — ignora
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn-compartilhar"
        aria-label="Compartilhar hino"
        onClick={compartilhar}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
          <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
        </svg>
      </button>
      {toast && <div className="toast-compartilhar">{toast}</div>}
    </>
  );
};

export default Compartilhar;
