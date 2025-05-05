import React from "react";
import { Home } from "../pages/Home/Home";
import { LoginBusiness } from "../pages/LoginBusiness/LoginBusiness";
import { LoginPeople } from "../pages/LoginPeople/LoginPeople";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login-personas" element={<LoginPeople />} />
      <Route path="/login-empresas" element={<LoginBusiness />} />
    </Routes>
  );
};
