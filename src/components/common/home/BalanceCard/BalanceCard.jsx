import { Formatter } from "../../../../util/formatter";
import { Card } from "../Card/Card";
import "./BalanceCard.css";
import { Icon } from "../../ui/Icon/Icon";
import { getPathByClient } from "../../../../util/getModeClient";
import { useLocation } from "react-router";

const balanceByProduct = [
  { type: "cuenta galaxy pay", balance: 1000, productId: 1234567 },
  { type: "IBAN", balance: 2000, productId: 1234567 },
];

export const BalanceCard = () => {
  const {pathname} = useLocation();
  return (
    <div className="grid-area-balance">
      <Card
        title="Saldo"
        icon={<Icon name="cents" width={16} />}
        morePath={`${getPathByClient(pathname)}/balance`}
        
      >
        <table className="balance-table">
          <thead className="balance-table-header">
            <tr>
              <th>Tipo</th>
              <th>Número</th>
              <th>Saldo Disponible</th>
            </tr>
          </thead>
          <tbody className="balance-table-body">
            {balanceByProduct.map(({ type, balance, productId }, i) => (
              <tr key={`${productId}${i}`}>
                <td>{type}</td>
                <td>{productId}</td>
                <td>{Formatter.formatCurrency(balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
