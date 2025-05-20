import { Navigate, Route, Routes } from "react-router";
import { HomePeople } from "../pages/people/HomePeople/HomePeople";
import { ConsignmentsPeople } from "../pages/people/ConsignmentsPeople/ConsignmentsPeople";
import { SecurityPeople } from "../pages/people/SecurityPeople/SecurityPeople";
import { MovementsPeoples } from "../pages/people/MovementsPeople/MovementsPeoples";
import { PersonPortalLayout } from "../layouts/PeoplePortalLayout";
import { MovementView } from "../pages/shared/MovementView";
import { ProfilePeople } from "../pages/people/ProfilePeople/ProfilePeople";
import { RemittancePeople } from "../pages/people/RemittancePeople/RemittancePeople";
import { RemmitanceConfirmationItem } from "../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";
import { RemmitanceProcess } from "../pages/shared/RemmitanceConfirmation/RemmitanceProcess";

export const ProtectedRoutesPeople = () => (
  <PersonPortalLayout>
    <Routes>
      <Route path="/home" element={<HomePeople />} />
      <Route path="/seguridad" element={<SecurityPeople />} />
      <Route path="/perfil" element={<ProfilePeople />} />
      <Route path="/movimientos" element={<MovementsPeoples />} />
      <Route path="/movimientos/:id" element={<MovementView/>} />
      <Route path="/remesas" element={<RemittancePeople />} />
      <Route path="*" element={<Navigate to="/portal-personas/home" /> } />
      <Route path="/confirmacion" element={<RemmitanceConfirmationItem/>} />
    </Routes>
  </PersonPortalLayout>
);
