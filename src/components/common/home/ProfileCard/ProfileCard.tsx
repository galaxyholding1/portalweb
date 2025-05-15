import "./ProfileCard.css";
import { Card } from "../Card/Card";

import saveIcon from "../../../../assets/icons/save.svg";
import { ProfileData } from "./ProfileData";

export const ProfileCard = () => {
  return (
    <Card title="Mi perfil">
      <div className="profile-card-container">
        <div className="profile-card-grid">
          <div className="profile-card-header">
            <div className="profile-card-header-picture">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            </div>
            <div className="profile-card-header-text">
              <p>Mi foto de perfil</p>
              <a className="update-link">Cambiar</a>
            </div>
          </div>
          <ProfileData label="Nombre"> Nombre de usuario </ProfileData>
          <select>
            <option value="">Identificación</option>
          </select>
          <ProfileData label="No. de Identificación">000 00 00 00</ProfileData>
          <ProfileData label="Fecha de nacimiento">00/00/0000</ProfileData>
          <ProfileData label="País">España</ProfileData>
          <ProfileData label="Número de teléfono">000 00 00 00</ProfileData>
          <div className="grid-helper"></div> {/* Lo dejo aqui para que sea igual al diseño. */}
          <ProfileData label="Dirección">Dirección, 123, ABC</ProfileData>
          <ProfileData label="Localidad">Madrid</ProfileData>
        </div>
        <button className="profile-card-save-button button-portal">
          {" "}
          <img src={saveIcon} alt="" /> Guardar
        </button>
      </div>
    </Card>
  );
};
