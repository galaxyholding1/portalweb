import React, { useState } from "react";
import "./SecurityCard.css";
import File_Document from "../../../../assets/icons/file_document.svg";
import saveIcon from "../../../assets/images/SVG/save.svg";

export const SecurityCard = () => {
  const [authMethod, setAuthMethod] = useState("sms");
  const [operations, setOperations] = useState({
    fiat: false,
    crypto: true,
    app: false,
    antiFiat: false,
    antiCrypto: false,
    antiApp: false,
  });

  return (
    <div className="security-container">
      <div className="security-header">
        <img src={File_Document} alt="Seguridad" className="card-icon" />
        <h2 className="security-title">Seguridad</h2>
      </div>

      <div className="security-grid">
        <div className="security-column">
          <div className="auth-section">
            <h3 className="section-title">Autentificación de doble factor</h3>
            <div className="auth-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="auth"
                  value="sms"
                  checked={authMethod === "sms"}
                  onChange={(e) => setAuthMethod(e.target.value)}
                />
                <span>SMS</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="auth"
                  value="authenticator"
                  checked={authMethod === "authenticator"}
                  onChange={(e) => setAuthMethod(e.target.value)}
                />
                <span>Google Authenticator</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="auth"
                  value="fido"
                  checked={authMethod === "fido"}
                  onChange={(e) => setAuthMethod(e.target.value)}
                />
                <span>Fido U2F (llave física)</span>
              </label>
            </div>
          </div>

          <div className="operations-section">
            <h3 className="section-title">
              Operaciones en las que puedo utilizar la autentificación de doble
              factor
            </h3>
            <div className="operations-list">
              <div className="operation-item">
                <span>Transacciones FIAT</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={operations.fiat}
                    onChange={() =>
                      setOperations({ ...operations, fiat: !operations.fiat })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="operation-item">
                <span>Transacciones con Criptomonedas</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={operations.crypto}
                    onChange={() =>
                      setOperations({
                        ...operations,
                        crypto: !operations.crypto,
                      })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="operation-item">
                <span>Cambiar configuración de la App</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={operations.app}
                    onChange={() =>
                      setOperations({ ...operations, app: !operations.app })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="antiphishing-section">
            <h3 className="section-title">Código antiphishing</h3>
            <div className="operations-list">
              <div className="operation-item">
                <span>Transacciones FIAT</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={operations.antiFiat}
                    onChange={() =>
                      setOperations({
                        ...operations,
                        antiFiat: !operations.antiFiat,
                      })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="operation-item">
                <span>Transacciones con Criptomonedas</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={operations.antiCrypto}
                    onChange={() =>
                      setOperations({
                        ...operations,
                        antiCrypto: !operations.antiCrypto,
                      })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="operation-item">
                <span>Cambiar configuración de la App</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={operations.antiApp}
                    onChange={() =>
                      setOperations({
                        ...operations,
                        antiApp: !operations.antiApp,
                      })
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="security-column">
          <div className="password-section">
            <h3 className="section-title">Cambiar contraseña</h3>
            <div className="password-inputs">
              <input
                type="password"
                placeholder="escribe la contraseña actual"
                className="security-input"
              />
              <input
                type="password"
                placeholder="escribe la nueva contraseña"
                className="security-input"
              />
              <input
                type="password"
                placeholder="escribe de nuevo la nueva contraseña"
                className="security-input"
              />
            </div>
          </div>
        </div>
      </div>

      <button className="profile-card-save-button">
        {" "}
        <img src={saveIcon} alt="" /> Guardar
      </button>
    </div>
  );
};
