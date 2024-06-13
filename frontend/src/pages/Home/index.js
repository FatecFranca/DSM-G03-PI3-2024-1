import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Logo = {
  backgroundImage: `url(${require('../../img/logo_transparent.png')})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '100px',
  height: '55px',
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(true); // Começa visível
  const [showMap, setShowMap] = useState(false);
  const [address, setAddress] = useState('');

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const searchLocation = () => {
    if (address.trim() === '') {
      alert('Por favor, insira um endereço.');
      return;
    }
    setShowMap(true); // Mostrar o mapa ao realizar a pesquisa
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const handleFocus = () => {
    setIsVisible(false); // Esconde o ícone ao focar no input
  };

  const handleBlur = () => {
    setIsVisible(true); // Mostra o ícone ao desfocar o input
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>SalonConnect - Encontre profissionais de beleza perto de você</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Header Section */}
      <header className="text-gray-600 body-font shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-2">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <div style={Logo}></div>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Inicio
            </Link>
            <Link to="/services" className="mr-5 hover:text-gray-900">
              Serviços
            </Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">
              Sobre
            </Link>
          </nav>
          <Link
            to="/login"
            className="inline-flex items-center custom-color text-white border-0 py-1 px-3 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
          >
            Login
          </Link>
        </div>
      </header>
      {/* Main Content Section */}
      <main className="mt-10">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <div className="flex justify-center">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <input
                  type="text"
                  id="service-search"
                  name="service-search"
                  placeholder="      Pesquisar"
                  className="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-gray-500 text-base px-4 py-2"
                  value={address}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {isVisible && (
                  <div style={{ position: 'absolute', left: 10, top: 10 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#F4991A"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <button onClick={searchLocation} className="inline-flex text-white custom-color border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                Salões próximos
              </button>
            </div>
          </div>
        </div>
      </main>
      {showMap && (
        <div
          id="mapModal"
          className="fixed w-full inset-0 bg-white w-full bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white w-3/4 h-3/4 rounded-lg p-8 max-w-4xl">
            <h2 className="text-xl mb-4">Salões Próximos</h2>
            <button
              onClick={toggleMap}
              className="bg-red-500 text-white p-2 rounded mb-4 w-full"
            >
              Fechar Mapa
            </button>
            <div className="w-full h-5/6 pt-5">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyCXBCg6XPdFKwO7TUIu97a6zx7bWw4a6-A&q=${encodeURIComponent(address + ' salões')}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
