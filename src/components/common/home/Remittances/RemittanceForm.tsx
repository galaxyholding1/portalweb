import { useState } from "react";
import "./RemittanceForm.css";

interface RemittanceFormProps {
  isDarkMode?: boolean;
}

export const RemittanceForm: React.FC<RemittanceFormProps> = ({
  isDarkMode = false,
}) => {
  const [formData, setFormData] = useState({
    recipientName: "",
    remittanceType: "",
    identification: "",
    identificationNumber: "",
    accountType: "",
    accountNumber: "",
    currency: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
      <div className="remittance-container">
        <div className="remittance-header">
          <div className="header-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            <span>Remesas</span>
          </div>
        </div>

        <div className="remittance-content">
          <h2 className="form-title">¿A quién deseas enviar dinero?</h2>
          <p className="form-subtitle">
            Envía dinero inmediato a otro usuario galaxy
          </p>

          <form onSubmit={handleSubmit} className="remittance-form">
            <div className="form-grid">
              <div className="form-column">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Nombre a quien envías"
                    value={formData.recipientName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recipientName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <select
                    value={formData.identification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        identification: e.target.value,
                      })
                    }
                  >
                    <option value="">Identificación</option>
                    <option value="dni">DNI</option>
                    <option value="passport">Pasaporte</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    value={formData.accountType}
                    onChange={(e) =>
                      setFormData({ ...formData, accountType: e.target.value })
                    }
                  >
                    <option value="">Tipo de cuenta</option>
                    <option value="savings">Ahorros</option>
                    <option value="checking">Corriente</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    value={formData.currency}
                    onChange={(e) =>
                      setFormData({ ...formData, currency: e.target.value })
                    }
                  >
                    <option value="">Moneda</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <select
                    value={formData.remittanceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        remittanceType: e.target.value,
                      })
                    }
                  >
                    <option value="">Tipo de remesa</option>
                    <option value="instant">Instantánea</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Número de identificación"
                    value={formData.identificationNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        identificationNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Número de cuenta"
                    value={formData.accountNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        accountNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Monto a transferir"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Confirmar
            </button>
          </form>
        </div>
      </div>
  );
};
