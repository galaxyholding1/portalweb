import { useState } from "react";
import "./RemittanceForm.css";
import { Icon } from "../../ui/Icon/Icon";
import { Select } from "../../../../components/common/Remittance/Select/Select";
import { Flag } from "../../Flag/Flag";
import { Link, useLocation, useNavigate } from "react-router";
import { getPathByClient, pathByClient } from "../../../../util/getModeClient";
import { DinamicKeyModal } from "../../ui/modal/DinamicKeyModal/DinamicKeyModal";
import { useModalStore } from "../../../../store/modal-store";

// Props interface for optional configuration
interface RemittanceForm {
  isDarkMode?: boolean;
}

/**
 * RemittanceForm component allows the user to fill out a form for sending remittances.
 * It includes personal information, account and country details, and validates via a modal before submission.
 *
 * @param {boolean} isDarkMode - (Optional) Enables dark theme styling if true.
 */
export const RemittanceForm: React.FC<RemittanceForm> = ({
  isDarkMode = false,
}) => {
  // State to store form data
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

  // Router and modal helpers
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { showModal } = useModalStore();

  // Prevent default form submission (not used here directly)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  /**
   * Shows a modal for dynamic key confirmation.
   * If confirmed, navigates to the remittance process screen.
   */
  const handleConfirm = async () => {
    const response = await showModal(<DinamicKeyModal />);
    if (!response) return;

    navigate(`${getPathByClient(pathname)}/remesas/enviar-cuenta/proceso`);
  };

  return (
    <div
      style={{ gridRow: "span 2" }}
      className={`remittance-container`}
    >
      {/* Header with icon */}
      <div className="remittance-header">
        <div className="header-icon">
          <Icon name={"credit_card"} className="nav-icon-img" />
          <span>Remesas</span>
        </div>
      </div>

      {/* Search contact area */}
      <div className="parent-container">
        <div className="habitual-contact">
          <span className="icon">
            <Icon name="icUser" />
          </span>
          <span>Who do you want to send money to?</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search by name, number..." />
          <span className="search-icon">
            <Icon name="icSearch" />
          </span>
        </div>
      </div>

      {/* Form content */}
      <div className="remittance-content">
        <p className="form-subtitle">
          Select one of your frequent contacts
        </p>

        <form onSubmit={handleSubmit} className="remittance-form">
          <div className="container-remesas">
            {/* First form row */}
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
              <Select
                className="select-remittance-form"
                options={[
                  { label: "Identity Document", value: "di" },
                  { label: "DNI", value: "dni" },
                  { label: "Passport", value: "passport" },
                ]} onChange={undefined} placeholder={undefined}              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="IBAN account number"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Second form row */}
            <div className="form-grid">
              <Select
                className="select-remittance-form"
                options={[
                  { label: "Country", value: "" },
                  { label: "Spain", value: "es" },
                  { label: "Colombia", value: "co" },
                  { label: "Peru", value: "pr" },
                  { label: "Venezuela", value: "vn" },
                ]} onChange={undefined} placeholder={undefined}              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="BIC/SWIFT Code"
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
                  { label: "Currency", value: "" },
                  { label: "USD", value: "USD" },
                  { label: "EUR", value: "EUR" },
                  { label: "VENZ", value: "VENZ" },
                ]} onChange={undefined} placeholder={undefined}              />
            </div>
          </div>

          {/* Confirmation button with modal */}
          <Link type="submit" className="submit-button" onClick={handleConfirm} to={""}>
            Confirm
          </Link>
        </form>
      </div>
    </div>
  );
};
