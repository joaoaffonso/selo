import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Criado por João Sá</p>
        <ul>
          <li>Links</li>
          <li>Sobre nós</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="footer-right">
        <p>Redes sociais</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
