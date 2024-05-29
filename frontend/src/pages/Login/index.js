import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Login successful');
        history.push('/dashboard'); // Redireciona para o dashboard ou página inicial após o login bem-sucedido
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid email or password');
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
      <link rel="stylesheet" href="styles.css" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h2 className="text-2xl mb-2">
              Bem-vindo de volta!
            </h2>
            <p className="flex mb-4 justify-center items-center">
              Faça login para continuar
            </p>
            {/* Social Media Login */}
            <button className="flex items-center justify-center mb-4 p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full">
              <img src="face.png" alt="Facebook" className="h-6 w-6 mr-2" />
              Continue com Facebook
            </button>
            <button className="flex items-center justify-center mb-4 p-3 rounded-lg text-white bg-gray-400 hover:bg-gray-500 w-full">
              <img src="google.webp" alt="Google" className="h-6 w-6 mr-2" />
              Continue com Google
            </button>
            {/* Email and Password Login */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 mb-4">
                <input
                  type="email"
                  id="emailInput"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg flex-grow"
                  required
                />
                <input
                  type="password"
                  id="passwordInput"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg flex-grow"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full"
              >
                Login
              </button>
            </form>
            <hr className="my-8" />
            <p className="text-center d-flex justify-content-center gap-3">
              Não tem uma conta?
              <div>
                <Link
                  to="/register"
                  className="inline-flex items-center custom-color text-white border-0 py-1 px-3 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
                >
                  Criar conta
                </Link>
              </div>
              <div>
                <Link
                  to="/"
                  className="inline-flex items-center custom-color text-white border-0 py-1 px-3 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
                >
                  Voltar
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
