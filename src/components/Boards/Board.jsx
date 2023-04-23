import React from 'react';
import './Board.css';

const Board = ({ data }) => {
  return (
    <div className='board-container'>
      <h1 className='title-item'>Estadísticas</h1>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Último nivel</th>
            <th>Aciertos totales</th>
            <th>Errores totales</th>
            <th>Tiempo de juego</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.usuario}</td>
              <td>{row.email}</td>
              <td>{row.ultimoNivel}</td>
              <td>{row.aciertos}</td>
              <td>{row.errores}</td>
              <td>{row.tiempoJuego}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
