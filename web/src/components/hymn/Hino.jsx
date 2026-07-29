import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";

import LetrasHinosBusca from "../ui/LetrasHinosBusca";
import Loading from "../ui/Loading";
import Setas from "../ui/Setas";
import Compartilhar from "../ui/Compartilhar";
import LetraHino from "./LetraHino";
import RefHino from "./RefHino";
import Voltar from "./Voltar";

const Hino = () => {
  const { id } = useParams(); // pega o id da rota
  const {
    data: hino,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hino", id],
    queryFn: () => fetchHinoPorIdentificador(id),
  });

  if (isLoading && !hino) return <Loading />;

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
      {/* key={id} remonta o bloco a cada troca de hino, gerando o fade-in */}
      <div key={id} className="hino-conteudo">
        <div
          className="hinos-separar margin"
          style={{
            marginBottom: "0",
          }}
        >
          <Voltar style={{ flexGrow: 1 }} />
          <RefHino style={{ flexGrow: 2 }} id={hino.identificador} />
          <h3 style={{ margin: 0, flexGrow: 12, minWidth: 0 }}>
            <LetrasHinosBusca tituloHino={hino.titulo} />
          </h3>
          <Compartilhar hino={hino} />
        </div>
        {hino?.letra ? <LetraHino letra={hino.letra} /> : Loading()}
      </div>
      <Setas />
    </>
  );
};

export default Hino;
