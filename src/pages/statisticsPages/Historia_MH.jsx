import React from 'react';
import Header from '../../components/Header/Header';
import Board from '../../components/Boards/Board';

const HistoriaMH = () => {
  const data = [
    {
      usuario: 'Alice',
      email: 'alice@example.com',
      ultimoNivel: 10,
      aciertos: 7,
      errores: 3,
      tiempoJuego: 10.5,
    },
    {
      usuario: 'Bob',
      email: 'bob@example.com',
      ultimoNivel: 5,
      aciertos: 3,
      errores: 2,
      tiempoJuego: 5.5,
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

export default HistoriaMH;
