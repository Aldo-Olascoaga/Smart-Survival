import React from 'react';
import Header from '../../components/Header/Header';
import Board from '../../components/Board/Board';

const StatisticsPage = () => {
  const data = [
    {
      usuario: 'Alice',
      email: 'alice@example.com',
      mundo: 'Ciencias',
      modoDeJuego: 'Historia',
      ultimoNivel: 10,
    },
    {
      usuario: 'Bob',
      email: 'bob@example.com',
      mundo: 'Historia',
      modoDeJuego: 'Contrarreloj',
      ultimoNivel: 5,
    },
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <Board data={data} />
    </div>
  );
};

export default StatisticsPage;
