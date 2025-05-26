import { useState } from "react";
import "./RemittanceForm.css";
import { Icon } from "../../ui/Icon/Icon";
import { Flag } from "../../Flag/Flag";
interface RemittanceForm {
  isDarkMode?: boolean;
}

export const RemittanceBusinessForm: React.FC<RemittanceForm> = ({
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
    <div className={`remittance-container ${isDarkMode ? "dark" : ""}`}>
      <div className="remittance-header">
        <div className="header-icon">
          <Icon name={"credit_card"} className="nav-icon-img" />
          <span>Remesas</span>
        </div>
      </div>

      <div className="parent-container">
        <div className="habitual-contact">
          <span className="icon">
            <Icon name="icUser" />
          </span>
          <span> ¿A quíen deseas enviar dinero?</span>
        </div>
        <div className="remittance-search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar por nombre, email, número..."
            />
            <span className="search-icon">
              <Icon name="icSearch" />
            </span>
          </div>
          <a href="#" className="see-more">
            ver más
          </a>
        </div>
      </div>

      <div className="remittance-content">
        <p className="form-subtitle">
          Seleccionar uno de los contactos habituales
        </p>

        <form onSubmit={handleSubmit} className="remittance-form">
          <div className="container-remesas">
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre a quien envías"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <select
                  value={formData.identification}
                  onChange={(e) =>
                    setFormData({ ...formData, identification: e.target.value })
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

            <div className="form-grid">
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
                    setFormData({
                      ...formData,
                      amount: e.target.value,
                    })
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
