import { Card } from "../Card/Card";
import "./BalanceCard.css";

const balanceByProduct = [
  { type: "Cuenta de ahorro", balance: 1000, productId: 1234567 },
  { type: "Cuenta corriente", balance: 2000, productId: 1234567 },
];

export const BalanceCard = () => {
  const screenType = "people"; // "Business"
  return (
    <div className="grid-area-balance">
      <Card
        title="Saldo"
        icon={"icon"}
        morePath={`/${screenType}/balance`}
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
            {balanceByProduct.map(({ type, balance, productId }) => (
              <tr>
                <td>{type}</td>
                <td>{balance}</td>
                <td>{productId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
