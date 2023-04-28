import React from 'react';
import Artista from '../components/Artista';
import Discografia from '../components/Discografia';
import Agenda from '../components/Agenda';
import Blog from '../components/Blog';
import Contato from '../components/Contato';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        {/* Renderize os componentes dentro do componente Home */}
        <Agenda />
        <Artista />
        <Discografia />
        
        <Blog />
        <Contato />
      </div>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  Ir ao topo
</button>
      <Footer />
    </div>
  );
};

export default Home;
