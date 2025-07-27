import React from "react";
import { FaHammer, FaLinkedin, FaGithub } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

function FooterGondraWorldDev() {
  return (
    <div className="craftsman-footer">
      {/* Divider con herramientas */}
      <div className="tools-divider">
        <FaHammer className="hammer-icon" />
        <div className="nail-line"></div>
        <FaHammer className="hammer-icon flipped" />
      </div>
      
      {/* Contenido de créditos */}
      <div className="craftsman-content">
        <div className="craftsman-branding">
          <span className="handcrafted">Hecho a mano por </span>
          <a
            href="https://alejandrobavaro.github.io/gondraworld-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="craftsman-link"
          >
            Gondra World Dev
          </a>
        </div>
        
        <div className="craftsman-social">
          <a 
            href="https://www.linkedin.com/in/alejandro-bavaro/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-tool" />
          </a>
          <a 
            href="https://github.com/alejandrobavaro" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-tool" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterGondraWorldDev;