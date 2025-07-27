import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <section className="contacto-section">
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>
            <span className="gothic-initial">C</span>ontacta con nuestro taller
          </h2>
          <p>
            ¿Tienes un mueble o objeto que quieras restaurar? Escríbenos y te
            asesoraremos sin compromiso.
          </p>

          <div className="contacto-details">
            <div className="contacto-item">
              <BsGeoAlt className="contacto-icon" />
              <div>
                <h4><span className="gothic-initial">D</span>irección</h4>
                <p>Calle del Taller, 123, Barrio Artesanal, Ciudad</p>
              </div>
            </div>

            <div className="contacto-item">
              <BsTelephone className="contacto-icon" />
              <div>
                <h4><span className="gothic-initial">T</span>eléfono</h4>
                <p>+34 123 456 789</p>
              </div>
            </div>

            <div className="contacto-item">
              <BsEnvelope className="contacto-icon" />
              <div>
                <h4><span className="gothic-initial">E</span>mail</h4>
                <p>info@eltallerdeemilio.com</p>
              </div>
            </div>

            <div className="contacto-item">
              <BsClock className="contacto-icon" />
              <div>
                <h4><span className="gothic-initial">H</span>orario</h4>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto-form">
          <h3>
            <span className="gothic-initial">E</span>nvíanos un mensaje
          </h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Teléfono" />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              <span className="gothic-initial">E</span>nviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;