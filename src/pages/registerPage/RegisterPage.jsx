import React from 'react';
import RegisterForm from '../../components/Register/RegisterForm';
import RegisterHeader from '../../components/Register/RegisterHeader';
import GirlImage from '../../components/Login/GirlImage';
import './RegisterPage.css';

const RegisterPage = () => {
  const createNewUser = (user) => {
    fetch('https://q2edtlk17d.execute-api.us-east-1.amazonaws.com/usuario', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'x-masteraccess-token': 'VGtWWFgwdEZXVjlYU1ZoZlJFVldSVXhQVUVWU1V3PT0=',
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <RegisterHeader />
      <div className='container'>
        <div className='login-container'>
          <RegisterForm createNewUser={createNewUser} />
        </div>
        <div className='girl-container'>
          <GirlImage />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
