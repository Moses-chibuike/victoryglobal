// src/WhatsAppButton.js

import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
       href="https://wa.me/23372632722?text=Welcome to victory global, what item do you want to buy today!"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-content">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
          alt="WhatsApp" 
          className="whatsapp-icon" 
        />
        <span className="whatsapp-text">Message Us</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
