import React from 'react';
import './Play.css';

const Play = () => {
  const playGame = () => {
    // Use window.location.href to go to the videogame
    window.location.href =
      'http://survivaltrivia.s3-website-us-east-1.amazonaws.com/';
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
