import React from "react";
import { motion } from "framer-motion";
import { FiScissors, FiTruck, FiTool, FiAward, FiPackage, FiCheckCircle } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Servicios.scss";

const Servicios = () => {
  const servicios = [
    {
      icon: <FiScissors />,
      title: "Restauración de Tapicería",
      description: "Recuperamos la belleza original de tus muebles tapizados con técnicas artesanales.",
      features: [
        "Reemplazo de espumas y rellenos",
        "Tejidos históricamente precisos",
        "Costura a mano en detalles especiales"
      ]
    },
    {
      icon: <FiTool />,
      title: "Restauración Estructural",
      description: "Reparación de daños estructurales manteniendo la autenticidad de la pieza.",
      features: [
        "Reconstrucción de ensambles tradicionales",
        "Consolidación de maderas deterioradas",
        "Refuerzos estructurales invisibles"
      ]
    },
    {
      icon: <FiAward />,
      title: "Acabados Especiales",
      description: "Técnicas de acabado que respetan la pátina original.",
      features: [
        "Barnices al alcohol tradicionales",
        "Técnicas de envejecimiento controlado",
        "Acabados a cera y goma laca"
      ]
    },
    {
      icon: <FiTruck />,
      title: "Servicio de Transporte",
      description: "Recogemos y entregamos tus muebles con total seguridad.",
      features: [
        "Furgones acondicionados",
        "Embalaje profesional",
        "Seguro de transporte incluido"
      ]
    },
    {
      icon: <FiPackage />,
      title: "Conservación Preventiva",
      description: "Protege tus muebles para las futuras generaciones.",
      features: [
        "Tratamientos anti-xilófagos",
        "Control de humedad relativa",
        "Protección UV para superficies"
      ]
    },
    {
      icon: <FiCheckCircle />,
      title: "Certificación de Autenticidad",
      description: "Documentación profesional para piezas restauradas.",
      features: [
        "Informe técnico completo",
        "Recomendaciones de conservación",
        "Garantía por escrito"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      className="servicios-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-servicios">
        <div className="hero-overlay">
          <h1><span className="gothic-initial">N</span>uestros <span className="gothic-initial">S</span>ervicios</h1>
          <p>Técnicas artesanales transmitidas por generaciones</p>
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="servicios-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicios.map((servicio, index) => (
            <motion.div 
              key={index}
              className="servicio-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(90, 57, 33, 0.2)" }}
            >
              <div className="servicio-icon">
                {servicio.icon}
              </div>
              <h3>{servicio.title}</h3>
              <p className="servicio-desc">{servicio.description}</p>
              
              <div className="servicio-features">
                <h4>Incluye:</h4>
                <ul>
                  {servicio.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-icon">✧</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="proceso-section">
          <h2><span className="gothic-initial">¿</span>Cómo trabajamos<span className="gothic-initial">?</span></h2>
          
          <motion.div 
            className="proceso-steps"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="proceso-step">
              <div className="step-number">1</div>
              <h3>Evaluación</h3>
              <p>Análisis completo de la pieza y diagnóstico de restauración</p>
            </div>
            
            <div className="proceso-step">
              <div className="step-number">2</div>
              <h3>Presupuesto</h3>
              <p>Propuesta detallada con opciones y plazos</p>
            </div>
            
            <div className="proceso-step">
              <div className="step-number">3</div>
              <h3>Recogida</h3>
              <p>Transporte especializado con embalaje profesional</p>
            </div>
            
            <div className="proceso-step">
              <div className="step-number">4</div>
              <h3>Restauración</h3>
              <p>Proceso artesanal en nuestro taller</p>
            </div>
            
            <div className="proceso-step">
              <div className="step-number">5</div>
              <h3>Entrega</h3>
              <p>Devolución con garantía y recomendaciones</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Servicios;