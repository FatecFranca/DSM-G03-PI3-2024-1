import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://dsm-g03-pi3-2024-1-n0e0.onrender.com/cliente/login',
        {
          loginUsu: username,
          senhaUsu: password,
        },
      );

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token); // Armazena o token no localStorage
        setMessage('Login bem-sucedido');
        navigate('/'); // Redireciona para o dashboard após o login
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Credenciais inválidas');
      } else {
        setMessage('Erro ao fazer login');
      }
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>Login - SalonConnect</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl mb-6">Bem-vindo de volta!</h2>
            <Link
              to="/"
              className="inline-flex items-center custom-color text-white rounded-full h-10 px-2 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
          </div>
          {message && <p className="text-red-500 mb-4">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 mb-4">
              <input
                type="username"
                id="usernameInput"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full"
                required
              />
              <input
                type="password"
                id="passwordInput"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-lg text-white bg-custom-orange"
            >
              Login
            </button>
          </form>
          <hr className="my-8" />
          <p className="text-center">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
