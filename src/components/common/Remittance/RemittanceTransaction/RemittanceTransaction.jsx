import { CardSelect } from "../../home/Card/CardSelect";
import { MovementDetail } from "../../home/movements/MovementDetail/MovementDetail";
import { MovementItem } from "../../home/movements/movementItem";
import { Icon } from "../../ui/Icon/Icon";

const movementData = [
  { title: "Fecha", description: "13 de mayo de 2025" },
  { title: "Hora", description: "10:45 AM (UTC-5)" },
  { title: "ID de Transacción", description: "TXN-98456321AB" },
];

const userDetails = [
  { title: "Usuario", description: "Juan Pérez" },
  { title: "Correo Electrónico", description: "juan.perez@email.com" },
  { title: "Método de Pago", description: "Remesas Stellar" },
  { title: "Últimos 4 dígitos", description: "1234" },
];

const summaryDetails = [
  {
    title: "Descripción",
    description: "Transferencia internacional a cuenta Paypal",
  },
  { title: "Monto Total", description: "$19.99 USD" },
  { title: "Estado", description: "Confirmado" },
];

const extraInfo = [
  {
    title: "Referencia del Pago: PI ATF-2025-0513-JP",
    description:
      "Este movimiento refleja el cobro automático correspondiente a la renovación de la suscripción activa. El pago ha sido procesado exitosamente a través de nuestro sistema de pasarela segura, y se ha enviado un comprobante al correo electrónico registrado. Para más información o en caso de requerir asistencia, comunícate con nuestro equipo de soporte al cliente.",
  },
];
const movementSections = [movementData, userDetails, summaryDetails, extraInfo];

export const RemittanceTransaction = () => {
  return (
    <div>
      <h3> Movimiento de Transacción de Pago - Galaxy pay </h3>
      <div className="movement-details">
        {movementSections.map((section, sectionIndex) => (
          <MovementDetail key={sectionIndex} items={section} />
        ))}
      </div>
    </div>
  );
};
