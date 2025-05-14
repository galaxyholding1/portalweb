import { Route, Routes } from "react-router";
import { HomePeople } from "../pages/people/HomePeople/HomePeople";
import { ConsignmentsPeople } from "../pages/people/ConsignmentsPeople/ConsignmentsPeople";
import { SecurityPeople } from "../pages/people/SecurityPeople/SecurityPeople";
import { MovementsPeoples } from "../pages/people/MovementsPeople/MovementsPeoples";
import { PersonPortalLayout } from "../layouts/PeoplePortalLayout";
import { MovementView } from "../pages/shared/MovementView";

export const ProtectedRoutesPeople = () => (
  <PersonPortalLayout>
    <Routes>
      <Route path="/home" element={<HomePeople />} />
      <Route path="/remesas" element={<ConsignmentsPeople />} />
      <Route path="/seguridad" element={<SecurityPeople />} />
      <Route path="/movimientos" element={<MovementsPeoples />} />
      <Route path="/movimientos/:id" element={<MovementView/>} />
    </Routes>
  </PersonPortalLayout>
);
