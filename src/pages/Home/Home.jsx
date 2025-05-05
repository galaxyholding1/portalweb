import React from 'react'
import { AdSlider } from './components/AdSlider';

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

         {/* deslizador */}
        <table width="100%" cellPadding="20" border="1"></table> 
                const App = () => {AdSlider
          return (
            <div className="p-4">
              <h1 className="text-xl mb-4">Deslizable de Publicidad</h1>
              <AdSlider speed={10000} /> {/* Velocidad: 10 segundos */}
              <marquee scrollamount="5">...</marquee>
            </div>
          );
        };

        

        {/* Hero principal */}
        <table width="100%" cellPadding="20" border="1">
          <tbody>
            <tr>
              <td width="50%" valign="top">
                <p><strong>Galaxy App</strong></p>
                <h2>Descarga la nueva app Galaxy App</h2>
                <p>Desde la tienda de aplicaciones de tu celular e inscribe tu Clave Dinámica</p>
                <button>Descárgala ya</button>
              </td>
              <td width="50%" valign="top" align="center">
                [Se importa la imagen que necesitemos]
                <br /><br />
                <table border="1" width="90%">
                  <tbody>
                    <tr>
                      <td align= "center">Descarga la nueva app Galaxy App. Conoce cómo</td>
                      <td align="center">Elige "Tus llaves" en la app Mi Bancolombia.</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              
            </tr>
          </tbody>
        </table>     
        
          
      </div>
    );
  };
