import { useState } from "react";
import "./RemittanceForm.css";
import { Icon } from "../../ui/Icon/Icon";

// Props interface for the component
interface RemittanceForm {
  isDarkMode?: boolean;
}

/**
 * RemittanceBusinessForm component renders a form to initiate a business remittance transaction.
 * Includes inputs for recipient information, remittance type, identification, account and amount.
 *
 * @param {boolean} isDarkMode - Optional flag to toggle dark mode styling.
 */
export const RemittanceBusinessForm: React.FC<RemittanceForm> = ({
  isDarkMode = false,
}) => {
  // Local state to store form data
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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className={`remittance-container ${isDarkMode ? "dark" : ""}`}>
      {/* Header section with icon */}
      <div className="remittance-header">
        <div className="header-icon">
          <Icon name={"credit_card"} className="nav-icon-img" />
          <span>Remesas</span>
        </div>
      </div>

      {/* Search for frequent contacts */}
      <div className="parent-container">
        <div className="habitual-contact">
          <span className="icon">
            <Icon name="icUser" />
          </span>
          <span> Who do you want to send money to?</span>
        </div>
        <div className="remittance-search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name, email, number..."
            />
            <span className="search-icon">
              <Icon name="icSearch" />
            </span>
          </div>
          <a href="#" className="see-more">
            See more
          </a>
        </div>
      </div>

      {/* Remittance form section */}
      <div className="remittance-content">
        <p className="form-subtitle">
          Select one of your frequent contacts
        </p>

        <form onSubmit={handleSubmit} className="remittance-form">
          <div className="container-remesas">
            {/* First grid of fields */}
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Recipient's name"
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
                  <option value="">Identification</option>
                  <option value="dni">DNI</option>
                  <option value="passport">Passport</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  value={formData.accountType}
                  onChange={(e) =>
                    setFormData({ ...formData, accountType: e.target.value })
                  }
                >
                  <option value="">Account type</option>
                  <option value="savings">Savings</option>
                  <option value="checking">Checking</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  <option value="">Currency</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>

            {/* Second grid of fields */}
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
                  <option value="">Remittance type</option>
                  <option value="instant">Instant</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Identification number"
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
                  placeholder="Account number"
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
                  placeholder="Amount to transfer"
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

          {/* Submit button */}
          <button type="submit" className="submit-button">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
