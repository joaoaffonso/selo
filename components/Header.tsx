import React from 'react';
import Image from 'next/image';
import logo from '../logo.png'; // Atualize o caminho de importação

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Image className="logo" src="/logo.png" alt="Logo do selo de música experimental" width={200} height={100} />
        <h1 className="logo-title">Nome do Selo</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Artistas</li>
          <li className="nav-item">Lançamentos</li>
          <li className="nav-item">Eventos</li>
          <li className="nav-item">Sobre</li>
          <li className="nav-item">Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

