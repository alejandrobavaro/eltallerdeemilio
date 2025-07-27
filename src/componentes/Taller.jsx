import React from "react";
import { motion } from "framer-motion";
import { BsTools, BsClockHistory, BsPeople, BsAward } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_Taller.scss";

const Taller = () => {
  const features = [
    {
      icon: <BsTools />,
      title: "Nuestro Espacio",
      description: "Taller equipado con herramientas tradicionales y tecnología moderna para restauraciones perfectas."
    },
    {
      icon: <BsClockHistory />,
      title: "Nuestra Historia",
      description: "Más de 40 años devolviendo la vida a muebles con historias que contar."
    },
    {
      icon: <BsPeople />,
      title: "Nuestro Equipo",
      description: "Artistas de la madera formados en técnicas tradicionales europeas y latinoamericanas."
    },
    {
      icon: <BsAward />,
      title: "Nuestra Filosofía",
      description: "Respeto por la pieza original y compromiso con la conservación del patrimonio."
    }
  ];

  const equipo = [
    {
      nombre: "Emilio Gondra",
      rol: "Fundador y Maestro Restaurador",
      bio: "Con más de 50 años de experiencia, Emilio aprendió el oficio en los talleres de Barcelona antes de traer su arte a América.",
      imagen: "/img/equipo/emilio.jpg"
    },
    {
      nombre: "Lucía Fernández",
      rol: "Especialista en Tapicería",
      bio: "Quinta generación de tapiceros, experta en tejidos históricos y técnicas de conservación textil.",
      imagen: "/img/equipo/lucia.jpg"
    },
    {
      nombre: "Carlos Méndez",
      rol: "Ebanista",
      bio: "Especializado en reconstrucción estructural y talla artesanal de piezas faltantes.",
      imagen: "/img/equipo/carlos.jpg"
    }
  ];

  return (
    <motion.section 
      className="taller-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-taller">
        <div className="hero-overlay">
          <h1><span className="gothic-initial">E</span>l <span className="gothic-initial">T</span>aller</h1>
          <p>Donde la tradición y la artesanía se encuentran</p>
        </div>
      </div>

      <div className="container">
        <section className="taller-features">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="taller-historia">
          <motion.div 
            className="historia-content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2><span className="gothic-initial">N</span>uestra <span className="gothic-initial">H</span>istoria</h2>
            <p>
              Fundado en 1980 por Emilio Gondra, nuestro taller comenzó como un pequeño espacio en el barrio de San Telmo. 
              Lo que empezó como un oficio solitario se transformó en un equipo de artesanos apasionados por rescatar 
              piezas con historia.
            </p>
            <p>
              Hoy, después de más de cuatro décadas, hemos restaurado más de 2,000 piezas, cada una con su propia historia 
              y desafíos únicos. Nuestro taller ha crecido, pero nuestro compromiso con las técnicas tradicionales sigue 
              siendo el mismo.
            </p>
          </motion.div>
          <motion.div 
            className="historia-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/img/taller-historia.jpg" alt="Taller de Emilio en los años 80" />
          </motion.div>
        </section>

        <section className="taller-equipo">
          <h2><span className="gothic-initial">N</span>uestro <span className="gothic-initial">E</span>quipo</h2>
          <p className="equipo-subtitle">Artistas dedicados a preservar el patrimonio mueble</p>
          
          <div className="equipo-grid">
            {equipo.map((persona, index) => (
              <motion.div 
                key={index}
                className="persona-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="persona-image">
                  <img src={persona.imagen} alt={persona.nombre} />
                </div>
                <div className="persona-info">
                  <h3>{persona.nombre}</h3>
                  <p className="persona-rol">{persona.rol}</p>
                  <p className="persona-bio">{persona.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="taller-galeria">
          <h2><span className="gothic-initial">E</span>spacio de <span className="gothic-initial">T</span>rabajo</h2>
          <p className="galeria-subtitle">Un vistazo a nuestro taller</p>
          
          <div className="galeria-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                className="galeria-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={`/img/taller-galeria/${item}.jpg`} 
                  alt={`Taller de Emilio - Área ${item}`} 
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default Taller;