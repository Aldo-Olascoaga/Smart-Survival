import React, { useState } from 'react';
import './ResetPassword.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsPasswordMatch(passwordValue === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setIsPasswordMatch(confirmPasswordValue === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do the password reset request
    setIsSubmitted(true);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className='forgot-password-container'>
      <h2>Cambio de contraseña</h2>
      {isSubmitted ? (
        <div className='reset-password-container'>
          <form className='reset-password-form'>
            <label htmlFor='password'>Nueva contraseña</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor='confirmPassword'>Confirmar contraseña</label>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {!isPasswordMatch && (
              <p>Las contraseñas no coinciden. Por favor, haz que coincidan.</p>
            )}
            <button
              type='submit'
              disabled={!isPasswordMatch}>
              Guardar contraseña
            </button>
          </form>
        </div>
      ) : (
        <form
          className='forgot-password-form'
          onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isEmailValid && <p>Ingresa un correo electrónico válido</p>}
          <button
            type='submit'
            disabled={!isEmailValid}>
            Cambiar contraseña
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
