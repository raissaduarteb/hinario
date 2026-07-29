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
  const [erro, setErro] = useState("");
  const abortControllerRef = useRef(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const termo = String(busca ?? "").trim();

  useEffect(() => {
    setErro("");

    if (termo.length === 0) {
      setHinos([]);
      setCarregando(false);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    let timedOut = false;

    setCarregando(true);

    const requestTimeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 10000);

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://hinario-api.onrender.com/api/Hino/pesquisar?texto=${encodeURIComponent(
            termo,
          )}`,
          { signal: controller.signal },
        );

        if (!res.ok) {
          throw new Error("Erro na busca de hinos.");
        }

        const data = await res.json();
        setHinos(data || []);

        for (const hino of data ?? []) {
          if (!hino?.identificador) continue;
          queryClient.setQueryData(["hino", hino.identificador], (prev) => ({
            ...prev,
            ...hino,
          }));
        }
      } catch (err) {
        if (err.name === "AbortError") {
          if (timedOut) {
            setErro("A busca demorou muito. Tente novamente.");
          }
        } else {
          console.error(err);
          setErro("Não foi possível buscar hinos no momento.");
        }
      } finally {
        clearTimeout(requestTimeout);
        if (!controller.signal.aborted || timedOut) {
          setCarregando(false);
        }
      }
    };

    const debounce = setTimeout(fetchData, 400);

    return () => {
      clearTimeout(debounce);
      clearTimeout(requestTimeout);
      controller.abort();
    };
  }, [termo, queryClient]);

  if (carregando) return <Loading />;

  return (
    <div className="hinos-busca">
      {erro ? (
        <div className="mensagemErro">{erro}</div>
      ) : termo.length === 0 ? null : hinos.length === 0 ? (
        <div className="mensagemErro">Nenhum hino encontrado.</div>
      ) : (
        hinos.map((hino) => (
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
        ))
      )}
    </div>
  );
};

export default HinosPesquisa;
