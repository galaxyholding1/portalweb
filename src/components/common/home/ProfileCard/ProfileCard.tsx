import "./ProfileCard.css";
import { Card } from "../Card/Card";
import { ProfileData } from "./ProfileData";
import { SaveButton } from "../../ui/Button/SaveButton";

export const ProfileCard = () => {
  return (
    <Card title="Mi perfil">
      <div className="profile-card-container">
        <div className="profile-card-grid">
          <div className="profile-card-header">
            <div className="profile-card-header-picture">
              {/* Profile picture displayed from a random user generator. */}
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            </div>
            <div className="profile-card-header-text">
              <p>Mi foto de perfil</p> {/* "My profile picture" */}
              <a className="update-link">Cambiar</a> {/* "Change" link */}
            </div>
          </div>
          {/* User's name. */}
          <ProfileData label="Nombre"> Nombre de usuario </ProfileData>
          {/* Dropdown for identification type (placeholder). */}
          <select>
            <option value="">Identificación</option> {/* "Identification" */}
          </select>
          {/* User's identification number. */}
          <ProfileData label="No. de Identificación">000 00 00 00</ProfileData>
          {/* User's birth date. */}
          <ProfileData label="Fecha de nacimiento">00/00/0000</ProfileData>
          {/* User's country. */}
          <ProfileData label="País">España</ProfileData>
          {/* User's phone number. */}
          <ProfileData label="Número de teléfono">000 00 00 00</ProfileData>
          <div className="grid-helper"></div> {/* Left here to match the design. */}
          {/* User's address. */}
          <ProfileData label="Dirección">Dirección, 123, ABC</ProfileData>
          {/* User's city/locality. */}
          <ProfileData label="Localidad">Madrid</ProfileData>
        </div>
        {/* Save button for profile changes. */}
        <SaveButton/>
      </div>
    </Card>
  );
};