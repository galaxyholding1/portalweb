import "./ProfileCard.css";
import { Card } from "../Card/Card";
import { ProfileData } from "./ProfileData";

import saveIcon from "../../../assets/images/SVG/save.svg";

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
          <ProfileData label="Nombre" className="grid-span-2">Nombre de usuario</ProfileData>
          <ProfileData label="Fecha de nacimiento">00/00/0000</ProfileData>
          <ProfileData label="Dirección">Dirección, 123, ABC</ProfileData>
          <ProfileData label="Localidad">Madrid</ProfileData>
          <ProfileData label="Número de teléfono">000 00 00 00</ProfileData>
          <ProfileData label="País">España</ProfileData>
        </div>
        <div className="profile-card-document">
          <select>
            <option value="">Identificación</option>
          </select>
          <ProfileData label="No. de Identificación">000 00 00 00</ProfileData>
        </div>
        <button className="profile-card-save-button"> <img src={saveIcon} alt="" /> Guardar</button>
      </div>
    </Card>
  );
};
