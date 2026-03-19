import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchHinoPorIdentificador } from "./api/hinos";
import { irParaAnterior, irParaProximo, useSwipe } from "./navegacao";

import LetraHino from "./LetraHino";
import LetrasHinosBusca from "./LetrasHinosBusca";
import Loading from "./Loading";
import RefHino from "./RefHino";
import Setas from "./Setas";
import Voltar from "./Voltar";

const Hino = () => {
  const { id } = useParams(); // pega o id da rota
  const queryClient = useQueryClient();
  const {
    data: hino,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hino", id],
    queryFn: ({ signal }) => fetchHinoPorIdentificador(id, { signal }),
    placeholderData: () => queryClient.getQueryData(["hino", id]),
  });

  const navigate = useNavigate();

  const {
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    dragX,
    exiting,
    opacity,
  } = useSwipe(
    () => irParaProximo(id, navigate),
    () => irParaAnterior(id, navigate),
  );
  const isDragging = dragX !== 0 && !exiting;

  if (isLoading && !hino) return Loading();

  if (isError) {
    if (error?.status === 404)
      return <div className="mensagemErro">Esse hino não existe.</div>;
    return (
      <div className="mensagemErro">
        Não foi possível carregar o hino agora. Tente novamente.
      </div>
    );
  }

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{
          touchAction: "pan-y",
          transform: `translateX(${dragX * 0.3}px)`,
          opacity: opacity,
          transition: isDragging
            ? "none"
            : "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div
          className="hinos-separar margin"
          style={{
            marginBottom: "0",
          }}
        >
          <Voltar />

          <RefHino id={hino.identificador} />
          <h3 style={{ margin: 0 }}>
            <LetrasHinosBusca tituloHino={hino.titulo} />
          </h3>
        </div>
        {hino?.letra ? <LetraHino letra={hino.letra} /> : Loading()}
      </div>
      <Setas />
    </>
  );
};

export default Hino;
