import { Card } from "../Card/Card";
import "./RequestsCard.css";
import Bell_Ringing from "../../../../assets/icons/bell_ring.svg";
import Note_Search from "../../../../assets/icons/note_search.svg";
import File_Document from "../../../../assets/icons/file_document.svg";
import Arrow_Left_Right from "../../../../assets/icons/arrow_left_right.svg";
import { Icon } from "../../ui/Icon/Icon";

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

export const RequestsCard = () => {
  const screenType = "Business";
  return (
    <div className="requests-section">
      <Card
        title="Mis solicitudes"
        icon={<Icon name="file_document" alt="documento"/>}
        morePath={`/${screenType}/requests`}
      />
      <div className="requests-list">
        {requestsList.map((request) => (
          <div key={request.id} className="request-item">
            <div className="request-icon">
              <div className="request-icon">
                <Icon name="bell_ring" />
              </div>
            </div>
            <div className="request-content">
              <p className="request-title">{request.title}</p>
              <span className="request-time">{request.time}</span>
            </div>
            <div className="request-status">
              <div className="request-icon">
                <Icon name="bell_ring" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
