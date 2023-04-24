import React from 'react';
import './StatisticsButtons.css';
import { useNavigate } from 'react-router-dom';

const StatisticsButtons = () => {
  const navigate = useNavigate();

  const goToHistoriaModoHistoria = () => {
    navigate('/statistics/historia/mode/historia');
  };

  return (
    <div className='statistics-buttons-container'>
      <div className='statistics-buttons-item'>
        <button className='statistics-button'>Ciencias - Modo Historia</button>
        <button className='statistics-button'>
          Ciencias - Modo Contrarreloj
        </button>
        <button className='statistics-button'>Ciencias - Modo Online</button>
        <button
          onClick={goToHistoriaModoHistoria}
          className='statistics-button'>
          Historia - Modo Historia
        </button>
        <button className='statistics-button'>
          Historia - Modo Contrarreloj
        </button>
        <button className='statistics-button'>Historia - Modo Online</button>
      </div>
    </div>
  );
};

export default StatisticsButtons;
