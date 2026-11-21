const BotaoBusca = ({ onClickBusca, loading = false, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClickBusca}
      className="botaoBusca"
      disabled={disabled || loading}
      aria-busy={loading ? "true" : "false"}
      aria-label={loading ? "Buscando hino" : "Buscar hino"}
    >
      {loading ? (
        <span className="botaoBusca-loading" aria-hidden="true" />
      ) : (
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M13.75 13.75L10.6687 10.6687M12.3333 6.66667C12.3333 9.79628 9.79628 12.3333 6.66667 12.3333C3.53705 12.3333 1 9.79628 1 6.66667C1 3.53705 3.53705 1 6.66667 1C9.79628 1 12.3333 3.53705 12.3333 6.66667Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default BotaoBusca;
