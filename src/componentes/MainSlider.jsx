import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_MainSlider.scss";

const MainSlider = () => {
  // Configuración del slider (sin cambios)
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div className="custom-dots-container">
        <ul className="custom-dots">{dots}</ul>
      </div>
    )
  };

  // Flechas personalizadas (sin cambios)
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow next-arrow" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow prev-arrow" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  }

  // Imágenes del slider (sin cambios)
  const workshopImages = [
    {
      src: "/img/04-img-banners/banner1.png",
      alt: "Taller de carpintería - Área de trabajo"
    },
    {
      src: "/img/04-img-banners/banner2.png",
      alt: "Proyecto de restauración en proceso"
    },
    {
      src: "/img/04-img-banners/banner3.png",
      alt: "Herramientas artesanales del taller"
    },
    {
      src: "/img/04-img-banners/banner4.png",
      alt: "Proyecto finalizado - Detalle de calidad"
    },
    {
      src: "/img/04-img-banners/banner5.png",
      alt: "Maderas seleccionadas para nuestros trabajos"
    }
  ];

  return (
    // Añadida clase main-slider para compensar el header fixed
    <section className="workshop-slider main-slider">
      <div className="slider-frame">
        <Slider {...settings}>
          {workshopImages.map((image, index) => (
            <div key={index} className="slider-item">
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                />
                <div className="image-caption">
                  <h3>{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MainSlider;