import { Home } from "../pages/Home/Home";
import { LoginBusiness } from "../pages/LoginBusiness/LoginBusiness";
import { LoginPeople } from "../pages/LoginPeople/LoginPeople";
import { Route, Routes } from "react-router";
import { ProtectedRoutesBusiness } from "./ProtectedRoutesBusiness";
import { ProtectedRoutesPeople } from "./ProtectedRoutesPeople";

export const Router = () => {
  return (
    <Routes>
      // Rutas publicas.
      <Route path="/" element={<Home/>} />
      <Route path="/login-personas" element={<LoginPeople />} />
      <Route path="/login-empresas" element={<LoginBusiness />} />

      // Enrutadores adicionales. (TODO: Implementar protección)
      <Route path="/portal-personas/*" element={<ProtectedRoutesPeople />} />
      <Route path="/portal-empresas/*" element={<ProtectedRoutesBusiness />} />
    </Routes>
  );
};
