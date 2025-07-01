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
import { RemittanceProcess } from "../pages/shared/RemmitanceConfirmation/RemittanceProcess";
import { RemittanceFilters } from "../pages/shared/RemittanceFilters/RemittanceFilters";
import { RemmitanceConfirmationAccount } from "../pages/shared/RemmitanceConfirmationAccount/RemittanceConfirmationAccount";
import { RemittanceInformation } from "../components/common/Remittance/RemittanceInformation/RemittanceInformation";
import { RemittanceShared } from "../pages/shared/RemittanceShared/RemittanceShared";

import { Remittance } from "../pages/business/Remittance/Remittance";
import { RemittanceSend } from "../components/common/home/Remittances/RemittanceSend";
import { DinamicKeyInput } from "../components/common/DinamicKeyInput/DinamicKeyInput";

// Author: Juan Ayala
// Se usa el layout que tiene el navbar de navegación. (subnavbar)
// Es aqui donde se debe manejar la logica de autenticación y 
// autorización para las rutas protegidas relacionadas al portal de personas.
export const ProtectedRoutesPeople = () => (
  <PersonPortalLayout>
    <Routes>
      <Route path="/home" element={<HomePeople />} />
      <Route path="/seguridad" element={<SecurityPeople />} />
      <Route path="/perfil" element={<ProfilePeople />} />
      <Route path="/movimientos" element={<MovementsPeoples />} />
      <Route path="/movimientos/:id" element={<MovementView />} />
      <Route path="/remesas" element={<RemittanceShared />} />

      <Route path="/remesas/enviar-usuario" element={<RemittancePeople />} />
      <Route
        path="/remesas/enviar-usuario/proceso"
        element={<RemittanceProcess />}
      />

      <Route path="/remesas/enviar-cuenta" element={<Remittance />} />
      <Route
        path="/remesas/enviar-cuenta/proceso"
        element={<RemmitanceConfirmationAccount />}
      />

      <Route path="/remesas/filtrar" element={<RemittanceFilters />} />
      <Route path="*" element={<Navigate to="/portal-personas/home" />} />
    </Routes>
  </PersonPortalLayout>
);
