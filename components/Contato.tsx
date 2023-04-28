import React from 'react';

const Contato: React.FC = () => {
  return (
    <div>
      <h1>Entre em contato</h1>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
