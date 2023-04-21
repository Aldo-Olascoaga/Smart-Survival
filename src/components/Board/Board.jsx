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
            <th>Mundo</th>
            <th>Modo de juego</th>
            <th>Último nivel</th>
            <th>Aciertos</th>
            <th>Errores</th>
            <th>Tiempo de juego</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.usuario}</td>
              <td>{row.email}</td>
              <td>{row.mundo}</td>
              <td>{row.modoDeJuego}</td>
              <td>{row.ultimoNivel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
