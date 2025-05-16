import { Card } from "../Card/Card";
import "./RequestsCard.css";
import Arrow_Left_Right from "../../../../assets/icons/arrow_left_right.svg";
import { Icon } from "../../ui/Icon/Icon";

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

export const TransfersCard = () => {
  const screenType = "Business";
  return (
    <div className="transfers-section">
      <Card
        title="Transferencias"
        icon={
          <Icon name="arrow_left_right"/>
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
  );
};
