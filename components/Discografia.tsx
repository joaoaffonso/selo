import React from 'react';
import Head from 'next/head';

// Defina a interface Album
interface Album {
  title: string;
  description: string;
  coverImage: string;
}

const AlbumComponent: React.FC<{ album: Album }> = ({ album }) => {
  return (
    <div className="album">
      <h2>{album.title}</h2>
      <p>{album.description}</p>
      <img src={album.coverImage} alt={album.title} />
    </div>
  );
};

const Discografia: React.FC = () => {
  const albums: Album[] = [
    {
      title: 'Álbum 1',
      description: 'Descrição do Álbum 1',
      coverImage: '../album01.png',
    },
    {
      title: 'Álbum 2',
      description: 'Descrição do Álbum 2',
      coverImage: '../album02.png',
    },
    {
      title: 'Álbum 3',
      description: 'Descrição do Álbum 3',
      coverImage: '../album03.png',
    },
    {
      title: 'Menir - Shy Hiker',
      description: 'Descrição do Álbum 4',
      coverImage: '../album04.png',
    },
    // Adicione mais álbuns aqui, se necessário
  ];

  return (
    <div className="carousel">
      <Head>
        <title>Discografia - Seu Site</title>
        {/* Meta tags e outros elementos do cabeçalho */}
      </Head>
      {albums.map(album => (
        <AlbumComponent key={album.title} album={album} />
      ))}
    </div>
  );
};

export default Discografia;
