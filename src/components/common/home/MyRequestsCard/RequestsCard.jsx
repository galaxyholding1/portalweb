import { Card } from "../Card/Card";
import "./RequestsCard.css";
import Bell_Ringing from "../../../../assets/icons/bell_ring.svg";
import Note_Search from "../../../../assets/icons/note_search.svg";
import File_Document from "../../../../assets/icons/file_document.svg";
import Arrow_Left_Right from "../../../../assets/icons/arrow_left_right.svg";

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
  const screenType = "Business";
  return (
    <div className="requests-container">
      <div className="requests-section">
        <Card
          title="Mis solicitudes"
          icon={
            <img src={File_Document} alt="documento" className="card-icon" />
          }
          morePath={`/${screenType}/requests`}
        />
        <div className="requests-list">
          {requestsList.map((request) => (
            <div key={request.id} className="request-item">
              <div className="request-icon">
                <div className="request-icon">
                  <img src={Bell_Ringing} alt="" />
                </div>
              </div>
              <div className="request-content">
                <p className="request-title">{request.title}</p>
                <span className="request-time">{request.time}</span>
              </div>
              <div className="request-status">
                <div className="request-icon">
                  <img src={Note_Search} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="transfers-section">
        <Card
          title="Transferencias"
          icon={
            <img src={Arrow_Left_Right} alt="documento" className="card-icon" />
          }
          morePath={`/${screenType}/requests`}
        />
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
