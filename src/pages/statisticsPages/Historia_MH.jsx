import React from 'react';
import Header from '../../components/Header/Header';
import Board from '../../components/Boards/Board';

const HistoriaMH = () => {
  const data = [
    {
      usuario: 'MónicaLarre',
      email: 'monica.larre@tec.mx',
      ultimoNivel: 2,
      aciertos: 3,
      errores: 1,
      tiempoJuego: 4.0,
    },
    {
      usuario: 'SergioHdz',
      email: 'sergiohernandez@tec.mx',
      ultimoNivel: 3,
      aciertos: 5,
      errores: 1,
      tiempoJuego: 6.2,
    },
    {
      usuario: 'CamiTE',
      email: 'A01421234@tec.mx',
      ultimoNivel: 5,
      aciertos: 7,
      errores: 3,
      tiempoJuego: 9.52,
    },
    {
      usuario: 'Messi10',
      email: 'messi@hotmail.com',
      ultimoNivel: 5,
      aciertos: 3,
      errores: 2,
      tiempoJuego: 5.5,
    },
    {
      usuario: 'PatoAH',
      email: 'patoalvh@hotmail.com',
      ultimoNivel: 1,
      aciertos: 1,
      errores: 0,
      tiempoJuego: 3.0,
    },
    {
      usuario: 'Aldo Bat10',
      email: 'aldo_olascoaga@outlook.com',
      ultimoNivel: 3,
      aciertos: 8,
      errores: 4,
      tiempoJuego: 8.35,
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
