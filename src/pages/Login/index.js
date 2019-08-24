import React, { useState } from 'react';
import './Login.css';

import { Container, Box, Buttons } from './styles';

import api from '../../services/api';

import logo from '../../images/logo.png';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSignUp = async () => {
    setRegister(true);
  };

  const handleRegister = async () => {
    const response = await api.post('/users', {
      name,
      email,
      password,
    });
  };

  return (
    <Container>
      <Box>
        <div to="" className="loginLogo">
          <img src={logo} alt="" />
          <h4>KnowShare</h4>
        </div>
        {register ? (
          <>
            <div className="loginContent">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Digite o seu nome"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite o seu email"
              />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite a sua senha"
              />
            </div>
            <Buttons>
              <button
                className="outlineButton"
                type="button"
                onClick={handleRegister}
              >
                <p>Cadastrar</p>
              </button>
            </Buttons>
          </>
        ) : (
          <>
            <div className="loginContent">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite o seu email"
              />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite a sua senha"
              />
            </div>
            <Buttons>
              <button className="outlineButton" onClick={handleSignUp}>
                <p>Cadastre-se</p>
              </button>
              <button className="buttonFilled">
                <p>Entrar</p>
              </button>
            </Buttons>
            <hr id="line" />
            <p className="loginLabel">Esqueci a senha - Termos de uso</p>
          </>
        )}
      </Box>
    </Container>
  );
}
