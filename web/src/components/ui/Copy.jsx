import IconCopy from "../../../imgs/Copy.svg";

const Copy = ({ hino, onClose }) => {
  const copiarHino = () => {
    if (!hino) return;
    const texto = `${hino.titulo}\n\n${hino.letra}`;
    navigator.clipboard.writeText(texto);
    onClose?.();
  };
  return (
    <button onClick={copiarHino}>
      <img src={IconCopy} alt="icone de copiar" width={"9%"} /> Copiar hino
    </button>
  );
};

export default Copy;
