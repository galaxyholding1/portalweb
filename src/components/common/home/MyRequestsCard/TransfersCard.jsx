import { Card } from "../Card/Card";
import "./RequestsCard.css";
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
  // Determines the type of screen/client, used for dynamic routing.
  const screenType = "Business"; 
  return (
    <div className="transfers-section">
      {/* Card component for displaying the title and an icon. */}
      <Card
        title="Transferencias" // "Transfers"
        icon={
          <Icon name="arrow_left_right"/>
        }
        morePath={`/${screenType}/requests`} // Path to view more transfer requests.
      />
      {/* Table to display the list of transfers. */}
      <div className="transfers-table">
        <table>
          {/* Table header with column titles. */}
          <thead>
            <tr>
              <th>tipo</th> {/* "type" */}
              <th>número</th> {/* "number" */}
              <th>monto</th> {/* "amount" */}
              <th>destino</th> {/* "destination" */}
            </tr>
          </thead>
          {/* Table body, mapping through the transfersList to render each row. */}
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