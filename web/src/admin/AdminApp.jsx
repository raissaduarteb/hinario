import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard.jsx";
import AdminGuard from "./AdminGuard.jsx";
import AdminHinoForm from "./AdminHinoForm.jsx";
import AdminHinos from "./AdminHinos.jsx";
import AdminLogin from "./AdminLogin.jsx";
import AdminRepertorioDetalhe from "./AdminRepertorioDetalhe.jsx";
import AdminRepertorios from "./AdminRepertorios.jsx";
import "./admin.css";

const AdminApp = () => (
  <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route element={<AdminGuard />}>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/hinos" element={<AdminHinos />} />
      <Route path="/admin/hinos/novo" element={<AdminHinoForm />} />
      <Route path="/admin/hinos/:id/editar" element={<AdminHinoForm />} />
      <Route path="/admin/repertorios" element={<AdminRepertorios />} />
      <Route path="/admin/repertorios/:id" element={<AdminRepertorioDetalhe />} />
    </Route>
  </Routes>
);

export default AdminApp;
