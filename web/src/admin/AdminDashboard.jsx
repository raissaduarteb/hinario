import { Link } from "react-router-dom";

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <Link className="admin-card" to="/admin/hinos">
      <h2>Hinos</h2>
      <p>Criar, editar e apagar hinos.</p>
    </Link>
    <Link className="admin-card" to="/admin/repertorios">
      <h2>Hinos da Semana</h2>
      <p>Montar a seleção que aparece no app.</p>
    </Link>
  </div>
);

export default AdminDashboard;
