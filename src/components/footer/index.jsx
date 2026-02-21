import React from 'react';
import './styles.css';

const Footer = () => {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7453759905648!2d-46.749693799999996!3d-23.6492881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53df3d6acad3%3A0x1e7fac091890c4b1!2s%C3%93tica%20Arte!5e0!3m2!1spt-BR!2sbr!4v1770506801315!5m2!1spt-BR!2sbr";

  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        
        {/* Coluna 1: Branding */}
        <div className="footer-column brand">
          <h2 className="footer-logo">ÓTICA ARTE</h2>
          <p className="footer-tagline">Qualidade e estilo para os seus olhos.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/otica_arte" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.png" alt="Instagram" className="instagram-icon" />
            </a>
        </div>
        </div>

        {/* Coluna 2: Informações de Contato */}
        <div className="footer-column contact">
          <h3 className="column-title">CONTATO</h3>
          <ul className="contact-list">
            <li><strong>Telefone:</strong>{" "}<a href="telefone:+551158179554">(11) 5817-9554</a></li>
            <li><strong>WhatsApp:</strong>{" "}<a href="https://wa.me/5511994285011?text=Olá,%20tudo%20bem?%20Encontrei%20o%20contato%20pelo%20site%20da%20Ótica%20Arte%20e%20gostaria%20de%20mais%20informações."
            target="_blank" rel="noopener noreferrer">(11) 99428-5011</a></li>
            <li><strong>Endereço:</strong> R. Thereza Mouco de Oliveira, 66 <br/> Vila Maracana, São Paulo - SP </li>
            <li><strong>Atendimento:</strong> Seg a Sex, 09h às 19h e Sábado 09h às 13h</li>
            </ul>
        </div>

        {/* Coluna 3: Localização (Google Maps) */}
        <div className="footer-column map">
          <h3 className="column-title">ONDE ESTAMOS</h3>
          <div className="map-wrapper">
            <iframe
              title="Localização Ótica Arte"
              src={googleMapsUrl}
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ótica Arte - Desenvolvido por <a href="https://www.francotechsolutions.com.br">Franco Tech Solutions.</a></p>
      </div>
    </footer>
  );
};

export default Footer;