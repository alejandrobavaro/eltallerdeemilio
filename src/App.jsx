import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/_01-General/_App.scss";
import Header from "./componentes/Header";
import MainContent from "./componentes/MainContent";
import Footer from "./componentes/Footer";
import Contacto from "./componentes/Contacto";
import WhatsappButton from "./componentes/WhatsappButton";
import MainSlider from "./componentes/MainSlider";
import Servicios from "./componentes/Servicios";
import Restauraciones from "./componentes/Restauraciones";
import Taller from "./componentes/Taller";

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Header />
      {/* Contenedor principal con espacio para el header fixed */}
      <div className="main-content-wrapper">
        {location.pathname === "/" && <MainSlider />}
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/restauraciones" element={<Restauraciones />} />
            <Route path="/taller" element={<Taller />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;