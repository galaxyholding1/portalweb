import React from 'react'
import  AdSlider  from '../../components/AdSlider';

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
        
            <div className="p-4">
              <h1 className="text-xl mb-4">Deslizable de Publicidad</h1>
              <AdSlider speed={10000} /> {/* Velocidad: 10 segundos */}
              <marquee scrollamount="5">...</marquee>
            </div>
         
        
        

        

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

        {/* Accesos rápidos */}
        <table width="100%" cellPadding="15" border="1">
          <tbody>
            <tr align="center">
              <td>Trámites digitales</td>
              <td>Negociar deuda</td>
              <td>Pagos</td>
              <td>Centro de Ayuda</td>
              <td>Certificados bancarios</td>
              <td>Solicita tu turno</td>
            </tr>
          </tbody>
        </table>

        
        
        

 
  {/* Recomendaciones */}
  <h3>Pensando en ti te recomendamos</h3>
        <table width="100%" cellPadding="10" border="1">
          <tbody>
            <tr>
              <td width="33%" valign="top">
              <p>Tu360Inmobiliario</p>
                <strong>Las visitas sorpresa no siempre son de tus amigos</strong>
                <p>Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjetas de crédito Bancolombia.
                *Aplican TyC ​</p>
                <button>Cotizar Kit</button>
                
              </td>
              <td width="33%" valign="top">
              <p>Galaxy App</p>
              <strong>¿Te cortaron la luz?</strong>
              <p>Que no te pase más. Activa el pago automático de tus facturas desde la app Mi Bancolombia.</p>
              <button>Descubre cómo</button>
                
              </td>
              <td width="33%" valign="top">
                <p>Pagos inmediatos</p>
                <strong>1, 2, 3 tu plata llega de inmediato a donde estés</strong>
                <p>Los Pagos Inmediatos facilitan tus transacciones diarias, como pagar a comercios o enviar dinero a amigos y familiares.</p>
                <button>Conoce más aquí</button>
                
              </td>
            </tr>
          </tbody>
        </table>

        <div className="p-8 space-y-12">
      {/* Preguntas frecuentes */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Tarjeta izquierda */}
        <div className="bg-orange-400 text-white p-6 rounded-md">
          <h4 className="text-sm">Háblale ahora</h4>
          <h2 className="text-2xl font-bold mb-4">
            Resuelve tus dudas preguntándole a Tabot.
          </h2>
          <button className="bg-white text-orange-500 px-4 py-2 rounded font-semibold">
            Conoce más
          </button>
        </div>

        
        {/* Preguntas más consultadas */}
        <div>
          <h3 className="font-semibold mb-4">Lo más consultado</h3>
          <ul className="space-y-4 text-sm">
            <li>¿Qué certificados puedo solicitar por la página web?</li>
            <li>¿Cómo pido un Extracto Bancario?</li>
            <li>¿Cómo consulto mi certificado tributario?</li>
            <li>¿Cuáles son los canales para descargar los extractos?</li>
          </ul>
          <a href="#" className="text-blue-600 text-sm mt-4 inline-block">
            Ver todas las preguntas frecuentes
          </a>
        </div>
      </div>

      {/* Porductos 2 */}
      <h3>Conoce más de nuestros productos</h3>
        <table width="100%" cellPadding="10" border="1">
          <tbody>
            <tr>
              <td width="45%" valign="top">
                <p>Créditos</p>
                
              </td>
              <td width="33%" valign="top">
                <strong>App Mi Bancolombia</strong><br />
                ¿Te cortaron la luz?
              </td>
              <td width="33%" valign="top">
                <strong>Pagos inmediatos</strong><br />
                1,2,3 tu plata llega de una.
              </td>
            </tr>
          </tbody>
        </table>

      {/* Productos */}
      <div>
        <h2 className="text-xl font-bold mb-6">Conoce más de nuestros productos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Créditos",
              description: "Financia lo que sueñas, quieres y necesitas.",
            },
            {
              title: "Tarjetas de crédito",
              description: "Paga, compra y gana puntos usando tus tarjetas",
            },
            {
              title: "Seguros",
              description: "Tu seguridad es la de todos, con nuestros seguros",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-md p-4 rounded-md">
              <h4 className="text-sm text-gray-600">{item.title}</h4>
              <h3 className="font-bold text-lg mb-2">{item.description}</h3>
              <button className="border mt-4 px-4 py-2 rounded hover:bg-gray-100">
                SABER MÁS
              </button>
            </div>
          ))}
        </div>
        <a href="#" className="text-blue-600 text-sm mt-4 inline-block">
          Ver todos los productos
        </a>
      </div>
    </div>
 



      </div>
    );
  };
