import { useEffect } from "react";
import "./Home.css";

import Carosuel from "../../../components/landing/Slider/Carousel";
import CarouselBackground from "../../../components/landing/Slider/CarouselBackground";
import CarouselFullscreen from "../../../components/landing/Slider/CarouselFullscreen";
import { useAuthStore } from "../../../store/auth-store";
import { Icon } from "../../../components/common/ui/Icon/Icon";
import serviceOne from "../../../assets/images/image_service1.png";
import serviceTwo from "../../../assets/images/image_service2.png";
import serviceThree from "../../../assets/images/image_service3.png";
import imageBanner1 from "../../../assets/images/image_banner_two_1.svg";
import imageBanner2 from "../../../assets/images/image_banner_two_2.svg";
import { CarouselCards } from "../../../components/layout/Carousel/CarouselCards/CarouselCards";

const accesos = [
  {
    icon: "tramites_digitales",
    label: "Trámites digitales",
    path: "/tramites",
  },
  {
    icon: "negociar_deuda",
    label: "Negociar deuda",
    path: "/negociar",
  },
  {
    icon: "pago",
    label: "Pago",
    path: "/pagos",
  },
  {
    icon: "help",
    label: "Centro de ayuda",
    path: "/ayuda",
  },
  {
    icon: "certificados_bancarios",
    label: "Certificados bancarios",
    path: "/certificados",
  },
  {
    icon: "solicita_turno",
    label: "Solicita tu turno",
    path: "/turno",
  },
];

const servicios = [
  {
    id: 1,
    color: "#e7458f",
    titulo: "Servicio 01",
    texto:
      "Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjeta Bancolombia. *Aplican TyC",
    imagen: serviceOne,
    link: "/servicio-01",
  },
  {
    id: 2,
    color: "#4d3b8f",
    titulo: "Servicio 02",
    texto: "Protege tu casa y familia con Prosegur Alarms. Gratis.",
    imagen: serviceTwo,
    link: "/servicio-02",
  },
  {
    id: 3,
    color: "#f0813a",
    titulo: "Servicio 03",
    texto:
      "Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjetas de crédito.",
    imagen: serviceThree,
    link: "/servicio-03",
  },
];

const slidesBG = [
  {
    title: "Pide un préstamo de hasta 30.000 €",
    image: imageBanner1,
  },
  {
    title: "Descárgate nuestra app",
    image: imageBanner2,
  },
  {
    title: "Pide un préstamo de hasta 30.000 €",
    image: imageBanner1,
  },
  {
    title: "Descárgate nuestra app",
    image: imageBanner2,
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
                  <Icon name={item.icon} className="element-style" />
                  <div className="accesos-font">{item.label}</div>
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
        </div>
      </div>
      {/* Sliders adicionales */}
      <div className="full-width-section">
        <CarouselFullscreen />
      </div>

      <div className="carousel-background-container">
        <div className="carousel-background-content">
          <h1>Nuestros créditos son todo ventajas</h1>
          <p>
            Tanto si buscas mejorar tus gastos con una tarjeta de crédito como
            si estás pensando a largo plazo con nuestros préstamos, todas
            nuestras opciones de crédito son competitivas, transparentes y
            flexibles³.
          </p>
        </div>
        <CarouselCards
          cards={slidesBG.map((slide) => (
            <div 
              className="carousel-background-card" 
              key={slide.title}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2>{slide.title}</h2>
            </div>
          ))}
        />
      </div>
    </>
  );
};
