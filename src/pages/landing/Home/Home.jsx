import { useEffect } from "react";
import "./Home.css";

// Importaciones 
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


// Lista de accesos rápidos, cada uno con un ícono, etiqueta y ruta asociada
const accesos = [
  { icon: "tramites_digitales", label: "Trámites digitales", path: "/tramites" },
  { icon: "negociar_deuda", label: "Negociar deuda", path: "/negociar" },
  { icon: "pago", label: "Pago", path: "/pagos" },
  { icon: "help", label: "Centro de ayuda", path: "/ayuda" },
  { icon: "certificados_bancarios", label: "Certificados bancarios", path: "/certificados" },
  { icon: "solicita_turno", label: "Solicita tu turno", path: "/turno" },
];

// Lista de servicios destacados con su estilo, imagen y enlace
const servicios = [
  {
    id: 1,
    color: "#e7458f",
    titulo: "Servicio 01",
    texto: "Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjeta Bancolombia. *Aplican TyC",
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
    texto: "Protege tu casa y familia con Prosegur Alarms. Gratis instalación si pagas con tarjetas de crédito.",
    imagen: serviceThree,
    link: "/servicio-03",
  },
];

// Slides que se mostrarán en el carrusel final
const slidesBG = [
  { title: "Pide un préstamo de hasta 30.000 €", image: imageBanner1 },
  { title: "Descárgate nuestra app", image: imageBanner2 },
  { title: "Pide un préstamo de hasta 30.000 €", image: imageBanner1 },
  { title: "Descárgate nuestra app", image: imageBanner2 },
];

export const Home = () => {
  /* SECTION: simula un logout automático al entrar a la página de inicio */
  const { logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    logout(); // Se ejecuta una vez al montar el componente
  }, [logout, isAuthenticated]);
  /*!SECTION*/

  return (
    <>
      {/* Contenedor principal de la página */}
      <div className="allpage">
        {/* Carrusel superior de bienvenida o promociones */}
        <Carosuel />

        {/* Contenedor central con accesos rápidos y servicios */}
        <div className="home-container">
          {/* Sección de accesos rápidos a funcionalidades clave */}
          <section className="accesos-rapidos">
            <div className="contenedor-accesos">
              {accesos.map((item) => (
                <div
                  className="acceso-item"
                  key={item.label}
                  onClick={() => (window.location.href = item.path)} // redirige al hacer clic
                  style={{ cursor: "pointer" }}
                >
                  <Icon name={item.icon} className="element-style" />
                  <div className="accesos-font">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección de servicios destacados */}
          <div className="servicios-wrapper">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className={`servicio tarjeta-${servicio.id}`}
                style={{
                  backgroundColor: servicio.color,
                  flex: servicio.id === 1 ? 2 : 1, // el primer servicio ocupa el doble de espacio
                }}
              >
                {/* Imagen del servicio */}
                <img src={servicio.imagen} alt={servicio.titulo} />
                {/* Contenido textual del servicio */}
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

      {/* Sección de carrusel de tarjetas con fondo completo */}
      <div className="full-width-section">
        <CarouselFullscreen />
      </div>

      {/* Carrusel de tarjetas con imágenes de fondo */}
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

        {/* Carrusel con tarjetas que muestran los slides definidos */}
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

