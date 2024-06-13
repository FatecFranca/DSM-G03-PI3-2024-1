import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
    sexo: '',
    email: '',
    telefone: '',
    uf: '',
    cep: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    loginUsu: '',
    senhaUsu: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://dsm-g03-pi3-2024-1-n0e0.onrender.com/Cliente',
        formData,
      );
      if (response.status === 201) {
        setMessage('Conta criada com sucesso!');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      setMessage('Erro ao criar a conta. Tente novamente.');
    }
  };

  const Logo = {
    backgroundImage: `url(${require('../../img/logo_transparent.png')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '55px',
  };

  const Person = {
    backgroundImage: `url(${require('../../img/pessoa.png')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '50%',
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center justify-center min-h-screen bg-gray-100 w-8/12 text-xs">
        <div className="w-3/4 m-5 flex rounded-lg shadow-lg">
          <div className="bg-white w-3/4 p-8 pt-0  rounded-lg shadow-lg relative">
            <div className="flex items-center justify-center flex-col">
              <div style={Logo}></div>
              <h6 className=" mb-4">Faça seu cadastro</h6>
            </div>
            {message && (
              <p className="mb-1 text-center text-red-500">{message}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nomeCompleto" className="block mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dataNascimento" className="block mb-2">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cpf" className="block mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="sexo" className="block mb-2">
                    Sexo
                  </label>
                  <input
                    type="text"
                    id="sexo"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block mb-2">
                    Telefone
                  </label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="uf" className="block mb-2">
                    UF
                  </label>
                  <input
                    type="text"
                    id="uf"
                    name="uf"
                    value={formData.uf}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cep" className="block mb-2">
                    CEP
                  </label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bairro" className="block mb-2">
                    Bairro
                  </label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="rua" className="block mb-2">
                    Rua
                  </label>
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    value={formData.rua}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="numero" className="block mb-2">
                    Número
                  </label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="complemento" className="block mb-2">
                    Complemento
                  </label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="loginUsu" className="block mb-2">
                    Usuário
                  </label>
                  <input
                    type="text"
                    id="loginUsu"
                    name="loginUsu"
                    value={formData.loginUsu}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="senhaUsu" className="block mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="senhaUsu"
                    name="senhaUsu"
                    value={formData.senhaUsu}
                    onChange={handleChange}
                    className="p-3 h-9 bg-custom-gray rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 bg-custom-orange w-48 mt-4"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
          <div className="w-2/4 bg-white bg-slate-200	 p-8 pt-0 shadow-2xl  relative">
            <div className="text-center d-flex justify-center gap-3 h-full">
              <div
                className="flex justify-center items-center w-full"
                style={{ height: '97%' }}
              >
                <div style={Person}></div>
              </div>
              <div className="flex justify-end">
                <Link
                  to="/"
                  className="inline-flex items-center custom-color shadow-2xl text-white border-0 py-1 px-6 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
                >
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
