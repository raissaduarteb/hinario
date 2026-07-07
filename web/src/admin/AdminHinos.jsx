import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { hinoCorrespondeABusca } from "./buscaHinos.js";
import { apagarHino, fetchTodosHinos } from "../utils/api/hinos.js";

const AdminHinos = () => {
  const [filtro, setFiltro] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-hinos"],
    queryFn: fetchTodosHinos,
  });

  const apagarMutation = useMutation({
    mutationFn: apagarHino,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-hinos"] }),
  });

  if (isLoading) return <div>Carregando hinos...</div>;
  if (error) return <div className="admin-erro">Erro ao carregar hinos.</div>;

  const hinos = data
    .filter((h) => hinoCorrespondeABusca(h, filtro))
    .sort((a, b) => (a.identificador || "").localeCompare(b.identificador || ""));

  const handleApagar = (hino) => {
    if (!window.confirm(`Apagar o hino "${hino.titulo}" (${hino.identificador})?`)) return;

    apagarMutation.mutate(hino.id, {
      onError: (err) => alert(err.message),
    });
  };

  return (
    <div>
      <div className="admin-header-linha">
        <h1>Hinos</h1>
        <Link className="admin-botao" to="/admin/hinos/novo">
          + Novo hino
        </Link>
      </div>

      <input
        className="admin-busca"
        placeholder="Buscar por título ou identificador..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <table className="admin-tabela">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Título</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {hinos.map((hino) => (
            <tr key={hino.id}>
              <td>{hino.identificador || "—"}</td>
              <td>{hino.titulo}</td>
              <td className="admin-acoes">
                <Link to={`/admin/hinos/${hino.id}/editar`}>Editar</Link>
                <button onClick={() => handleApagar(hino)}>Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHinos;
