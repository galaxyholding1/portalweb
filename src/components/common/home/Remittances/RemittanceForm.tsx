import { useState } from "react";
import "./RemittanceForm.css";
import { Icon } from "../../ui/Icon/Icon";
import { Select } from "../../../../components/common/Remittance/Select/Select";

import { Flag } from "../../Flag/Flag";
import { Link, useLocation } from "react-router";
import { getPathByClient, pathByClient } from "../../../../util/getModeClient";
interface RemittanceForm {
  isDarkMode?: boolean;
}

export const RemittanceForm: React.FC<RemittanceForm> = ({
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

  const {pathname} = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div
      style={{gridRow: 'span 2'}}
      className={`remittance-container`} 
    >
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
        <div className="search-bar">
          <input type="text" placeholder="Buscar por nombre, número..." />
          <span className="search-icon">
            <Icon name="icSearch" />
          </span>
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
                  placeholder="Nombre"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
              <Select
                className="select-remittance-form"
                options={[
                  { label: "Documento de identidad", value: "di" },
                  { label: "DNI", value: "dni" },
                  { label: "Pasaporte", value: "passport" },
                ]}
              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Número de cuenta IBAN"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-grid">
                <Select
                  className="select-remittance-form"
                  options={[
                    { label: "País", value: "" },
                    { label: "España", value: "es" },
                    { label: "Colombia", value: "co" },
                    { label: "Perú", value: "pr" },
                    { label: "Venezuela", value: "vn" },
                  ]}
                />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Código BIC/SWIFT"
                  value={formData.identificationNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      identificationNumber: e.target.value,
                    })
                  }
                />
              </div>
                <Select
                  className="select-remittance-form"
                  options={[
                    { label: "Moenda", value: "" },
                    { label: "USD", value: "USD" },
                    { label: "EUR", value: "EUR" },
                    { label: "VENZ", value: "VENZ" },
                  ]}
                />
            </div>
          </div>

          <Link type="submit" className="submit-button" to={`${getPathByClient(pathname)}/remesas/enviar-cuenta/proceso`}>
            Confirmar
          </Link>
        </form>
      </div>
    </div>
  );
};
