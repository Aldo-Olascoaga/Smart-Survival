import React from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  return (
    <div>
      <button
        className='logout-btn'
        onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Logout;
