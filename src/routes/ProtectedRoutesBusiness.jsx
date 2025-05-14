import { Route, Routes } from "react-router";
import { useAuthStore } from "../store/auth-store";
import { useEffect } from "react";
import { HomeBusiness } from "../pages/HomeBusiness/HomeBusiness";
import { ConsignmentsBusiness } from "../pages/ConsignmentsBusiness/ConsignmentsBusiness";
import { SecurityBusiness } from "../pages/SecurityBusiness/SecurityBusiness";

import { MovementsBusiness } from "../pages/MovementsBusiness/MovementsBusiness";

export const ProtectedRoutesBusiness = () => {
  const { login } = useAuthStore();
  useEffect(() => login(), [login]);
  return (
    <Routes>
      <Route path="/home" element={<HomeBusiness />} />
      <Route path="/remesas" element={<ConsignmentsBusiness />} />
      <Route path="/seguridad" element={<SecurityBusiness />} />

      <Route path="/movimientosBusiness" element={<MovementsBusiness />} />
    </Routes>
  );
};
