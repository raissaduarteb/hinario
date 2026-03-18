import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import LetraHino from "./LetraHino";
import LetrasHinosBusca from "./LetrasHinosBusca";
import Loading from "./Loading";
import RefHino from "./RefHino";
import Voltar from "./Voltar";
import { fetchHinoPorIdentificador } from "./api/hinos";

const Hino = () => {
  const { id } = useParams(); // pega o id da rota
  const {
    data: hino,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hino", id],
    queryFn: ({ signal }) => fetchHinoPorIdentificador(id, { signal }),
  });

  if (isLoading) return Loading();

  if (isError) {
    if (error?.status === 404) return <div className="mensagemErro">Esse hino não existe.</div>;
    return (
      <div className="mensagemErro">
        Não foi possível carregar o hino agora. Tente novamente.
      </div>
    );
  }

  return (
    <>
      <div className="hinos-separar margin" style={{ marginBottom: "0" }}>
        <Voltar />

        <RefHino id={hino.identificador} />
        <h3 style={{ margin: 0 }}>
          <LetrasHinosBusca tituloHino={hino.titulo} />
        </h3>
      </div>
      <LetraHino letra={hino.letra} />
    </>
  );
};

export default Hino;
