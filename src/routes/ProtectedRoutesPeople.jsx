import { Route, Routes } from "react-router";
import { HomePeople } from "../pages/HomePeople/HomePeople";
import { ConsignmentsPeople } from "../pages/ConsignmentsPeople/ConsignmentsPeople";
import { SecurityPeople } from "../pages/SecurityPeople/SecurityPeople";
import { MovementsPeoples } from "../pages/MovementsPeople/MovementsPeoples";

export const ProtectedRoutesPeople = () => (
  <Routes>
    <Route path="/home" element={<HomePeople />} />
    <Route path="/remesas" element={<ConsignmentsPeople />} />
    <Route path="/seguridad" element={<SecurityPeople />} />
    <Route path="/movimientos" element={<MovementsPeoples />} />
  </Routes>
);
