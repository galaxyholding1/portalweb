import React from 'react'

export const Home = () => {
  return (
 
    
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Barra superior */}
        <table width="100%" cellPadding="10" style={{ backgroundColor: "#D29BFD" }}>
          <tbody>
            <tr>
              <td align="left">
                Personas | Negocios | Corporativos | Negocios especializados | Tu360 | Blog
              </td>
              <td align="right">
                Transparencia | Consumidor
              </td>
            </tr>
          </tbody>
        </table>
  
        {/* Header principal */}
        <table width="100%" cellPadding="15">
          <tbody>
            <tr>
              <td><strong>Galaxy Pay</strong></td>
              <td align="center">
                Inicio | Necesidades | Productos y Servicios | Educación Financiera | <button><strong>Trámites digitales</strong></button>
              </td>
              <td align="right">
                Sucursal Virtual Personas | <button><strong>Entrar</strong></button>
              </td>
            </tr>
          </tbody>
        </table>
  
        
      </div>
    );
  };
