import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { clearToken, getToken } from "../utils/api/adminAuth.js";

const AdminGuard = () => {
  const navigate = useNavigate();

  if (!getToken()) {
    return <Navigate to="/admin/login" replace />;
  }

  const sair = () => {
    clearToken();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-shell">
      <nav className="admin-nav">
        <span className="admin-nav-titulo">Hinário — Admin</span>
        <NavLink to="/admin" end>
          Início
        </NavLink>
        <NavLink to="/admin/hinos">Hinos</NavLink>
        <NavLink to="/admin/repertorios">Hinos da Semana</NavLink>
        <button className="admin-nav-sair" onClick={sair}>
          Sair
        </button>
      </nav>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminGuard;
