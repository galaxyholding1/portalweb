import { Home } from "../pages/landing/Home/Home";
import { LoginBusiness } from "../pages/business/LoginBusiness/LoginBusiness";
import { LoginPeople } from "../pages/people/LoginPeople/LoginPeople";
import { Route, Routes } from "react-router";
import { ProtectedRoutesBusiness } from "./ProtectedRoutesBusiness";
import { ProtectedRoutesPeople } from "./ProtectedRoutesPeople";
import { Politics } from "../components/common/home/Politics/Politics";

// Author: Juan Ayala
// Este el enrutador principal de la aplicación, que define tanto las rutas públicas como protegidas.
export const Router = () => {
  return (
    <Routes>
      // Rutas publicas.
      <Route path="/" element={<Home />} />
      <Route path="/login-personas" element={<LoginPeople />} />
      <Route path="/login-empresas" element={<LoginBusiness />} />
      {/* <Route path="/politicas" element={<Politics/>}/> */}
      // Enrutadores adicionales. (TODO: Implementar protección)
      <Route path="/portal-personas/*" element={<ProtectedRoutesPeople />} />
      <Route path="/portal-empresas/*" element={<ProtectedRoutesBusiness />} />
    </Routes>
  );
};
