import React from "react";
import "./SecurityCard.css";

export const SecurityCardLeft = () => {
  return (
    <div className="security-container">
      <div className="security-header">
        <h2 className="security-title">Mi perfil</h2>
      </div>

      <div className="profile-content">
        {/* Primera columna - Foto */}
        <div className="profile-column photo-column">
          <div className="photo-container">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Mi foto de perfil"
              className="profile-photo"
            />
            <div className="photo-info">
              <span className="photo-label">Mi foto de perfil</span>
              <button className="change-photo-btn">Cambiar</button>
            </div>
          </div>

          <div className="info-group">
            <label>Fecha de nacimiento</label>
            <div className="info-value orange-text">00/00/0000</div>
          </div>

          <div className="info-group">
            <label>Número de teléfono</label>
            <div className="info-value orange-text">000 0000 0000</div>
          </div>
        </div>

        {/* Segunda columna */}
        <div className="profile-column">
          <div className="info-group">
            <label>Nombre</label>
            <div className="info-value orange-text">Nombre del usuario</div>
          </div>

          <div className="info-group">
            <label>Dirección</label>
            <div className="info-value orange-text">Dirección</div>
          </div>

          <div className="info-group">
            <label>País</label>
            <div className="info-value orange-text">España</div>
          </div>  
        </div>

        {/* Tercera columna */}
        <div className="profile-column">
          <div className="info-group">
            <label>Localidad</label>
            <div className="info-value orange-text">Madrid</div>
          </div>
        </div>
      </div>

      <div>
        <div className="profile-footer-grid">
          <div className="identification-section">
            <select className="security-input identification-select">
              <option value="">Identificación</option>
              <option value="dni">DNI</option>
              <option value="nie">NIE</option>
              <option value="passport">Pasaporte</option>
            </select>
            <div className="identification-number">
              <div className="info-group">
                <label>Número de Identificación</label>
                <div className="info-value orange-text">000 00 00 00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divButtonpading">
          <button className="save-button">
            <svg
              className="save-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM12 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-9h8v-2H8v2z" />
            </svg>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
