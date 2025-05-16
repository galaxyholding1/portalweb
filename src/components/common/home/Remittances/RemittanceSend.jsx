import { useState } from "react";
import remesasIcon from "../../../../assets/icons/remesas_icon.svg";
import pdfIcon from "../../../../assets/icons/pdf_icon.svg";
import printIcon from "../../../../assets/icons/printer.svg";
import "./RemittanceSend.css";

export const RemittanceSend = ({ isDarkMode = false }) => {
  return (
    <div className={`remittance-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <div className="remittance-header">
        <div className="header-icon">
          <img src={remesasIcon} alt="remesas_icon" className="remesas_icon" />
          <span>Remesas</span>
        </div>
      </div>
      <div className="header-title">
        <h2>Envío de dinero con éxito</h2>
      </div>
      <div className="header-title">
        <h3>Movimiento de Transacción de Pago – Galaxy pay</h3>
      </div>

      <div className="card">
        <p>
          <strong>Fecha:</strong> 13 de mayo de 2025
        </p>
        <p>
          <strong>Hora:</strong> 10:45 AM (UTC-5)
        </p>
        <p>
          <strong>ID de Transacción:</strong> TXN-98456321AB
        </p>
      </div>

      <div className="card">
        <p>
          <strong>Usuario:</strong> Juan Pérez
        </p>
        <p>
          <strong>Correo Electrónico:</strong> usuario@email.com
        </p>
        <p>
          <strong>Método de Pago:</strong> Remesas galaxy pay
        </p>
        <p>
          <strong>Últimos 4 dígitos:</strong> 1234
        </p>
      </div>

      <div className="card">
        <p>
          <strong>Descripción:</strong> Transferencia internacional a cuenta
          Paypal
        </p>
        <p>
          <strong>Monto Total:</strong> $19.99 USD
        </p>
        <p>
          <strong>Estado:</strong> Confirmado
        </p>
      </div>

      <div className="card">
        <p>
          <strong>Referencia del Pago:</strong> PLATF-2025-0513-JP
        </p>
        <p>
          Este movimiento refleja el cobro automático correspondiente a la
          renovación de la suscripción activa. El pago ha sido procesado
          exitosamente a través de nuestro sistema de pasarela segura, y se ha
          enviado un comprobante al correo electrónico registrado. Para más
          información o en caso de requerir asistencia, comunícate con nuestro
          equipo de soporte al cliente.
        </p>
      </div>

      <div className="action-buttons">
        <button onClick={() => alert("Descargar PDF")}>
          <img src={pdfIcon} alt="pdfIcon" className="icon" />
          Descargar PDF
        </button>
        <button onClick={() => window.print()}>
          <img src={printIcon} alt="printIcon" className="icon" />
          Imprimir
        </button>
      </div>
    </div>
  );
};
