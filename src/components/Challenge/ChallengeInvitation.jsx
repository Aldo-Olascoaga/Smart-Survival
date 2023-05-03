import React, { useState, useEffect } from 'react';
import '../Profile/Profile.css';

const ChallengeInvitation = () => {
  const [inputValue, setInputValue] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [sentUsername, setSentUsername] = useState('');

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    setIsValidUsername(validateUsername(value));
  }

  useEffect(() => {
    setIsValidUsername(validateUsername(inputValue));
  }, [inputValue]);

  const handleChallengeInvitation = () => {
    if (isValidUsername) {
      console.log('Invitación enviada');
      setUsernameError(false);
      setSentUsername(inputValue);
    } else {
      setUsernameError(true);
    }

    // TODO: Send email to the user
    fetch(
      `https://q2edtlk17d.execute-api.us-east-1.amazonaws.com/usuario/solicitud/${inputValue}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
          to: '',
          username: inputValue,
          subject: 'Invitación de juego',
          message:
            '¡Hola! Te invito a jugar Smart Survival y poner a prueba tus conocimientos. ¿Te atreves?',
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  function validateUsername(username) {
    // Regular expression to check if the username is valid
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(username);
  }

  return (
    <div className='challenge-invitation-container'>
      <div className='text-item'>
        <h2>¿Quieres poner a prueba a tus amigos?</h2>
        <p>¡Rétalos a jugar Smart Survival y demuestra que eres el mejor!</p>
        <p>
          Sólo escribe su nombre de usuario y de inmediato podrás enviarles una
          invitación para jugar.
        </p>
      </div>
      <div className='send-invitation-item'>
        <input
          type='text'
          placeholder='Nombre de usuario'
          onChange={handleInputChange}
          className={usernameError ? 'error' : ''}
        />
        {usernameError && (
          <p className='error-message'>
            Por favor, ingresa un nombre de usuario válido.
          </p>
        )}
        {isValidUsername && !sentUsername && (
          <button
            className='challenge-btn'
            onClick={handleChallengeInvitation}>
            Enviar invitación
          </button>
        )}
        {sentUsername && (
          <p className='successful-invitation'>
            ¡Invitación enviada a: {sentUsername}!
          </p>
        )}
      </div>
    </div>
  );
};

export default ChallengeInvitation;
