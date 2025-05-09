import { Card } from "../Card/Card";
import "./RequestsCard.css";

const requestsList = [
  {
    id: 1,
    title: "apertura de cuenta galaxy pay",
    time: "18:27 - Abril 20",
    status: "pending",
  },
  {
    id: 2,
    title: "aprobacion cuenta",
    time: "18:27 - Abril 20",
    status: "approved",
  },
  {
    id: 3,
    title: "restablecimiento de contraseña",
    time: "18:27 - Abril 20",
    status: "pending",
  },
];

const transfersList = [
  {
    tipo: "cuenta galaxy pay",
    numero: "0000000000",
    monto: "$4,000.00",
    destino: "cuenta galaxy pay",
  },
  {
    tipo: "cuenta galaxy pay",
    numero: "0000000000",
    monto: "$4,000.00",
    destino: "cuenta galaxy pay",
  },
  {
    tipo: "cuenta galaxy pay",
    numero: "0000000000",
    monto: "$4,000.00",
    destino: "cuenta galaxy pay",
  },
];

export const RequestsCard = () => {
  return (
    <div className="requests-container">
      <div className="requests-section">
        <div className="section-header">
          <h3>mis solicitudes</h3>
          <a href="#" className="ver-mas">
            ver más
          </a>
        </div>
        <div className="requests-list">
          {requestsList.map((request) => (
            <div key={request.id} className="request-item">
              <div className="request-icon">
                <div className="request-icon">
                  <svg
                    className="notification-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                  </svg>
                </div>
              </div>
              <div className="request-content">
                <p className="request-title">{request.title}</p>
                <span className="request-time">{request.time}</span>
              </div>
              <div className="request-status">
                <span className="status-icon">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="transfers-section">
        <div className="section-header">
          <h3>transferencias</h3>
          <a href="#" className="ver-mas">
            ver más
          </a>
        </div>
        <div className="transfers-table">
          <table>
            <thead>
              <tr>
                <th>tipo</th>
                <th>número</th>
                <th>monto</th>
                <th>destino</th>
              </tr>
            </thead>
            <tbody>
              {transfersList.map((transfer, index) => (
                <tr key={index}>
                  <td>{transfer.tipo}</td>
                  <td>{transfer.numero}</td>
                  <td>{transfer.monto}</td>
                  <td>{transfer.destino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
