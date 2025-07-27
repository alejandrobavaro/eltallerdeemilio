import React from "react";
import Slider from "react-slick";
import { BsHammer, BsTruck, BsBrush, BsCheckCircle } from "react-icons/bs";
import { FaHandsHelping, FaHistory, FaPalette } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_MainContent.scss";

const MainContent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const trabajos = [
    {
      title: "Sillón de época restaurado",
      description: "Restauración completa de sillón francés de 1920, recuperando la tapicería original en terciopelo y estructura en madera de nogal. Proceso incluyó desinfección, relleno de muelles y tejido artesanal.",
      images: [
        "/img/04-img-banners/banner2.png",
        "/img/04-img-banners/banner3.png",
        "/img/04-img-banners/banner8.png"
      ],
      year: "1920",
      estilo: "Vintage Francés",
      materiales: "Nogal, terciopelo",
      proceso: [
        "Desmontaje y limpieza completa",
        "Restauración de estructura",
        "Tapizado artesanal"
      ]
    },
    {
      title: "Mesa de comedor familiar",
      description: "Reconstrucción de mesa de roble macizo con patas torneadas. Eliminamos rayones profundos, aplicamos tratamiento anti-hongos y acabado a cera natural para resaltar la veta.",
      images: [
        "/img/04-img-banners/banner4.png",
        "/img/04-img-banners/banner5.png",
        "/img/04-img-banners/banner9.png"
      ],
      year: "1950",
      estilo: "Rústico Español",
      materiales: "Roble macizo",
      proceso: [
        "Lijado manual progresivo",
        "Tratamiento anti-humedad",
        "Acabado con cera de abejas"
      ]
    },
    {
      title: "Armario de farmacia antiguo",
      description: "Restauración de armario de farmacia del siglo XIX con sus 24 cajones originales. Conservamos las etiquetas medicinales originales mientras reforzamos la estructura.",
      images: [
        "/img/04-img-banners/banner6.png",
        "/img/04-img-banners/banner7.png",
        "/img/04-img-banners/banner10.png"
      ],
      year: "1890",
      estilo: "Industrial",
      materiales: "Pino tratado, vidrio",
      proceso: [
        "Conservación de elementos originales",
        "Refuerzo estructural invisible",
        "Protección UV para etiquetas"
      ]
    }
  ];

  const servicios = [
    {
      icon: <BsTruck />,
      title: "Recogida y Entrega",
      description: "Nos encargamos del transporte de tus muebles con embalaje profesional y seguro."
    },
    {
      icon: <BsHammer />,
      title: "Restauración Completa",
      description: "Desde limpieza hasta reconstrucción estructural, devolvemos la vida a tus muebles."
    },
    {
      icon: <FaPalette />,
      title: "Personalización",
      description: "Elige acabados, colores o modificaciones para adaptar el mueble a tu espacio."
    }
  ];

  const guiaPasos = [
    {
      title: "1. Evaluación Inicial",
      description: "Envíanos fotos y detalles para un diagnóstico preliminar."
    },
    {
      title: "2. Presupuesto Personalizado",
      description: "Te enviamos un análisis detallado con opciones de trabajo."
    },
    {
      title: "3. Recogida Programada",
      description: "Coordinamos la recogida en tu domicilio sin costos ocultos."
    },
    {
      title: "4. Restauración Artesanal",
      description: "Trabajamos en tu pieza con técnicas tradicionales."
    },
    {
      title: "5. Entrega y Garantía",
      description: "Devolvemos tu mueble restaurado con garantía de 2 años."
    }
  ];

  return (
    <main className="main-content">
      {/* Sección Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1><span className="gothic-initial">R</span>estauraciones con <span className="gothic-initial">a</span>lma</h1>
          <p>Recuperamos la historia de tus muebles con técnicas artesanales transmitidas por generaciones</p>
          <button className="btn-primary">
            <span className="gothic-initial">C</span>onsulta tu proyecto
          </button>
        </div>
      </section>

      {/* Sección Trabajos Destacados */}
      <section className="trabajos-destacados">
        <div className="container">
          <h2 className="section-title">
            <span className="gothic-initial">T</span>rabajos con <span className="gothic-initial">H</span>istoria
          </h2>
          <p className="section-subtitle">
            Cada pieza restaurada lleva el sello de nuestro taller artesanal
          </p>
          
          <Slider {...sliderSettings} className="trabajos-slider">
            {trabajos.map((trabajo, index) => (
              <div key={index} className="trabajo-item">
                <div className="trabajo-gallery">
                  {trabajo.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="gallery-img-container">
                      <img src={img} alt={`${trabajo.title} - Detalle ${imgIndex + 1}`} />
                    </div>
                  ))}
                </div>
                
                <div className="trabajo-info">
                  <h3>
                    <span className="gothic-initial">{trabajo.title[0]}</span>
                    {trabajo.title.substring(1)}
                  </h3>
                  <p className="descripcion">{trabajo.description}</p>
                  
                  <div className="proceso-list">
                    <h4>Proceso aplicado:</h4>
                    <ul>
                      {trabajo.proceso.map((paso, i) => (
                        <li key={i}>
                          <BsCheckCircle className="check-icon" /> {paso}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="trabajo-meta">
                    <div className="meta-item">
                      <span className="meta-label">Año</span>
                      <span className="meta-value">{trabajo.year}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Estilo</span>
                      <span className="meta-value">{trabajo.estilo}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Materiales</span>
                      <span className="meta-value">{trabajo.materiales}</span>
                    </div>
                  </div>
                  
                  <button className="btn-details">
                    <span className="gothic-initial">V</span>er proceso completo
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Sección Nuestros Servicios */}
      <section className="servicios-section">
        <div className="container">
          <h2 className="section-title">
            <span className="gothic-initial">N</span>uestros <span className="gothic-initial">S</span>ervicios
          </h2>
          
          <div className="servicios-grid">
            {servicios.map((servicio, index) => (
              <div key={index} className="servicio-card">
                <div className="servicio-icon">
                  {servicio.icon}
                </div>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Guía de Restauración */}
      <section className="guia-section">
        <div className="container">
          <div className="guia-content">
            <div className="guia-text">
              <h2>
                <span className="gothic-initial">G</span>uía de <span className="gothic-initial">R</span>estauración
              </h2>
              <p>¿Cómo funciona nuestro proceso artesanal? Sigue estos pasos:</p>
              
              <div className="pasos-container">
                {guiaPasos.map((paso, index) => (
                  <div key={index} className="paso-item">
                    <div className="paso-number">{index + 1}</div>
                    <div>
                      <h4>{paso.title}</h4>
                      <p>{paso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="guia-image">
              <img src="/img/guia-restauracion.jpg" alt="Proceso de restauración" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>
            <span className="gothic-initial">¿</span>Listo para restaurar tu <span className="gothic-initial">T</span>esoro<span className="gothic-initial">?</span>
          </h2>
          <p>Envíanos fotos de tu mueble y recibe un diagnóstico experto sin compromiso</p>
          <button className="btn-primary">
            <span className="gothic-initial">E</span>nvía tu proyecto
          </button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;