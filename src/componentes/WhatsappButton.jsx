import React from "react";
import "../assets/scss/_03-Componentes/_WhatsappButton.scss";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/34123456789"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;