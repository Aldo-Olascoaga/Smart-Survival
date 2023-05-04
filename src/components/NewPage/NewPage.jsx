import React, { useEffect } from 'react';
import './NewPage.css';
import { useParams, useNavigate } from 'react-router-dom';

const NewPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://jgvuug8gmj.execute-api.us-east-1.amazonaws.com/decodeToken`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Token is valid') {
          localStorage.setItem('token', token);
          localStorage.setItem('idUser', data.decoded.idUser);
          localStorage.setItem('username', data.decoded.username);
          localStorage.setItem('isAdmin', data.decoded.isAdmin);
          navigate('/my-profile');
        } else {
          navigate('https://main.drvblo32vuwsq.amplifyapp.com/login');
        }
      });
  }, [token, navigate]);

  return <div className='new-page'>Cargando...</div>;
};

export default NewPage;
