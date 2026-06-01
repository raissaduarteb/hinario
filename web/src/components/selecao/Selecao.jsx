import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Repertorio } from "../../utils/api/repertorios.js";
import LinhaBusca from "../ui/LinhaBusca.jsx";
import SetaSelecao from "./SetaSelecao.jsx";

const Selecao = () => {
  const [abertos, setAbertos] = useState(new Set());
  const initialized = useRef(false);
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["repertorio", 5],
    queryFn: () => Repertorio(5),
  });

  useEffect(() => {
    if (!initialized.current && data?.repertorios?.length > 0) {
      initialized.current = true;
      setAbertos(new Set([data.repertorios[0].id]));
    }
  }, [data]);

  if (isLoading) return <div>Carregando</div>;
  if (error) return <div>Erro ao carregar repertório.</div>;

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}`;
  };

  const toggleRepertorio = (id) => {
    setAbertos((prev) => {
      const novo = new Set(prev);
      if (novo.has(id)) {
        novo.delete(id);
      } else {
        novo.add(id);
      }
      return novo;
    });
  };

  return (
    <>
      <div className="selecaoalign margin">
        <div className="tituloSelecao">SELEÇÕES DE HINOS</div>
      </div>
      {data.repertorios.map((repertorio) => {
        const isOpen = abertos.has(repertorio.id);
        return (
          <div className="repertorios" key={repertorio.id}>
            <div
              className="tituloData-Selecao"
              onClick={() => toggleRepertorio(repertorio.id)}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              <div className="repertorio-nome">{repertorio.nome}</div>
              <div className="repertorio-data">
                | {formatarData(repertorio.data)}
              </div>
              <SetaSelecao isOpen={isOpen} />
            </div>

            <div
              className={`lista-hinos ${isOpen ? "lista-hinos--aberta" : ""}`}
            >
              <div className="lista-hinos-inner">
                {repertorio.itens.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="hino-item"
                      onClick={() =>
                        navigate(`/hino/${item.hino.identificador}`, {
                          state: { from: "selecao" },
                        })
                      }
                    >
                      <div className="ref-hino">{item.hino.identificador}</div>
                      <div className="tituloHino-letraHino">
                        <div className="tituloHino-Selecao">
                          {item.hino.titulo}
                        </div>
                        <div className="letraHino-Selecao">
                          {item.hino.letra.substring(0, 100)}...
                        </div>
                        <LinhaBusca />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Selecao;
