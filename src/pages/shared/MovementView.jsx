import { CardSelect } from "../../components/common/home/Card/CardSelect";
import { MovementItem } from "../../components/common/home/movements/movementItem";
import { Icon } from "../../components/common/ui/Icon/Icon";
import "./MovementView.css";

const movementData = [
  { title: "Fecha", description: "13 de mayo de 2025", haveSeparator: false },
  { title: "Hora", description: "10:45 AM (UTC-5)", haveSeparator: false },
  {
    title: "ID de Transacción",
    description: "TXN-98456321AB",
    haveSeparator: true,
  },

  { title: "Usuario", description: "Juan Pérez", haveSeparator: false },
  {
    title: "Correo Electrónico",
    description: "juan.perez@email.com",
    haveSeparator: false,
  },
  {
    title: "Método de Pago",
    description: "Remesas Stellar",
    haveSeparator: false,
  },
  { title: "Últimos 4 dígitos", description: "1234", haveSeparator: true },

  {
    title: "Descripción",
    description: "Transferencia internacional a cuenta Paypal",
    haveSeparator: false,
  },
  { title: "Monto Total", description: "$19.99 USD", haveSeparator: false },
  { title: "Estado", description: "Confirmado", haveSeparator: true },

  {
    title: "",
    description: "Referencia del Pago: PI ATF-2025-0513-JP",
    haveSeparator: false,
  },
  {
    title: "",
    description:
      "Este movimiento refleja el cobro automático correspondiente a la renovación de la suscripción activa. El pago ha sido procesado exitosamente a través de nuestro sistema de pasarela segura, y se ha enviado un comprobante al correo electrónico registrado.",
    haveSeparator: false,
  },
  {
    title: "",
    description:
      "Para más información o en caso de requerir asistencia, comunícate con nuestro equipo de soporte al cliente.",
    haveSeparator: false,
  },
];

export const MovementView = () => {
  return (
    <div>
      <CardSelect
        title={"Detalle de movimientos"}
        icon={<Icon name="moving_desk" />}
      >
        <MovementItem amount={4000} conceptTitle="Airbnb" date={new Date()} />
        <h3> Movimiento de Transacción de Pago - Galaxy pay </h3>
        <div className="movement-details">
          {movementData.map(({ title, description, haveSeparator }, index) => (
            <>
              <div key={index} className="movement-detail-text">
                {title && <span>{title}:</span>}
                <span>{description}</span>
              </div>
              {haveSeparator && <hr />}
            </>
          ))}
        </div>
        <div className="actions-movement-container">
          <button className="button-portal">
            <Icon
              name="save"
              filter="invert(100%) sepia(0%) saturate(1000%) hue-rotate(180deg) brightness(1100%)"
            />
            Descargar PDF
          </button>
          <button className="button-portal">
            <Icon
              name="printer"
            />
            Imprimir
          </button>
        </div>
      </CardSelect>
    </div>
  );
};
