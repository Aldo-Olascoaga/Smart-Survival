import React from 'react';
import Header from '../Header/Header';
import FriendsList from '../Friends/FriendsList';
import ChallengeInvitation from '../Challenge/ChallengeInvitation';
import Logout from '../Logout/Logout';
import Play from '../Play/Play';
import blueCircle from '../../images/blue-circle.png';
import blueSquares from '../../images/blue-squares.png';
import serpentina from '../../images/serpentina.png';

const Profile = () => {
  return (
    <div>
      <Header />
      <div className='blue-circle'>
        <img
          src={blueCircle}
          alt='círculo azul'
        />
      </div>
      <div className='blue-squares'>
        <img
          src={blueSquares}
          alt='cuadros azules'
        />
      </div>
      <div className='serpentina-menu'>
        <img
          src={serpentina}
          alt='serpentina'
        />
      </div>
      <div className='welcome-item'>
        <h1>¡Bienvenido a tu perfil! </h1>
        <h1>¿Qué deseas hacer hoy?</h1>
      </div>

      <div className='profile-container'>
        <div className='options-container'>
          <FriendsList />
          <Play />
          <Logout />
        </div>
        <div className='challenge-invitation-item'>
          <ChallengeInvitation />
        </div>
      </div>
    </div>
  );
};

export default Profile;
