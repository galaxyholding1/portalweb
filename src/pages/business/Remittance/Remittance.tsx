// Importa el componente MovementCard desde su ruta relativa
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";

// Importa el componente RemittanceForm desde su ruta relativa
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";

// Importa el componente LastConsignment desde su ruta relativa
import { LastConsignment } from "../../../components/common/home/RemittancesCard/LastConsignment";

// Importa los estilos CSS específicos para el componente Remittance
import "./Remittance.css";

// Define y exporta el componente funcional Remittance
export const Remittance = () => {
  return (
    // Contenedor principal con clase CSS que define la estructura en grid
    <div className="dashboard-grid">
      {/* Renderiza el formulario de remesas */}
      <RemittanceForm />

      {/* Contenedor secundario para mostrar las aplicaciones relacionadas */}
      <div className="grid-area-applications">
        {/* Renderiza el componente MovementCard con una prop llamada stateIndicator */}
        <MovementCard stateIndicator />

        {/* Renderiza el componente que muestra el último consignado */}
        <LastConsignment />
      </div>
    </div>
  );
};
