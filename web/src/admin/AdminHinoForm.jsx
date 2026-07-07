import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  atualizarHino,
  criarHino,
  fetchHinoPorId,
} from "../utils/api/hinos.js";

const AdminHinoForm = () => {
  const { id } = useParams();
  const isEdicao = Boolean(id);
  const navigate = useNavigate();

  const [identificador, setIdentificador] = useState("");
  const [titulo, setTitulo] = useState("");
  const [letra, setLetra] = useState("");
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  const { data: hino } = useQuery({
    queryKey: ["admin-hino", id],
    queryFn: () => fetchHinoPorId(id),
    enabled: isEdicao,
  });

  useEffect(() => {
    if (hino) {
      setIdentificador(hino.identificador || "");
      setTitulo(hino.titulo || "");
      setLetra(hino.letra || "");
    }
  }, [hino]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setSalvando(true);
    try {
      if (isEdicao) {
        await atualizarHino(id, { identificador, titulo, letra });
      } else {
        await criarHino({ identificador, titulo, letra });
      }
      navigate("/admin/hinos");
    } catch (err) {
      setErro(err.message);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div>
      <h1>{isEdicao ? "Editar hino" : "Novo hino"}</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Identificador (ex.: C-1, H-10)
          <input
            value={identificador}
            onChange={(e) => setIdentificador(e.target.value)}
            placeholder="C-1"
          />
        </label>

        <label>
          Título
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>

        <label>
          Letra
          <textarea
            value={letra}
            onChange={(e) => setLetra(e.target.value)}
            rows={16}
            required
          />
        </label>

        {erro && <div className="admin-erro">{erro}</div>}

        <div className="admin-form-acoes">
          <button type="submit" disabled={salvando} className="buttonSave">
            {salvando ? "Salvando..." : "Salvar"}
          </button>
          <button type="button" onClick={() => navigate("/admin/hinos")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminHinoForm;
