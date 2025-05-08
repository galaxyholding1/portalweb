import React from "react";
import AdSlider from "../../components/AdSlider";
import "../../pages/Home/Home.css";
import imagendeprueba from "../../assets/images/SVG/imagendeprueba.jpg";
import tramitesIcon from "../../assets/images/iconos-acceso-rapido/tramites-digitales.svg";
import negociarIcon from "../../assets/images/iconos-acceso-rapido/negociar-deuda.svg";
import pagosIcon from "../../assets/images/iconos-acceso-rapido/pago.svg";
import ayudaIcon from "../../assets/images/iconos-acceso-rapido/centro-de-ayuda.svg";
import certificadosIcon from "../../assets/images/iconos-acceso-rapido/certificados-bancarios.svg";
import turnoIcon from "../../assets/images/iconos-acceso-rapido/solicita-turno.svg";

import { image } from "framer-motion/client";

const accesos = [
  { icon: tramitesIcon, label: "Trámites digitales", path: "/tramites" },
  { icon: negociarIcon, label: "Negociar deuda", path: "/negociar" },
  { icon: pagosIcon, label: "Pagos", path: "/pagos" },
  { icon: ayudaIcon, label: "Centro de Ayuda", path: "/ayuda" },
  {
    icon: certificadosIcon,
    label: "Certificados bancarios",
    path: "/certificados",
  },
  { icon: turnoIcon, label: "Solicita tu turno", path: "/turno" },
];

const servicios = [
  {
    id: 1,
    color: "#f472b6",
    titulo: "Servicio 01",
    texto:
      "Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjeta Bancolombia. *Aplican TyC",
    imagen: imagendeprueba,
    link: "/servicio-01",
  },
  {
    id: 2,
    color: "#6366f1",
    titulo: "Servicio 02",
    texto: "Protege tu casa y familia con Prosegur Alarms. Gratis.",
    imagen: imagendeprueba,
    link: "/servicio-02",
  },
  {
    id: 3,
    color: "#f97316",
    titulo: "Servicio 03",
    texto:
      "Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjetas de crédito.",
    imagen: imagendeprueba,
    link: "/servicio-03",
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
        {/* Accesos rápidos */}
        <section className="accesos-rapidos">
          <div className="contenedor-accesos">
            {accesos.map((item) => (
              <div
                className="acceso-item"
                key={item.label}
                onClick={() => (window.location.href = item.path)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.icon} alt={item.label} className="icon-img" />
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios */}

        <div className="servicios-wrapper">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className={`servicio tarjeta-${servicio.id}`}
              style={{
                backgroundColor: servicio.color,
                flex: servicio.id === 1 ? 3 : 2,
              }}
            >
              <img src={servicio.imagen} alt={servicio.titulo} />
              <div className="contenido">
                <h3>{servicio.titulo}</h3>
                <p>{servicio.texto}</p>
                <a href={servicio.link}>
                  <button>más información</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
