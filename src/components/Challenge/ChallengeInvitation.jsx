import React, { useState, useEffect } from 'react';
import '../Profile/Profile.css';

const ChallengeInvitation = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [sentEmail, setSentEmail] = useState('');

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    setIsValidEmail(validateEmail(value));
  }

  useEffect(() => {
    setIsValidEmail(validateEmail(inputValue));
  }, [inputValue]);

  const handleChallengeInvitation = () => {
    if (isValidEmail) {
      console.log('Invitación enviada');
      setEmailError(false);
      setSentEmail(inputValue);
    } else {
      setEmailError(true);
    }

    // TODO: Send email to the user
    fetch(
      'https://q2edtlk17d.execute-api.us-east-1.amazonaws.com/usuario/solicitud/DEAP',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
          to: 'A01424731@tec.mx',
          subject: 'Test email',
          message: 'This is a test email sent from my React.js app',
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  function validateEmail(email) {
    // Regular expression to check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className='challenge-invitation-container'>
      <div className='text-item'>
        <h2>¿Quieres poner a prueba a tus amigos?</h2>
        <p>¡Rétalos a jugar Smart Survival y demuestra que eres el mejor!</p>
        <p>
          Sólo escribe su correo electrónico y de inmediato podrás enviarles una
          invitación para jugar.
        </p>
      </div>
      <div className='send-invitation-item'>
        <input
          type='email'
          placeholder='Correo electrónico'
          onChange={handleInputChange}
          className={emailError ? 'error' : ''}
        />
        {emailError && (
          <p className='error-message'>
            Por favor, ingresa un correo electrónico válido.
          </p>
        )}
        {isValidEmail && !sentEmail && (
          <button
            className='challenge-btn'
            onClick={handleChallengeInvitation}>
            Enviar invitación
          </button>
        )}
        {sentEmail && (
          <p className='successful-invitation'>
            ¡Invitación enviada a: {sentEmail}!
          </p>
        )}
      </div>
    </div>
  );
};

export default ChallengeInvitation;
