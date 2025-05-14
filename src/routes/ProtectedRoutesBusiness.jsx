import { Route, Routes } from "react-router";
import { useAuthStore } from '../store/auth-store';
import { useEffect } from 'react';
import { HomeBusiness } from "../pages/business/HomeBusiness/HomeBusiness";
import { SecurityBusiness } from "../pages/business/SecurityBusiness/SecurityBusiness";
import { ConsignmentsBusiness } from "../pages/business/ConsignmentsBusiness/ConsignmentsBusiness";
import { BusinessPortalLayout } from "../layouts/BusinessPortalLayout";

export const ProtectedRoutesBusiness = () => {
  const { login } = useAuthStore();
  useEffect(() => login(), [login]);
  return (
    <BusinessPortalLayout>
      <Routes>
        <Route path="/home" element={<HomeBusiness/>} />
        <Route path="/remesas" element={<ConsignmentsBusiness/>} />
        <Route path="/seguridad" element={<SecurityBusiness/>} />
      </Routes>
    </BusinessPortalLayout>
  );
};
