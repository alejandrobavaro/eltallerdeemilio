import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_Restauraciones.scss";

const Restauraciones = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'sillas', nombre: 'Sillas' },
    { id: 'mesas', nombre: 'Mesas' },
    { id: 'armarios', nombre: 'Armarios' },
    { id: 'especiales', nombre: 'Piezas Especiales' }
  ];

  const trabajos = [
    {
      id: 1,
      categoria: 'sillas',
      titulo: "Sillón Club Inglés",
      año: "1925",
      descripcion: "Restauración completa de sillón club con tapicería en cuero repujado.",
      imagenes: [
        "/img/restauraciones/sillon-antes.jpg",
        "/img/restauraciones/sillon-proceso.jpg",
        "/img/restauraciones/sillon-despues.jpg"
      ]
    },
    {
      id: 2,
      categoria: 'mesas',
      titulo: "Mesa de Comedor Victoriana",
      año: "1890",
      descripcion: "Reconstrucción de patas torneadas y restauración de superficie.",
      imagenes: [
        "/img/restauraciones/mesa-antes.jpg",
        "/img/restauraciones/mesa-proceso.jpg",
        "/img/restauraciones/mesa-despues.jpg"
      ]
    },
    {
      id: 3,
      categoria: 'armarios',
      titulo: "Armario Farmacia Antiguo",
      año: "1875",
      descripcion: "Conservación de etiquetas originales y restauración de cajones.",
      imagenes: [
        "/img/restauraciones/armario-antes.jpg",
        "/img/restauraciones/armario-proceso.jpg",
        "/img/restauraciones/armario-despues.jpg"
      ]
    },
    {
      id: 4,
      categoria: 'especiales',
      titulo: "Escritorio Napoleón III",
      año: "1860",
      descripcion: "Restauración de marquetería y elementos dorados.",
      imagenes: [
        "/img/restauraciones/escritorio-antes.jpg",
        "/img/restauraciones/escritorio-proceso.jpg",
        "/img/restauraciones/escritorio-despues.jpg"
      ]
    },
    {
      id: 5,
      categoria: 'sillas',
      titulo: "Silla Thonet",
      año: "1905",
      descripcion: "Restauración de curvatura en madera de haya.",
      imagenes: [
        "/img/restauraciones/thonet-antes.jpg",
        "/img/restauraciones/thonet-proceso.jpg",
        "/img/restauraciones/thonet-despues.jpg"
      ]
    }
  ];

  const trabajosFiltrados = activeCategory === 'todos' 
    ? trabajos 
    : trabajos.filter(trabajo => trabajo.categoria === activeCategory);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <BsArrowRight />,
    prevArrow: <BsArrowLeft />
  };

  return (
    <motion.section 
      className="restauraciones-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-restauraciones">
        <div className="hero-overlay">
          <h1><span className="gothic-initial">N</span>uestras <span className="gothic-initial">R</span>estauraciones</h1>
          <p>Testimonios de madera y tiempo</p>
        </div>
      </div>

      <div className="container">
        <div className="filtros">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              className={`filtro-btn ${activeCategory === categoria.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(categoria.id)}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        <motion.div 
          className="trabajos-grid"
          layout
        >
          {trabajosFiltrados.map((trabajo) => (
            <motion.div 
              key={trabajo.id}
              className="trabajo-card"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="trabajo-slider">
                <Slider {...sliderSettings}>
                  {trabajo.imagenes.map((imagen, index) => (
                    <div key={index} className="slider-image">
                      <img src={imagen} alt={`${trabajo.titulo} - ${index === 0 ? 'Antes' : index === 1 ? 'Proceso' : 'Después'}`} />
                    </div>
                  ))}
                </Slider>
              </div>
              
              <div className="trabajo-info">
                <h3>{trabajo.titulo}</h3>
                <div className="meta-info">
                  <span className="año">{trabajo.año}</span>
                  <span className="categoria">{trabajo.categoria}</span>
                </div>
                <p>{trabajo.descripcion}</p>
                <button className="btn-detalles">
                  Ver proceso completo
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Restauraciones;