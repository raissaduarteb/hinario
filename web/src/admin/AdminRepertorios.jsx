import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  apagarRepertorio,
  ativarRepertorio,
  criarRepertorio,
  fetchTodosRepertorios,
} from "../utils/api/repertorios.js";

const AdminRepertorios = () => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [erro, setErro] = useState("");
  const queryClient = useQueryClient();

  const {
    data: repertorios,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin-repertorios"],
    queryFn: fetchTodosRepertorios,
  });

  const invalidar = () =>
    queryClient.invalidateQueries({ queryKey: ["admin-repertorios"] });

  const criarMutation = useMutation({
    mutationFn: criarRepertorio,
    onSuccess: () => {
      setNome("");
      setData("");
      invalidar();
    },
  });

  const ativarMutation = useMutation({
    mutationFn: ativarRepertorio,
    onSuccess: invalidar,
  });

  const apagarMutation = useMutation({
    mutationFn: apagarRepertorio,
    onSuccess: invalidar,
  });

  const handleCriar = (e) => {
    e.preventDefault();
    setErro("");
    if (!nome.trim()) return;
    criarMutation.mutate(
      { nome, data: data || null },
      { onError: (err) => setErro(err.message) },
    );
  };

  const handleApagar = (repertorio) => {
    if (!window.confirm(`Apagar "${repertorio.nome}"?`)) return;
    apagarMutation.mutate(repertorio.id, {
      onError: (err) => alert(err.message),
    });
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error)
    return <div className="admin-erro">Erro ao carregar repertórios.</div>;

  const ordenados = [...repertorios].sort((a, b) => {
    const dataA = a.data || "";
    const dataB = b.data || "";
    return dataB.localeCompare(dataA);
  });

  return (
    <div>
      <h1>Hinos da Semana</h1>

      <form className="admin-form-inline" onSubmit={handleCriar}>
        <input
          placeholder="Nome (ex.: Culto 12/07)"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          type="submit"
          disabled={criarMutation.isPending}
          className="botaoCriar"
        >
          + Criar
        </button>
      </form>
      {erro && <div className="admin-erro">{erro}</div>}

      <table className="admin-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordenados.map((repertorio) => (
            <tr key={repertorio.id}>
              <td>
                <Link to={`/admin/repertorios/${repertorio.id}`}>
                  {repertorio.nome}
                </Link>
              </td>
              <td>{repertorio.data || "—"}</td>
              <td>{repertorio.ativo ? "Ativo (hinos da semana)" : "—"}</td>
              <td className="admin-acoes">
                {!repertorio.ativo && (
                  <button
                    onClick={() => ativarMutation.mutate(repertorio.id)}
                    disabled={ativarMutation.isPending}
                  >
                    Ativar
                  </button>
                )}
                <button onClick={() => handleApagar(repertorio)}>Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRepertorios;
