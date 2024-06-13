import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://dsm-g03-pi3-2024-1-n0e0.onrender.com/Cliente/login',
        {
          loginUsu: username,
          senhaUsu: password,
        },
      );

      if (response.status === 200) {
        setMessage('Login bem-sucedido');
        const { token } = response.data;
        localStorage.setItem('token', token); // Armazenar o token
        setAuth(true);
        navigate('/dashboard');
      }
    } catch (error) {
      setMessage('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {message && <p>{message}</p>}
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
