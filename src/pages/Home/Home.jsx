import React from "react";
import AdSlider from "../../components/AdSlider";
import "../../pages/Home/Home.css";
import imagendeprueba from "../../assets/images/SVG/imagendeprueba.jpg";
import tramitesIcon from '../../assets/images/iconos-acceso-rapido/tramites-digitales.svg';
import negociarIcon from '../../assets/images/iconos-acceso-rapido/negociar-deuda.svg';
import pagosIcon from '../../assets/images/iconos-acceso-rapido/pago.svg';
import ayudaIcon from '../../assets/images/iconos-acceso-rapido/centro-de-ayuda.svg';
import certificadosIcon from '../../assets/images/iconos-acceso-rapido/certificados-bancarios.svg';
import turnoIcon from '../../assets/images/iconos-acceso-rapido/solicita-turno.svg';


import { image } from "framer-motion/client";

const accesos = [
  { icon: tramitesIcon, label: "Trámites digitales" },
  { icon: negociarIcon, label: "Negociar deuda" },
  { icon: pagosIcon, label: "Pagos" },
  { icon: ayudaIcon, label: "Centro de Ayuda" },
  { icon: certificadosIcon, label: "Certificados bancarios" },
  { icon: turnoIcon, label: "Solicita tu turno" },
];

const servicios = [
  {
    id: 1,
    color: "#f472b6",
    titulo: "Servicio 01",
    texto: "Protege tu casa y familia con Prosegur Alarms.",
    imagen: imagendeprueba,
  },
  {
    id: 2,
    color: "#818cf8",
    titulo: "Servicio 02",
    texto: "Conoce los beneficios exclusivos para ti.",
    imagen: imagendeprueba,
  },
  {
    id: 3,
    color: "#fbbf24",
    titulo: "Servicio 03",
    texto: "Descubre cómo ahorrar en tus facturas mensuales.",
    imagen: imagendeprueba,
  },
];

export const Home = () => {
  return (
    <div className="allpage">
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
              <img src={item.icon} alt={item.label} className="icon-img" />
              <div>{item.label}</div>
            </div>
          ))}
        </section>

        {/* Servicios */}
        <section className="servicios">
          {servicios.map((serv) => (
            <div className="servicio-card" key={serv.id}>
              <img
                src={serv.imagen}
                alt={serv.titulo}
                className="imagen-servicio"
              />
              <div
                className="servicio-info"
                style={{ backgroundColor: serv.color }}
              >
                <h4>{serv.titulo}</h4>
                <p>{serv.texto}</p>
                <button className="btn-blanco">Más información</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
