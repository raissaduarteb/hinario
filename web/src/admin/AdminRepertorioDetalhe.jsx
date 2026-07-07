import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { hinoCorrespondeABusca } from "./buscaHinos.js";
import { fetchTodosHinos } from "../utils/api/hinos.js";
import {
  adicionarHinoRepertorio,
  atualizarRepertorio,
  fetchRepertorioPorId,
  removerHinoRepertorio,
  reordenarHinosRepertorio,
} from "../utils/api/repertorios.js";

const AdminRepertorioDetalhe = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [buscaHino, setBuscaHino] = useState("");
  const [erro, setErro] = useState("");

  const { data: repertorio, isLoading, error } = useQuery({
    queryKey: ["admin-repertorio", id],
    queryFn: () => fetchRepertorioPorId(id),
  });

  const { data: todosHinos } = useQuery({
    queryKey: ["admin-hinos"],
    queryFn: fetchTodosHinos,
  });

  useEffect(() => {
    if (repertorio) {
      setNome(repertorio.nome || "");
      setData(repertorio.data || "");
    }
  }, [repertorio]);

  const invalidar = () =>
    queryClient.invalidateQueries({ queryKey: ["admin-repertorio", id] });

  const salvarMutation = useMutation({
    mutationFn: () => atualizarRepertorio(id, { nome, data: data || null }),
    onSuccess: invalidar,
  });

  const adicionarMutation = useMutation({
    mutationFn: (hinoId) => adicionarHinoRepertorio(id, hinoId),
    onSuccess: () => {
      setBuscaHino("");
      invalidar();
    },
  });

  const removerMutation = useMutation({
    mutationFn: (itemId) => removerHinoRepertorio(id, itemId),
    onSuccess: invalidar,
  });

  const reordenarMutation = useMutation({
    mutationFn: (itemIds) => reordenarHinosRepertorio(id, itemIds),
    onSuccess: invalidar,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div className="admin-erro">Erro ao carregar repertório.</div>;

  const itens = [...repertorio.itens].sort((a, b) => a.ordem - b.ordem);

  const mover = (index, direcao) => {
    const alvo = index + direcao;
    if (alvo < 0 || alvo >= itens.length) return;
    const nova = [...itens];
    [nova[index], nova[alvo]] = [nova[alvo], nova[index]];
    reordenarMutation.mutate(nova.map((item) => item.id));
  };

  const idsNoRepertorio = new Set(itens.map((item) => item.hino.id));
  const sugestoes =
    buscaHino.trim().length > 0
      ? (todosHinos || [])
          .filter(
            (h) => !idsNoRepertorio.has(h.id) && hinoCorrespondeABusca(h, buscaHino),
          )
          .slice(0, 8)
      : [];

  return (
    <div>
      <Link to="/admin/repertorios">&larr; Voltar</Link>
      <h1>{repertorio.nome}</h1>

      <form
        className="admin-form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          setErro("");
          salvarMutation.mutate(undefined, {
            onError: (err) => setErro(err.message),
          });
        }}
      >
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        <button type="submit" disabled={salvarMutation.isPending}>
          Salvar
        </button>
      </form>
      {erro && <div className="admin-erro">{erro}</div>}

      <h2>Hinos</h2>
      <ol className="admin-lista-itens">
        {itens.map((item, index) => (
          <li key={item.id}>
            <span>
              {item.hino.identificador} — {item.hino.titulo}
            </span>
            <span className="admin-acoes">
              <button onClick={() => mover(index, -1)} disabled={index === 0}>
                ↑
              </button>
              <button
                onClick={() => mover(index, 1)}
                disabled={index === itens.length - 1}
              >
                ↓
              </button>
              <button onClick={() => removerMutation.mutate(item.id)}>Remover</button>
            </span>
          </li>
        ))}
      </ol>

      <h2>Adicionar hino</h2>
      <input
        className="admin-busca"
        placeholder="Buscar por título ou identificador..."
        value={buscaHino}
        onChange={(e) => setBuscaHino(e.target.value)}
      />
      {sugestoes.length > 0 && (
        <ul className="admin-sugestoes">
          {sugestoes.map((hino) => (
            <li key={hino.id}>
              <span>
                {hino.identificador} — {hino.titulo}
              </span>
              <button onClick={() => adicionarMutation.mutate(hino.id)}>
                Adicionar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminRepertorioDetalhe;
