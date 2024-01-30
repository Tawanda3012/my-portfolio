import React from 'react';
import './futa.css'; // Import the CSS file for styling
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const linkedInUrl = 'https://www.linkedin.com/your-linkedin-profile';
  const whatsappNumber = '0719262353'; 
  const email = 'nharetawanda@gmail.com'; 
  const phoneNumber = '0719262353'; 

const handlePhoneClick = () => {
  if (phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
  }
};


  const handleLinkedInClick = () => {
    window.open(linkedInUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <footer className="futa-container">
      <div className="contact-icons">
        <div className="futa-icon" onClick={handleLinkedInClick}>
          <FaLinkedin />
        </div>
        <div className="futa-icon" onClick={handleWhatsAppClick}>
          <FaWhatsapp />
        </div>
        <div className="futa-icon" onClick={handleEmailClick}>
          <FaEnvelope />
        </div>
      </div>
      <p style={{ cursor: 'pointer' }} onClick={handlePhoneClick}>Phone: {phoneNumber}</p>
      <p className="copyright">&copy; 2024 Tawanda Nhare</p>
    </footer>
  );
}

export default Footer;
