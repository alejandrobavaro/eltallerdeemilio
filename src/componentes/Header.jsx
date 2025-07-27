import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BsList, 
  BsTelephone, 
  BsWhatsapp,
  BsInstagram,
  BsFacebook 
} from "react-icons/bs";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { FiScissors } from "react-icons/fi";
import { MdOutlineRestore, MdOutlineWorkspaces } from "react-icons/md";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para el efecto de scroll (cambia estilo al hacer scroll)
  const [scrolled, setScrolled] = useState(false);
  
  // Hook para obtener la ruta actual
  const location = useLocation();

  // Función para alternar el menú móvil
  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Efecto para detectar scroll y cambiar el estado
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array de enlaces de navegación principales
  const navLinks = [
    { path: "/", name: "Inicio", icon: <AiOutlineHome className="nav-icon" /> },
    { path: "/servicios", name: "Servicios", icon: <FiScissors className="nav-icon" /> },
    { path: "/restauraciones", name: "Restauraciones", icon: <MdOutlineRestore className="nav-icon" /> },
    { path: "/taller", name: "El Taller", icon: <MdOutlineWorkspaces className="nav-icon" /> },
    { path: "/contacto", name: "Contacto", icon: <AiOutlineMail className="nav-icon" /> }
  ];

  // Array de enlaces a redes sociales
  const socialLinks = [
    { url: "#", icon: <BsWhatsapp className="social-icon" /> },
    { url: "#", icon: <BsInstagram className="social-icon" /> },
    { url: "#", icon: <BsFacebook className="social-icon" /> }
  ];

  // Función para manejar el clic en los enlaces
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Barra superior con información de contacto - Se compacta al hacer scroll */}
      <div className="top-bar">
        <Container>
          <div className="contact-info">
            <a href="tel:+5491112345678" className="contact-link">
              <BsTelephone className="contact-icon" />
            </a>
            <a href="mailto:info@tallerdeemilio.com" className="contact-link">
              <AiOutlineMail className="contact-icon" />
            </a>
          </div>
          
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Navegación principal - Se mantiene fija en la parte superior */}
      <Navbar expand="lg" className="navbar">
        <Container>
          {/* Logo del taller - Reducido en tamaño para versión compacta */}
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <img
              src="/img/02-logos/logoeltallerdeemilio.png"
              alt="Logo El Taller de Emilio"
              className="logoHeader"
            />
          </Navbar.Brand>

          {/* Botón del menú móvil - Estilo compacto */}
          <Navbar.Toggle 
            aria-controls="main-navbar" 
            className="navbar-toggler"
            onClick={handleToggleMobileMenu}
          >
            <BsList className="menu-icon" />
            <span className="menu-text">
              <span className="gothic-initial">M</span>ENÚ
            </span>
          </Navbar.Toggle>

          {/* Contenido del menú - Se adapta a versión móvil/desktop */}
          <Navbar.Collapse
            id="main-navbar"
            className={`navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          >
            <Nav className="ml-auto">
              {navLinks.map((link) => (
                <Nav.Item key={link.path}>
                  <Nav.Link
                    as={Link}
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={handleNavClick}
                  >
                    {link.icon}
                    <span className="gothic-initial">{link.name[0]}</span>
                    {link.name.substring(1)}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;