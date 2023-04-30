import React from 'react';
import './StatisticsButtons.css';
import { useNavigate } from 'react-router-dom';
import aro from '../../images/aro.png';
import purpleSquares from '../../images/purple-squares.png';
import serpentina from '../../images/serpentina.png';

const StatisticsButtons = () => {
  const navigate = useNavigate();

  const goToHistoriaModoHistoria = () => {
    navigate('/statistics/historia/mode/historia');
  };

  return (
    <div className='statistics-buttons-container'>
      <div className='aro'>
        <img
          src={aro}
          alt='aro morado'
        />
      </div>
      <div className='purple-squares'>
        <img
          src={purpleSquares}
          alt='cuadros morados'
        />
      </div>
      <div className='serpentina'>
        <img
          src={serpentina}
          alt='serpentina'
        />
      </div>
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
