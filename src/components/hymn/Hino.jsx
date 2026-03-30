import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import { irParaAnterior, irParaProximo, useSwipe } from "../../utils/navegacao";

import LetrasHinosBusca from "../ui/LetrasHinosBusca";
import Loading from "../ui/Loading";
import Setas from "../ui/Setas";
import LetraHino from "./LetraHino";
import RefHino from "./RefHino";
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
    queryFn: () => fetchHinoPorIdentificador(id),
  });

  const navigate = useNavigate();

  const {
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    dragX,
    exiting,
    opacity,
    setOpacity,
  } = useSwipe(
    () => irParaProximo(id, navigate),
    () => irParaAnterior(id, navigate),
  );
  const isDragging = dragX !== 0 && !exiting;

  useEffect(() => {
    if (!isLoading && hino) {
      setOpacity(1);
    }
  }, [isLoading, hino, setOpacity]);

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
          <Voltar style={{ flexGrow: 1 }} />
          <RefHino style={{ flexGrow: 2 }} id={hino.identificador} />
          <h3 style={{ margin: 0, flexGrow: 12 }}>
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
