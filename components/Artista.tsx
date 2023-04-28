import React from 'react';
import Head from 'next/head';
import styles from '../styles/Artista.module.css'; // Importando arquivo de estilos CSS

// Componente auxiliar para o carrossel de artistas
const CarrosselArtistas: React.FC = () => {
  const artistas = [
    {
      id: 1,
      nome: 'Monki Jojo',
      descricao: 'Artista lançou álbum',
      imagem: '../artista01.png',
    },
    {
      id: 2,
      nome: 'Artista 2',
      descricao: 'Descrição do Artista 2',
      imagem: '../artista02.png',
    },
    {
      id: 3,
      nome: 'Artista 3',
      descricao: 'Descrição do Artista 3',
      imagem: '../artista03.png',
    },
    // Adicione mais artistas aqui
  ];

  return (
    <div className={styles.carrosselContainer}>
      {/* Carrossel de artistas */}
      <h2>Artistas em destaque</h2>
      {artistas.map(artista => (
        <div key={artista.id} className={styles.artistaCard}>
          <img src={artista.imagem} alt={artista.nome} className={styles.artistaImage} />
          <div className={styles.artistaInfo}>
            <h3 className={styles.artistaName}>{artista.nome}</h3>
            <p className={styles.artistaDescription}>{artista.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Artista: React.FC = () => {
  return (
    <div className={styles.artistaContainer}>
      <Head>
        <title>Artista - Seu Site</title>
        {/* Meta tags e outros elementos do cabeçalho */}
      </Head>
      <CarrosselArtistas />
    </div>
  );
};

export default Artista;
