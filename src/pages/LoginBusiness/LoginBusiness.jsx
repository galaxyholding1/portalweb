import React, { useState, useRef, useEffect } from "react";
import "./LoginBusiness.css";
import AdSlider from "../../components/AdSlider";

const VirtualKeyboard = ({ onKeyPress, targetInputRef }) => {
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "←"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "↓"],
    ["Z", "X", "C", "V", "B", "N", "M", "Bl. May", " ", ""],
    ["/", "-", "'", "Ü", "_", "."],
  ];

  const handleKeyClick = (key) => {
    if (key === "←") {
      onKeyPress("Backspace"); // Simulate backspace
    } else if (key === "Bl. May") {
      //  Implement Caps Lock/Shift functionality if needed.
      onKeyPress("CapsLock");
    } else if (key === " ") {
      onKeyPress(" "); // Simulate space
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div className="virtual-keyboard-container">
      <table border="0" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td width="405" heigth="10" valign="top">
              <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                  <tr>
                    <td height="0"></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td width="0"></td>
                    <td>
                      <table
                        border="0"
                        align="left"
                        valign="top"
                        cellSpacing="0"
                        cellPadding="1"
                      >
                        <tbody>
                          {keyboardLayout.map((row, rowIndex) => (
                            <tr key={rowIndex} align="left">
                              {row.map((key, keyIndex) => {
                                let width = "23";
                                let height = "22";
                                let id = `mykey${key}`;
                                let displayKey = key;

                                if (key === "←") {
                                  displayKey = "←";
                                  width = "47";
                                } else if (key === "Bl. May") {
                                  displayKey = "Mayús";
                                  width = "47";
                                } else if (key === " ") {
                                  width = "86";
                                }

                                return (
                                  <td
                                    key={keyIndex}
                                    width={width}
                                    height={height}
                                    background="/logo.gif"
                                    align="center"
                                    style={{
                                      cursor: "default",
                                      paddingLeft: "9px",
                                      paddingRight: "8px",
                                      fontSize: "12",
                                      backgroundRepeat: "no-repeat",
                                      fontWeight: "bold",
                                      color: "#616161",
                                    }}
                                    onClick={() => handleKeyClick(key)}
                                  >
                                    <div
                                      border="0"
                                      id={id}
                                      valign="center"
                                      align="center"
                                      onFocus={() =>
                                        targetInputRef?.current?.blur()
                                      }
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        color: "rgb(97, 97, 97)",
                                      }}
                                    >
                                      {displayKey}
                                    </div>
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <table
                        className="bg_button"
                        id="_CONSTRAST"
                        valign="top"
                        border="0"
                        cellSpacing="0"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <map
                                name="numericKeyboardMap"
                                id="numericKeyboardMap"
                              >
                                <area
                                  shape="circle"
                                  className="cursorContrast"
                                  coords="16,21,11"
                                  onMouseOver={() =>
                                    console.log("setHandCursor")
                                  }
                                  onClick={() =>
                                    console.log("changeContrastLevel(1)")
                                  }
                                  onMouseOut={() =>
                                    console.log("setDefaultCursor")
                                  }
                                  href="#"
                                />
                                <area
                                  shape="circle"
                                  coords="45,21,11"
                                  onMouseOver={() =>
                                    console.log("setHandCursor")
                                  }
                                  onClick={() =>
                                    console.log("changeContrastLevel(2)")
                                  }
                                  onMouseOut={() =>
                                    console.log("setDefaultCursor")
                                  }
                                  href="#"
                                />
                                <area
                                  shape="circle"
                                  coords="74,21,11"
                                  onMouseOver={() =>
                                    console.log("setHandCursor")
                                  }
                                  onClick={() =>
                                    console.log("changeContrastLevel(3)")
                                  }
                                  onMouseOut={() =>
                                    console.log("setDefaultCursor")
                                  }
                                  href="#"
                                />
                              </map>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td height="0" width="0"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const NumericKeyboard = ({ onKeyPress, targetInputRef }) => {
  const numericKeyboardLayout = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "Limpiar"],
  ];

  const handleNumberClick = (key) => {
    if (key === "Limpiar") {
      onKeyPress("Clear");
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div className="numeric-keyboard-container">
      <table border="0" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td width="140" heigth="10" valign="top">
              <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                  <tr>
                    <td height="0"></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td width="0"></td>
                    <td>
                      <table
                        border="0"
                        align="left"
                        valign="top"
                        cellSpacing="0"
                        cellPadding="1"
                      >
                        <tbody>
                          {numericKeyboardLayout.map((row, rowIndex) => (
                            <tr key={rowIndex} align="left">
                              {row.map((key, keyIndex) => {
                                let width = "35";
                                let height = "22";
                                let id = `numkey${key}`;
                                let displayKey = key;
                                if (key === "Limpiar") {
                                  width = "72";
                                }
                                return (
                                  <td
                                    key={keyIndex}
                                    width={width}
                                    height={height}
                                    background="/logo.gif"
                                    align="center"
                                    style={{
                                      cursor: "default",
                                      paddingLeft: "9px",
                                      paddingRight: "8px",
                                      fontSize: "12",
                                      backgroundRepeat: "no-repeat",
                                      fontWeight: "bold",
                                      color: "#616161",
                                    }}
                                    onClick={() => handleNumberClick(key)}
                                  >
                                    <div
                                      border="0"
                                      id={id}
                                      valign="center"
                                      align="center"
                                      onFocus={() =>
                                        targetInputRef?.current?.blur()
                                      }
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        color: "rgb(97, 97, 97)",
                                      }}
                                    >
                                      {displayKey}
                                    </div>
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td height="0" width="0"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const LoginBusiness = () => {
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef(null);
  const nitInputRef = useRef(null);
  const userIdInputRef = useRef(null);

  const handleAccept = (e) => {
    e.preventDefault(); // Prevenir envío del formulario por defecto

    const nit = nitInputRef.current?.value?.trim();
    const userId = userIdInputRef.current?.value?.trim();
    const pwd = password.trim();

    if (!nit || !userId || !pwd) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (!/^[a-zA-Z0-9]{5,15}$/.test(nit)) {
      alert(
        "El NIT debe contener solo letras y/o números y tener entre 5 y 15 caracteres."
      );
      return;
    }

    if (!/^\d{5,15}$/.test(userId)) {
      alert(
        "La identificación debe contener solo números y tener entre 5 y 15 dígitos."
      );
      return;
    }

    if (pwd.length < 4 || pwd.length > 8) {
      alert("La clave debe tener entre 4 y 8 caracteres.");
      return;
    }

    // Si todo está bien, puedes enviar el formulario o continuar el proceso
    console.log("Formulario válido");
    alert("Formulario válido");
  };

  const handleVirtualKeyboardKeyPress = (key) => {
    if (key === "Backspace") {
      setPassword((prev) => prev.slice(0, -1));
    } else if (key === "Clear") {
      setPassword("");
    } else if (key === "CapsLock") {
      // Handle CapsLock
    } else {
      setPassword((prev) => prev + key);
    }
  };

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.value = password;
    }
  }, [password]);

  return (
    <div className="login-business-container">
      <header className="header"></header>
      <main className="main-content">
        <section className="login-section">
          <h2 className="login-title">Inicio - Sucursal Virtual Empresas</h2>
          <form
            autoComplete="off"
            name="forma"
            id="forma"
            onSubmit={() => console.log("Formulario enviado")}
            action="AuthenticationTxGalaxyapp.login"
            method="POST"
          >
            <div className="input-group">
              <label htmlFor="COMPANYID">
                Por favor digite el NIT de la empresa:
              </label>
              <input
                name="COMPANYID"
                id="COMPANYID"
                size="20"
                maxLength="15"
                onFocus={() => console.log("Campo NIT enfocado")}
                type="text"
                style={{
                  background: "white",
                  border: "thin solid rgb(204, 204, 204)",
                }}
                ref={nitInputRef}
              />
            </div>
            <div className="input-group">
              <label htmlFor="CLIENTID">
                Por favor digite la identificación del Usuario:
              </label>
              <input
                name="CLIENTID"
                id="CLIENTID"
                size="20"
                maxLength="15"
                onFocus={() => console.log("Campo Usuario enfocado")}
                type="text"
                style={{
                  background: "white",
                  border: "thin solid rgb(204, 204, 204)",
                }}
                ref={userIdInputRef}
              />
            </div>

            <div>
              <label htmlFor="USERPASS">Por favor digite su Clave:</label>
              <div className="input-group password-group">
                <input
                  name="USERPASS"
                  id="USERPASS"
                  size="10"
                  maxLength="8"
                  type="password"
                  onFocus={() => console.log("Campo Clave enfocado")}
                  onKeyUp={() => console.log("Clave modificada")}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    background: "white",
                    border: "thin solid rgb(204, 204, 204)",
                  }}
                  ref={passwordInputRef}
                  value={password}
                  readOnly
                />
                <button
                  type="Button"
                  name="Submit"
                  className="login-button"
                  onClick={handleAccept}
                >
                  Aceptar
                </button>
              </div>
            </div>

            <div className="links-group">
              <a
                href="#"
                className="external-link"
                onClick={() =>
                  window.open(
                    "http://localhost:5173/",
                    "SucursalVirtualEmpresas",
                    "width=850,height=600,scrollbars=yes,resizable=yes"
                  )
                }
              >
                ¿Olvidó su clave?
              </a>
              &nbsp; &nbsp;
              <a
                href="#"
                className="external-link"
                onClick={() =>
                  window.open(
                    "http://localhost:5173/login-personas",
                    "SucursalVirtualEmpresas",
                    "width=850,height=600,scrollbars=yes,resizable=yes"
                  )
                }
              >
                ¿No puede conectarse?
              </a>
            </div>
            <div
              className="keyboards-container"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <VirtualKeyboard
                onKeyPress={handleVirtualKeyboardKeyPress}
                targetInputRef={passwordInputRef}
              />
              <NumericKeyboard
                onKeyPress={handleVirtualKeyboardKeyPress}
                targetInputRef={passwordInputRef}
              />
            </div>
          </form>
        </section>
        <section className="promo-section">
          <img
            src="https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/imgPublicidad25042025.png"
            alt="Imagen Promocional"
            className="promo-image"
          />
        </section>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="#" className="footer-link">
            Afiliar Nueva Empresa
          </a>
          <a href="#" className="footer-link">
            Afiliar Nuevo Usuario
          </a>
          <a href="#" className="footer-link">
            Formato de Novedades
          </a>
        </div>
        <div className="shortcut-links">
          {/* deslizador */}

          <div className="p-4">
            <AdSlider /> {/* Velocidad: 10 segundos */}
          </div>
        </div>
        <div className="legal-links">
          <a href="#" className="legal-link">
            Política de Privacidad
          </a>
          <a href="#" className="legal-link">
            Preguntas Frecuentes
          </a>
          <a href="#" className="legal-link">
            Ayuda
          </a>
          <a className="copyright">
            Copyright 202021 galaxyapp. Todos los derechos reservados.
          </a>
        </div>
      </footer>
    </div>
  );
};
