import { Route, Routes } from "react-router";
import { useAuthStore } from "../store/auth-store";
import { useEffect } from "react";
import { HomeBusiness } from "../pages/business/HomeBusiness/HomeBusiness";
import { SecurityBusiness } from "../pages/business/SecurityBusiness/SecurityBusiness";
import { ConsignmentsBusiness } from "../pages/business/ConsignmentsBusiness/ConsignmentsBusiness";
import { BusinessPortalLayout } from "../layouts/BusinessPortalLayout";
import { MovementsBusiness } from "../pages/business/MovementsBusiness/MovementsBusiness";
import { MovementView } from "../pages/shared/MovementView";
import { ProfileBusiness } from "../pages/business/ProfileBusiness/ProfileBusiness";


export const ProtectedRoutesBusiness = () => {
  const { login } = useAuthStore();
  useEffect(() => login(), [login]);
  return (
    <BusinessPortalLayout>
      <Routes>
        <Route path="/home" element={<HomeBusiness/>} />
        <Route path="/remesas" element={<ConsignmentsBusiness/>} />
        <Route path="/seguridad" element={<SecurityBusiness/>} />
        <Route path="/perfil" element={<ProfileBusiness/>} />
        <Route path="/movimientos" element={<MovementsBusiness />} />
        <Route path="/movimientos/:id" element={<MovementView/>} />
      </Routes>
    </BusinessPortalLayout>
  );
};
