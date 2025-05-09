// src/ForgotPassword.js
import React from 'react';
import './styles/Auth.css';

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Recuperar Senha</h2>
        <form>
          <div>
            <input type="email" placeholder="Digite seu email" required />
          </div>
          <button type="submit">Enviar Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
