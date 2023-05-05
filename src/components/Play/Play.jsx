import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Play.css';

const Play = () => {
  const navigate = useNavigate();

  const playGame = () => {
    // Use navigate() to go to the videogame
    navigate('http://survivaltrivia.s3-website-us-east-1.amazonaws.com/');
    console.log('Ir al juego');
  };

  return (
    <div>
      <button
        className='play-btn'
        onClick={playGame}>
        Jugar a Smart Survival
      </button>
    </div>
  );
};

export default Play;
