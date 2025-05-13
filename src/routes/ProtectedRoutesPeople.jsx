import { Route, Routes } from "react-router";
import { HomePeople } from "../pages/HomePeople/HomePeople";
import { ConsignmentsPeople } from "../pages/ConsignmentsPeople/ConsignmentsPeople";

export const ProtectedRoutesPeople = () => (
  <Routes>
    <Route path="/home" element={<HomePeople />} />
    <Route path="/remesas" element={<ConsignmentsPeople />} />
  </Routes>
);
