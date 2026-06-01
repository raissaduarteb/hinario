const BotaoBusca = ({ onClickBusca, loading = false, disabled = false, label }) => {
  return (
    <button
      onClick={onClickBusca}
      className="botaoBusca"
      disabled={disabled || loading}
      aria-busy={loading ? "true" : "false"}
    >
      {label ?? (loading ? "Buscando..." : "Buscar")}
    </button>
  );
};

export default BotaoBusca;
