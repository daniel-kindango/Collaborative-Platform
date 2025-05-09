// src/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Criar Conta</h2>
        <form>
          <div>
            <input type="text" placeholder="Nome completo" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <p>Já tem conta? <Link to="/">Entrar</Link></p>
      </div>
    </div>
  );
};

export default Signup;
