import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RefHino from "../hymn/RefHino";
import Loading from "./Loading";
import LetrasHinosBusca from "./LetrasHinosBusca";
import LinhaBusca from "./LinhaBusca";

const HinosPesquisa = ({ busca }) => {
  const [hinos, setHinos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const abortControllerRef = useRef(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (busca.busca.length === 0) {
      setHinos([]);
      setCarregando(false);
      return;
    }

    // Cancela a requisição anterior se ainda estiver pendente
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setCarregando(true);

    const timeout = setTimeout(() => {
      fetch(
        `https://hinario-api.onrender.com/api/Hino/pesquisar?texto=${busca.busca}`,
        { signal: controller.signal },
      )
        .then((res) => res.json())
        .then((data) => {
          setHinos(data);

          // Aproveita o retorno do endpoint de pesquisa para hidratar o cache do hino.
          // Se o objeto não tiver `letra`, o `Hino.jsx` ainda pode buscar o detalhe completo.
          for (const hino of data ?? []) {
            if (!hino?.identificador) continue;
            queryClient.setQueryData(["hino", hino.identificador], (prev) => ({
              ...prev,
              ...hino,
            }));
          }
        })
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        })
        .finally(() => {
          if (!controller.signal.aborted) setCarregando(false);
        });
    }, 400); // aguarda 400ms após a última digitação

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [busca]);

  if (carregando) return <Loading />;

  return (
    <div className="hinos-busca">
      {hinos.map((hino) => (
        <div key={hino.id}>
          <div
            onClick={() =>
              navigate(`/hino/${hino.identificador}`, {
                state: { from: "pesquisa" },
              })
            }
            className="hino-item"
          >
            <RefHino id={hino.identificador} />
            <LetrasHinosBusca
              tituloHino={hino.titulo}
              letraHino={hino.trecho}
            />
          </div>
          <LinhaBusca />
        </div>
      ))}
    </div>
  );
};

export default HinosPesquisa;
