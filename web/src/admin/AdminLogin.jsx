import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/api/auth.js";
import { setToken } from "../utils/api/adminAuth.js";

const AdminLogin = () => {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setEnviando(true);
    try {
      const { token } = await login(senha);
      setToken(token);
      navigate("/admin", { replace: true });
    } catch {
      setErro("Senha inválida.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="admin-login">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h1>Painel Administrativo</h1>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          autoFocus
        />
        {erro && <div className="admin-erro">{erro}</div>}
        <button type="submit" disabled={enviando || !senha}>
          {enviando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
