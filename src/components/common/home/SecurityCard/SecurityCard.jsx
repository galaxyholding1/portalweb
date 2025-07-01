import { useState } from "react";
import "./SecurityCard.css";
import { PasswordInput } from "../../ui/Input/PasswordInput";
import { Card } from "../Card/Card";
import { Icon } from "../../ui/Icon/Icon";
import { useForm } from "../../../../hooks/useForm";
import { RadioInput } from "../../ui/Input/RadioInput/RadioInput";
import { LabelAreaSwitchs } from "../../ui/Input/LabelAreaSwitchs/LabelAreaSwitchs";
import { SaveButton } from "../../ui/Button/SaveButton";

const initialForm = {
  oldPassword: "",
  newPasswordConfirmation: "",
  newPassword: "",
};

const authOptions = [
  { label: "SMS", value: "sms" },
  { label: "Google Authenticator", value: "authenticator" },
  { label: "Fido U2F (llave física)", value: "fido" },
];

const operationOptions = [
  { label: "Transacciones FIAT", key: "fiat" },
  { label: "Transacciones con Criptomonedas", key: "crypto" },
  { label: "Cambiar configuración de la App", key: "app" },
];

const antiPhishingOptions = [
  { label: "Transacciones FIAT", key: "antiFiat" },
  { label: "Transacciones con Criptomonedas", key: "antiCrypto" },
  { label: "Cambiar configuración de la App", key: "antiApp" },
];

export const SecurityCard = () => {
  // Manages the state for password change form inputs.
  const {
    formValues: passwordForm,
    handleInputChange: handlePasswordInputChange,
  } = useForm(initialForm);

  // State for the selected two-factor authentication method.
  const [authMethod, setAuthMethod] = useState("sms");
  // State for toggling operations where 2FA or anti-phishing codes are applied.
  const [operations, setOperations] = useState({
    fiat: false,
    crypto: true,
    app: false,
    antiFiat: false,
    antiCrypto: false,
    antiApp: false,
  });

  return (
    <Card title="Seguridad" icon={<Icon name="file_document" />}>
      <div className="security-grid">
        {/* Section for two-factor authentication settings. */}
        <div className="auth-section">
          <h3 className="main-section-title">Autentificación de doble factor</h3>
          {/* Radio button group for selecting 2FA method. */}
          <RadioInput
            options={authOptions}
            value={authMethod}
            setValue={setAuthMethod}
          />
        </div>

        {/* Section for operations where two-factor authentication can be used. */}
        <div className="operations-section">
          <h3 className="section-title">
            Operaciones en las que puedo utilizar la autentificación de doble
            factor
          </h3>
          {/* Switch components for enabling/disabling 2FA on specific operations. */}
          <LabelAreaSwitchs
            optionValues={operations}
            setOptionValues={setOperations}
            options={operationOptions}
          />
        </div>

        {/* Section for changing the user's password. */}
        <div className="password-section">
          <h3 className="section-title">Cambiar contraseña</h3>
          <div className="password-inputs">
            {/* Input for the old password. */}
            <PasswordInput
              className='password-input-card-security'
              handleInputChange={handlePasswordInputChange}
              value={passwordForm.oldPassword}
              name={"oldPassword"}
              placeholder={"Escribe la contraseña actual"}
            />
            {/* Input for the new password. */}
            <PasswordInput
              className='password-input-card-security'
              handleInputChange={handlePasswordInputChange}
              value={passwordForm.newPasswordConfirmation}
              name={"newPasswordConfirmation"}
              placeholder={"Escribe la nueva contraseña"}
            />
            {/* Input for confirming the new password. */}
            <PasswordInput
              className='password-input-card-security'
              handleInputChange={handlePasswordInputChange}
              value={passwordForm.newPassword}
              name={"newPassword"}
              placeholder={"Escribe de nuevo la nueva contraseña"}
            />
          </div>
        </div>

        {/* Section for anti-phishing code settings. */}
        <div className="antiphishing-section">
          <h3 className="section-title">Código antiphishing</h3>
          {/* Switch components for enabling/disabling anti-phishing for specific operations. */}
          <LabelAreaSwitchs
            optionValues={antiPhishingOptions}
            setOptionValues={setOperations} 
            options={operationOptions} 
          />
        </div>

        {/* Button to save all security changes. */}
        <SaveButton/>
      </div>
    </Card>
  );
};