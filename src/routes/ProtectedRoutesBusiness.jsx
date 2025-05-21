import { Navigate, Route, Routes } from "react-router";
import { useAuthStore } from "../store/auth-store";
import { useEffect } from "react";
import { HomeBusiness } from "../pages/business/HomeBusiness/HomeBusiness";
import { SecurityBusiness } from "../pages/business/SecurityBusiness/SecurityBusiness";
import { ConsignmentsBusiness } from "../pages/business/ConsignmentsBusiness/ConsignmentsBusiness";
import { BusinessPortalLayout } from "../layouts/BusinessPortalLayout";
import { MovementsBusiness } from "../pages/business/MovementsBusiness/MovementsBusiness";
import { MovementView } from "../pages/shared/MovementView";
import { ProfileBusiness } from "../pages/business/ProfileBusiness/ProfileBusiness";
import { Remittance } from "../pages/business/Remittance/Remittance";
import { RemittanceProcess } from "../pages/shared/RemmitanceConfirmation/RemittanceProcess";
import { RemmitanceConfirmationAccount } from "../pages/shared/RemmitanceConfirmationAccount/RemmitanceConfirmationAccount";

export const ProtectedRoutesBusiness = () => {
  const { login } = useAuthStore();
  useEffect(() => login(), [login]);
  return (
    <BusinessPortalLayout>
      <Routes>
        <Route path="/home" element={<HomeBusiness />} />
        <Route path="/seguridad" element={<SecurityBusiness />} />
        <Route path="/perfil" element={<ProfileBusiness />} />
        <Route path="/movimientos" element={<MovementsBusiness />} />
        <Route path="/movimientos/:id" element={<MovementView />} />
        <Route path="/remesas" element={<Remittance />} />
        <Route path="/remesas/enviar" element={<RemittanceProcess />} />
        <Route path="/remesas/enviar2" element={<RemmitanceConfirmationAccount />} />
        <Route path="*" element={<Navigate to="/portal-empresas/home" /> } />
      </Routes>
    </BusinessPortalLayout>
  );
};
