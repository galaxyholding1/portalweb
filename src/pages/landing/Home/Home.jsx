import React, { useEffect } from "react";
import "./Home.css";

import Carosuel from "../../../components/landing/Slider/Carousel";
import CarouselBackground from "../../../components/landing/Slider/CarouselBackground";
import CarouselFullscreen from "../../../components/landing/Slider/CarouselFullscreen";
import imagendeprueba from "../../../assets/images/imagendeprueba.jpg";
import { useAuthStore } from "../../../store/auth-store";
import { Icon } from "../../../components/common/ui/Icon/Icon";

const accesos = [
  { icon: "tramites_digitales", label: "Trámites digitales", path: "/tramites" },
  { icon: "negociar_deuda", label: "Negociar deuda", path: "/negociar" },
  { icon: "pago", label: "Pagos", path: "/pagos" },
  { icon: "help", label: "Centro de Ayuda", path: "/ayuda" },
  {
    icon: "certificados_bancarios",
    label: "Certificados bancarios",
    path: "/certificados",
  },
  { icon: "solicita_turno", label: "Solicita tu turno", path: "/turno" },
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
  /*SECTION: simulo logout*/
  const { logout, isAuthenticated } = useAuthStore();
  
  useEffect(() => {
    logout(); 
  }, [logout, isAuthenticated]);
  /*!SECTION*/

  return (
    <>
      {/* Contenido centrado */}
      <div className="allpage">
        {/* Carrusel 1 */}
        <Carosuel />
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
                  <Icon name={item.icon}/>
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Servicios */}
          <div className="servicios-wrapper">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className={`servicio tarjeta-${servicio.id}`}
                style={{
                  backgroundColor: servicio.color,
                  flex: servicio.id === 1 ? 2 : 1,
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

          {/* Sliders adicionales */}
          <div className="full-width-section">
            <CarouselFullscreen />
          </div>

          <div className="full-width-section">
            <CarouselBackground />
          </div>
        </div>
      </div>
    </>
  );
};
