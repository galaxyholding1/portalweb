// Importa el componente para seleccionar tarjeta (aunque no se usa en este archivo)
import { CardSelect } from "../../home/Card/CardSelect";

// Importa el componente que muestra los detalles de una sección del movimiento
import { MovementDetail } from "../../home/movements/MovementDetail/MovementDetail";

// Importa un componente individual de movimiento (tampoco se usa aquí)
import { MovementItem } from "../../home/movements/movementItem";

// Importa el componente de íconos
import { Icon } from "../../ui/Icon/Icon";

// Datos de la transacción: fecha, hora e ID
const movementData = [
  { title: "Fecha", description: "13 de mayo de 2025" },
  { title: "Hora", description: "10:45 AM (UTC-5)" },
  { title: "ID de Transacción", description: "TXN-98456321AB" },
];

// Información del usuario que realizó la transacción
const userDetails = [
  { title: "Usuario", description: "Juan Pérez" },
  { title: "Correo Electrónico", description: "juan.perez@email.com" },
  { title: "Método de Pago", description: "Remesas Stellar" },
  { title: "Últimos 4 dígitos", description: "1234" },
];

// Resumen de la transacción
const summaryDetails = [
  {
    title: "Descripción",
    description: "Transferencia internacional a cuenta Paypal",
  },
  { title: "Monto Total", description: "$19.99 USD" },
  { title: "Estado", description: "Confirmado" },
];

// Información adicional o aclaratoria
const extraInfo = [
  {
    title: "Referencia del Pago: PI ATF-2025-0513-JP",
    description:
      "Este movimiento refleja el cobro automático correspondiente a la renovación de la suscripción activa. El pago ha sido procesado exitosamente a través de nuestro sistema de pasarela segura, y se ha enviado un comprobante al correo electrónico registrado. Para más información o en caso de requerir asistencia, comunícate con nuestro equipo de soporte al cliente.",
  },
];

// Agrupación de todas las secciones para renderizarlas en orden
const movementSections = [movementData, userDetails, summaryDetails, extraInfo];

// Componente principal que representa la vista de una transacción específica
export const RemittanceTransaction = () => {
  return (
    <div>
      {/* Título de la sección */}
      <h3> Movimiento de Transacción de Pago - Galaxy pay </h3>

      {/* Contenedor que incluye los bloques de detalle de la transacción */}
      <div className="movement-details">
        {movementSections.map((section, sectionIndex) => (
          // Renderiza cada bloque de detalles usando el componente MovementDetail
          <MovementDetail key={sectionIndex} items={section} />
        ))}
      </div>
    </div>
  );
};
