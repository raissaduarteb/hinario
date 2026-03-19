import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchHinoPorIdentificador } from "./api/hinos";
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

  // Se veio da pesquisa, já teremos título/identificador no cache, mas talvez ainda sem a letra.
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
      <div className="hinos-separar margin" style={{ marginBottom: "0" }}>
        <Voltar />

        <RefHino id={hino.identificador} />
        <h3 style={{ margin: 0 }}>
          <LetrasHinosBusca tituloHino={hino.titulo} />
        </h3>
      </div>
      {hino?.letra ? <LetraHino letra={hino.letra} /> : Loading()}
      <Setas />
    </>
  );
};

export default Hino;
