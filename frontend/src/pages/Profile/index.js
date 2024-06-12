import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  
  const Logo = {
    backgroundImage: `url(${require('../../img/logo_transparent.png')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '55px',
  };


  return (
    <>
      <header className="text-gray-600 body-font shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-2">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
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
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Encontre seu profissional
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore os melhores salões perto de você para todas as suas
              necessidades de beleza, de cortes de cabelo a manicure
            </p>
            <div className="flex justify-center">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <input
                  type="text"
                  id="service-search"
                  name="service-search"
                  placeholder="Pesquisa de serviços (por exemplo, corte de cabelo, manicure)"
                  className="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-500 text-base px-4 py-2"
                />
              </div>
              <button className="inline-flex text-white custom-color border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Procurar
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={openModal}
                className="inline-flex text-white custom-color border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
              >
                Enter Address
              </button>
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <div
          id="addressModal"
          className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl mb-4">Qual seu endereço?</h2>
            <input
              type="text"
              id="addressInput"
              placeholder="Digite seu endereço"
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <button
              id="useLocation"
              className="p-2 border border-gray-300 rounded w-full mb-4"
            >
              Use minha localização
            </button>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white p-2 rounded w-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
