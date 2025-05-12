import { Route, Routes } from "react-router";
import { useAuthStore } from '../store/auth-store';
import { useEffect } from 'react';
import { HomeBusiness } from "../pages/HomeBusiness/HomeBusiness";

export const ProtectedRoutesBusiness = () => {
  const { login } = useAuthStore();
  useEffect(() => login(), [login]);
  return (
    <Routes>
      <Route path="/home" element={<HomeBusiness />} />
    </Routes>
  );
};
