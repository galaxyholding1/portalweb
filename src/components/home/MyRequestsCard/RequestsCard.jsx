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
                <span className="notification-dot"></span>
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
