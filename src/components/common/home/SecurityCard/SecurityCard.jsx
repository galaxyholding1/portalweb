import { useState } from "react";
import "./SecurityCard.css";
import { PasswordInput } from "../../ui/Input/PasswordInput";
import { Card } from "../Card/Card";
import { Icon } from "../../ui/Icon/Icon";
import { useForm } from "../../../../hooks/useForm";
import { RadioInput } from "../../ui/Input/RadioInput/RadioInput";
import { LabelAreaSwitchs } from "../../ui/Input/LabelAreaSwitchs/LabelAreaSwitchs";

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
  const {
    formValues: passwordForm,
    handleInputChange: handlePasswordInputChange,
  } = useForm(initialForm);

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
    <Card title="Seguridad" icon={<Icon name="file_document" />}>
      <div className="security-grid">
        <div className="auth-section">
          <h3 className="main-section-title">Autentificación de doble factor</h3>
          <RadioInput
            options={authOptions}
            value={authMethod}
            setValue={setAuthMethod}
          />
        </div>

        <div className="operations-section">
          <h3 className="section-title">
            Operaciones en las que puedo utilizar la autentificación de doble
            factor
          </h3>
          <LabelAreaSwitchs
            optionValues={operations}
            setOptionValues={setOperations}
            options={operationOptions}
          />
        </div>

        <div className="password-section">
          <h3 className="section-title">Cambiar contraseña</h3>
          <div className="password-inputs">
            <PasswordInput
              className='password-input-card-security'
              handleInputChange={handlePasswordInputChange}
              value={passwordForm.oldPassword}
              name={"oldPassword"}
              placeholder={"Escribe la contraseña actual"}
            />
            <PasswordInput
              className='password-input-card-security'
              handleInputChange={handlePasswordInputChange}
              value={passwordForm.newPasswordConfirmation}
              name={"newPasswordConfirmation"}
              placeholder={"Escribe la nueva contraseña"}
            />
            <PasswordInput
              className='password-input-card-security'
              handleInputChange={handlePasswordInputChange}
              value={passwordForm.newPassword}
              name={"newPassword"}
              placeholder={"Escribe de nuevo la nueva contraseña"}
            />
          </div>
        </div>

        <div className="antiphishing-section">
          <h3 className="section-title">Código antiphishing</h3>
          <LabelAreaSwitchs
            optionValues={antiPhishingOptions}
            setOptionValues={setOperations}
            options={operationOptions}
          />
        </div>
      </div>
    </Card>
  );
};
