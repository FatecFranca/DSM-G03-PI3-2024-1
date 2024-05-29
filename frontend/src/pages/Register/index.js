import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/exemplo', {
        email,
        password,
      });

      if (response.status === 201) {
        alert('User registered successfully');
        history.push('/login');
      }
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>Register - SalonConnect</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="styles.css" />
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h2 className="text-2xl mb-2">Criar uma nova conta</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full"
              >
                Registrar
              </button>
            </form>
            <hr className="my-8" />
            <p className="text-center d-flex justify-content-center gap-3">
              Já tem uma conta?
              <div>
                <Link
                  to="/login"
                  className="inline-flex items-center custom-color text-white border-0 py-1 px-3 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
                >
                  Entrar
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
