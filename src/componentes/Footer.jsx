import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp, BsEnvelope } from "react-icons/bs";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* Divisor decorativo */}
      <div className="footer-divider"></div>
      
      {/* Contenido principal */}
      <div className="footer-content">
        {/* Logo del taller */}
        <div className="footer-logo">
          <img 
            src="/img/02-logos/logoeltallerdeemilio.png" 
            alt="El Taller de Emilio" 
            className="footer-logo-image"
          />
          <p className="footer-tagline">
            <span className="gothic-initial">A</span>rtesanía en madera desde 1985
          </p>
        </div>
        
        {/* Contacto directo */}
        <div className="footer-contact">
          <h3 className="footer-section-title">
            <span className="gothic-initial">C</span>ontacto
          </h3>
          <a href="tel:+5491112345678" className="footer-contact-link">
            <BsWhatsapp className="footer-contact-icon" />
            <span>+54 9 11 1234-5678</span>
          </a>
          <a href="mailto:contacto@eltallerdeemilio.com" className="footer-contact-link">
            <BsEnvelope className="footer-contact-icon" />
            <span>contacto@eltallerdeemilio.com</span>
          </a>
        </div>
        
        {/* Redes sociales */}
        <div className="footer-social">
          <h3 className="footer-section-title">
            <span className="gothic-initial">S</span>íguenos
          </h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/eltallerdeemilio" target="_blank" rel="noopener noreferrer" className="social-link">
              <BsInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com/eltallerdeemilio" target="_blank" rel="noopener noreferrer" className="social-link">
              <BsFacebook className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Créditos */}
      <FooterGondraWorldDev />
    </footer>
  );
}

export default Footer;