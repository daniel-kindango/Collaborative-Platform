// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Entrar na Plataforma</h2>
        <form>
          <div>
            <input type="email" placeholder="Email" required />
          </div>
          <div>
            <input type="password" placeholder="Senha" required />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
              <input type="checkbox" style={{ marginRight: '6px' }} /> Lembrar
            </label>
            <Link to="/forgot-password" style={{ fontSize: '14px' }}>Esqueceu a senha?</Link>
          </div>

          <button type="submit">Entrar</button>
        </form>

        <p>Não tem conta? <Link to="/signup">Criar Conta</Link></p>
      </div>
    </div>
  );
};

export default Login;
