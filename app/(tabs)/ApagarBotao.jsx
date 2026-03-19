const ApagarBotao = ({ onApagar }) => {
  return (
    <img
      onClick={onApagar}
      className={`botao-Apagar ${ativo ? "visivel" : "oculto"}`}
      src="imgs/deletebutton.png"
      alt="botao de apagar"
    ></img>
  );
};

export default ApagarBotao;
