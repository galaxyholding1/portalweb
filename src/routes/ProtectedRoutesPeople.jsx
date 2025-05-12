import { Route, Routes } from "react-router";
import { HomePeople } from "../pages/HomePeople/HomePeople";

export const ProtectedRoutesPeople = () => (
  <Routes>
    <Route path="/home" element={<HomePeople />} />
  </Routes>
);
