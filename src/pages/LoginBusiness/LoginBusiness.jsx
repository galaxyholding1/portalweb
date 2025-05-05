import React, { useState, useRef, useEffect } from 'react';
import './LoginBusiness.css';

const VirtualKeyboard = ({ onKeyPress, targetInputRef }) => {
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '←'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', '↓'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Bl. May', ' ', ''],
        ['/', '-', "'", 'Ü', '_', '.']
    ];

    const handleKeyClick = (key) => {
        if (key === '←') {
            onKeyPress('Backspace'); // Simulate backspace
        } else if (key === 'Bl. May') {
            //  Implement Caps Lock/Shift functionality if needed.
            onKeyPress('CapsLock');
        }
         else if (key === ' ') {
            onKeyPress(' '); // Simulate space
        }
        else {
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
                                            <table border="0" align="left" valign="top" cellSpacing="0" cellPadding="1">
                                                <tbody>
                                                    {keyboardLayout.map((row, rowIndex) => (
                                                        <tr key={rowIndex} align="left">
                                                            {row.map((key, keyIndex) => {
                                                                let width = "23";
                                                                let height = "22";
                                                                let id = `mykey${key}`;
                                                                let displayKey = key;

                                                                if (key === '←') {
                                                                    displayKey = '←';
                                                                    width = "47";
                                                                } else if (key === 'Bl. May') {
                                                                    displayKey = 'Mayús';
                                                                    width = "47";
                                                                } else if (key === ' ') {
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
                                                                            cursor: 'default',
                                                                            paddingLeft: '9px',
                                                                            paddingRight: '8px',
                                                                            fontSize: '12',
                                                                            backgroundRepeat: 'no-repeat',
                                                                            fontWeight: 'bold',
                                                                            color: '#616161',
                                                                        }}
                                                                        onMouseOver={() => console.log('cambiar a teclado estrella')}
                                                                        onMouseOut={() => console.log('cambiar a teclado original')}
                                                                        onClick={() => handleKeyClick(key)}
                                                                    >
                                                                        <div
                                                                            border="0"
                                                                            id={id}
                                                                            valign="center"
                                                                            align="center"
                                                                            onFocus={() => targetInputRef?.current?.blur()}

                                                                            style={{ fontSize: '12px', fontWeight: 'bold', color: 'rgb(97, 97, 97)' }}
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
                                            <table className="bg_button" id="_CONSTRAST" valign="top" border="0" cellSpacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                          
                                                            <map name="numericKeyboardMap" id="numericKeyboardMap">
                                                                <area shape="circle"
                                                                    className="cursorContrast"
                                                                    coords="16,21,11"

                                                                    onMouseOver={() => console.log('setHandCursor')}

                                                                    onClick={() => console.log('changeContrastLevel(1)')}

                                                                    onMouseOut={() => console.log('setDefaultCursor')}

                                                                    href="#"
                                                                />
                                                                <area shape="circle"
                                                                    coords="45,21,11"

                                                                    onMouseOver={() => console.log('setHandCursor')}

                                                                    onClick={() => console.log('changeContrastLevel(2)')}

                                                                    onMouseOut={() => console.log('setDefaultCursor')}

                                                                    href="#"
                                                                />
                                                                <area shape="circle"
                                                                    coords="74,21,11"

                                                                    onMouseOver={() => console.log('setHandCursor')}

                                                                    onClick={() => console.log('changeContrastLevel(3)')}

                                                                    onMouseOut={() => console.log('setDefaultCursor')}

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
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0', 'Limpiar'],
    ];

    const handleNumberClick = (key) => {
        if (key === 'Limpiar') {
            onKeyPress('Clear');
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
                                            <table border="0" align="left" valign="top" cellSpacing="0" cellPadding="1">
                                                <tbody>
                                                    {numericKeyboardLayout.map((row, rowIndex) => (
                                                        <tr key={rowIndex} align="left">
                                                            {row.map((key, keyIndex) => {
                                                                 let width = "35";
                                                                let height = "22";
                                                                let id = `numkey${key}`;
                                                                  let displayKey = key;
                                                                 if(key === 'Limpiar'){
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
                                                                            cursor: 'default',
                                                                            paddingLeft: '9px',
                                                                            paddingRight: '8px',
                                                                            fontSize: '12',
                                                                            backgroundRepeat: 'no-repeat',
                                                                            fontWeight: 'bold',
                                                                            color: '#616161',
                                                                        }}
                                                                        onMouseOver={() => console.log('cambiar a teclado estrella')}
                                                                        onMouseOut={() => console.log('cambiar a teclado original')}
                                                                        onClick={() => handleNumberClick(key)}
                                                                    >
                                                                        <div
                                                                            border="0"
                                                                            id={id}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           valign="center"
                                                                            align="center"
                                                                            onFocus={() => targetInputRef?.current?.blur()}

                                                                            style={{ fontSize: '12px', fontWeight: 'bold', color: 'rgb(97, 97, 97)' }}
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
    )
}

export const LoginBusiness = () => {
    const [password, setPassword] = useState('');
    const passwordInputRef = useRef(null);

      const handleVirtualKeyboardKeyPress = (key) => {
        if (key === 'Backspace') {
            setPassword(prev => prev.slice(0, -1));
        } else if (key === 'Clear') {
            setPassword('');
        } else if (key === 'CapsLock') {
            // Handle CapsLock
        }
         else {
            setPassword(prev => prev + key);
        }

    };

    useEffect(() => {
        if (passwordInputRef.current) {
            passwordInputRef.current.value = password;
        }
    }, [password]);


    return (
        <div className="login-business-container">
            <header className="header">
                <img
                    name="logo_sve"
                    src="/logo_sve.gif"
                    width="150"
                    height="49"
                    border="0"
                    id="logo_sve"
                    alt=""
                    align="left"
                />
            </header>
            <main className="main-content">
                <section className="login-section">
                    <h2 className="login-title">Inicio - Sucursal Virtual Empresas</h2>
                    <form
                        autoComplete="off"
                        name="forma"
                        id="forma"
                        onSubmit={() => console.log('Formulario enviado')}
                        action="AuthenticationTxGalaxyapp.login"
                        method="POST"
                    >
                       
                        <div className="input-group">
                            <label htmlFor="COMPANYID">Por favor digite el NIT de la empresa:</label>
                            <input
                                name="COMPANYID"
                                id="COMPANYID"
                                size="20"
                                maxLength="15"
                                onFocus={() => console.log('Campo NIT enfocado')}
                                onKeyDown={(e) => /[0-9]/.test(e.key) || e.preventDefault()}
                                onClick={(e) => /[0-9]/.test(e.key) || e.preventDefault()}
                                type="text"
                                style={{ background: 'white', border: 'thin solid rgb(204, 204, 204)' }}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="CLIENTID">Por favor digite la identificación del Usuario:</label>
                            <input
                                name="CLIENTID"
                                id="CLIENTID"
                                size="20"
                                maxLength="15"
                                onFocus={() => console.log('Campo Usuario enfocado')}
                                onKeyDown={(e) => /[0-9]/.test(e.key) || e.preventDefault()}
                                onClick={(e) => /[0-9]/.test(e.key) || e.preventDefault()}
                                type="password"
                                style={{ background: 'white', border: 'thin solid rgb(204, 204, 204)' }}
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
                                onFocus={() => console.log('Campo Clave enfocado')}
                                onKeyUp={() => console.log('Clave modificada')}
                                onKeyDown={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                                onSelectStart={(e) => e.preventDefault()}
                                style={{ background: 'white', border: 'thin solid rgb(204, 204, 204)' }}
                                ref={passwordInputRef}
                                value={password}
                                readOnly
                            />
                            <input type="submit" name="Submit" value="Aceptar" className="login-button" />
                        </div>
                        </div>
                        

                        <div className="links-group">
                            <a
                                href="#"
                                className="external-link"
                                onClick={() =>
                                    window.open(
                                        
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
                                       
                                    )
                                }
                            >
                                ¿No puede conectarse?
                            </a>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <VirtualKeyboard onKeyPress={handleVirtualKeyboardKeyPress} targetInputRef={passwordInputRef} />
                            <NumericKeyboard onKeyPress={handleVirtualKeyboardKeyPress} targetInputRef={passwordInputRef}/>
                        </div>
                    </form>
                </section>
                <section className="promo-section">
                    
                    <img src="https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/imgPublicidad25042025.png" alt="Imagen Promocional" className="promo-image" />
                </section>
            </main>
            <footer className="footer">
                <div className="footer-links">
                    <a href="#" className="footer-link">Afiliar Nueva Empresa</a>
                    <a href="#" className="footer-link">Afiliar Nuevo Usuario</a>
                    <a href="#" className="footer-link">Formato de Novedades</a>
                </div>
                <div className="shortcut-links">
                    <a href="#" className="shortcut-item"><img src="https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_1.jpg" alt="Aprende SVE" /></a>
                    <a href="#" className="shortcut-item"><img src="https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_2.jpg" alt="Aprende Seguridad" /></a>
                    <a href="#" className="shortcut-item"><img src="https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_3.jpg" alt="Conversor PAB" /></a>
                    <a href="#" className="shortcut-item"><img src="https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_2_1.jpg" alt="Conversor SAP" /> </a>
                </div>
                <div className="legal-links">
                    <a href="#" className="legal-link">Política de Privacidad</a>
                    <a href="#" className="legal-link">Preguntas Frecuentes</a>
                    <a href="#" className="legal-link">Ayuda</a>
                    <p className="copyright">Copyright 202021 galaxyapp. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};
