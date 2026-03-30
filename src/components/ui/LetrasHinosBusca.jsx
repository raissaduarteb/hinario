const LetrasHinosBusca = ({ tituloHino, letraHino }) => {
  return (
    <div className="tituloHino-letraHino">
      <span
        style={{
          fontFamily: "'Ysabeau Office', sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {tituloHino}
      </span>
      <span
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: "14px",
          fontWeight: 300,
        }}
        dangerouslySetInnerHTML={{ __html: letraHino?.replace(/\n/g, "<br>") }}
      />
    </div>
  );
};

export default LetrasHinosBusca;
