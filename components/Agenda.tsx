import React from 'react';
import Head from 'next/head';

const Agenda: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Agenda - Seu Site</title>
        {/* Meta tags e outros elementos do cabeçalho */}
      </Head>
      {/* Conteúdo da página de agenda de shows */}
      <h1>Agenda de Shows</h1>
      <ul>
        <li>Show 1 - Data e horário</li>
        <li>Show 2 - Data e horário</li>
        <li>Show 3 - Data e horário</li>
        {/* Adicione mais itens de agenda de shows aqui */}
      </ul>
    </div>
  );
};

export default Agenda;
