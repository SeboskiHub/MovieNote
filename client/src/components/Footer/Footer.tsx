import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>MovieNote</h2>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MovieNote. Todos los derechos reservados.</p>
        <p>Proyecto educativo desarrollado por <a href="https://github.com/SeboskiHub" target="_blank" rel="noopener noreferrer">Sebastian</a> y <a href="https://github.com/MariaNiugloh" target="_blank" rel="noopener noreferrer">Camila</a>.</p>
        <p>Powered by TMDB</p>
      </div>
    </footer>
  );
};

export default Footer;