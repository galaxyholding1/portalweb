import React from "react";
import AdSlider from "../../components/AdSlider";
import '../../pages/Home/Home.css'
import miImagen from'../../assets/images/SVG/LOGO-GALAXY-PAY_hor-01.svg'
import facebook from'../../assets/images/SVG/2023_Facebook_icon.svg.png'


export const Home = () => {
  return (
    <div className="allpage">

      {/* Barra superior */}      
      <div className="banner-superior">
        <div className="izquierda">
            <a href="#">Personas</a>
            <a href="#">Negocios</a>
            <a href="#">Corporativo</a>
            <a href="#">Negocios Especializados</a>
            <img src={facebook} alt="Logo facebook" style={{width: '', height: '100px'}}/>
            </div>        
        </div>

   {/* Header principal */}
   <div className="header-principal">
    <img src={miImagen} alt="Logo principal" style={{width: '200px'}}/>

        <div className="centro">
          <a href="#">Inicio</a>
          <a href="#">Necesidades</a>
          <a href="#">Productos y Servicios</a>
          <a href="#">Educación Financiera</a>
        </div>
        <div className="derecha">
          <button className="negocios-especializados">Negocios especializados</button>
          <button className="entrar">Entrar</button>
        </div>
      </div>

      {/* Deslizador */}
      <section className="p-4">
        <h1 className="text-xl mb-4">Deslizable de Publicidad</h1>
        <AdSlider speed={10000} />
        <marquee scrollamount="5">Contenido en movimiento o aviso...</marquee>
      </section>

      <div className="home-container">
      {/* Hero principal */}
      <section className="hero-principal">
        <div className="hero-texto">
          <h2>Descarga la nueva app Galaxy App</h2>
          <p>Desde la tienda de aplicaciones de tu celular e inscribe tu Clave Dinámica</p>
          <button className="btn-descargar">Descárgala ya</button>
        </div>
        <div className="hero-imagen">
          <div className="info-box">
            <p>Descarga la nueva app Galaxy App. Conoce cómo</p>
            <p>Elige "Tus llaves" en la app Mi Bancolombia.</p>
          </div>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="accesos-rapidos">
        <div>Trámites digitales</div>
        <div>Negociar deuda</div>
        <div>Pagos</div>
        <div>Centro de Ayuda</div>
        <div>Certificados bancarios</div>
        <div>Solicita tu turno</div>
      </section>

      {/* Recomendaciones */}
      <section className="recomendaciones">
        <h3>Pensando en ti te recomendamos</h3>
        <div className="tarjetas-recomendadas">
          <div className="tarjeta">
            <h4>Las visitas sorpresa no siempre son de tus amigos</h4>
            <p>
              Protege tu casa y familia con Prosegur Alarms. Gratis instalación con tarjetas de crédito.
              *Aplican TyC
            </p>
            <button className="btn-negro">Cotizar Kit</button>
          </div>
          <div className="tarjeta">
            <h4>¿Te cortaron la luz?</h4>
            <p>Activa el pago automático de tus facturas desde la Galaxy App.</p>
            <button className="btn-negro">Descubre cómo</button>
          </div>
          <div className="tarjeta">
            <h4>1, 2, 3 tu plata llega de inmediato</h4>
            <p>
              Pagos Inmediatos facilitan transacciones diarias, envíos y pagos a comercios.
            </p>
            <button className="btn-negro">Conoce más</button>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="faq">
        <div className="faq-contacto">
          <h4>Háblale ahora</h4>
          <h2>Resuelve tus dudas con Tabot</h2>
          <button className="btn-claro">Conoce más</button>
        </div>
        <div className="faq-lista">
          <h3>Lo más consultado</h3>
          <ul>
            <li>¿Qué certificados puedo solicitar por la página web?</li>
            <li>¿Cómo pido un Extracto Bancario?</li>
            <li>¿Cómo consulto mi certificado tributario?</li>
            <li>¿Dónde descargo los extractos?</li>
          </ul>
          <a href="#">Ver todas las preguntas frecuentes</a>
        </div>
      </section>

      {/* Productos */}
      <section className="productos">
        <h3>Conoce más de nuestros productos</h3>
        <div className="productos-grid">
          <div className="producto">
            <h4>Créditos</h4>
            <p>Financia lo que sueñas, quieres y necesitas.</p>
            <p>Oportunidades para tus proyectos o ideas que necesitan apoyo financiero.</p>
            <button className="btn-azul">Saber más</button>
          </div>
          <div className="producto">
            <h4>Tarjetas de crédito</h4>
            <p>Paga, compra y gana puntos usando tus tarjetas.</p>
            <p>Con nuestras tarjetas de crédito también ganas.</p>
            <button className="btn-azul">Saber más</button>
          </div>
          <div className="producto">
            <h4>Seguros</h4>
            <p>Tu seguridad es la de todos, con nuestros seguros.</p>
            <p>Protegemos a tu familia y a ti.</p>
            <button className="btn-azul">Saber más</button>
          </div>
        </div>
        <a href="#">Ver todos los productos</a>
      </section>
    </div>
    </div>
  );
};
