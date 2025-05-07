import React from "react";
import AdSlider from "../../components/AdSlider";
import "../../pages/Home/Home.css";
import galaxyicon from "../../assets/images/SVG/LOGO-GALAXY-PAY_hor-01.svg";
import face from "../../assets/images/SVG/facebookicon.svg";
import instagram from "../../assets/images/SVG/instagramicon.svg";
import xicon from "../../assets/images/SVG/xicon.svg";

const accesos = [
  { icon: "🧾", label: "Trámites digitales" },
  { icon: "💳", label: "Negociar deuda" },
  { icon: "📲", label: "Pagos" },
  { icon: "❓", label: "Centro de Ayuda" },
  { icon: "📄", label: "Certificados bancarios" },
  { icon: "🕐", label: "Solicita tu turno" },
];

const servicios = [
  {
    id: 1,
    color: "#f472b6",
    titulo: "Servicio 01",
    texto: "Protege tu casa y familia con Prosegur Alarms.",
  },
  {
    id: 2,
    color: "#818cf8",
    titulo: "Servicio 02",
    texto: "Conoce los beneficios exclusivos para ti.",
  },
  {
    id: 3,
    color: "#fbbf24",
    titulo: "Servicio 03",
    texto: "Descubre cómo ahorrar en tus facturas mensuales.",
  },
];

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
          <img src={face} alt="Logo facebook" />
          <img src={instagram} alt="Logo instagram" />
          <img src={xicon} alt="Logo X" />
        </div>
      </div>

      {/* Header principal */}
      <div className="header-principal">
        <img src={galaxyicon} alt="Logo principal" style={{ width: "200px" }} />

        <div className="centro">
          <a href="#">Inicio</a>
          <a href="#">Necesidades</a>
          <a href="#">Productos y Servicios</a>
          <a href="#">Educación Financiera</a>
        </div>
        <div className="derecha">
          <button className="negocios-especializados">
            Negocios especializados
          </button>
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
            <p>
              Desde la tienda de aplicaciones de tu celular e inscribe tu Clave
              Dinámica
            </p>
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
          {accesos.map((item) => (
            <div className="acceso-item" key={item.label}>
              <div className="icon">{item.icon}</div>
              <div>{item.label}</div>
            </div>
          ))}
        </section>

        {/* Servicios */}
        <section className="servicios">
          {servicios.map((serv) => (
            <div
              className="servicio-card"
              key={serv.id}
              style={{ backgroundColor: serv.color }}
            >
              <h4>{serv.titulo}</h4>
              <p>{serv.texto}</p>
              <button className="btn-blanco">Más información</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
