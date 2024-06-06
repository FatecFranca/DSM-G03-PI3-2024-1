import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>
        SalonConnect - Encontre profissionais de beleza perto de você
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Tailwind CSS for styling */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      {/* Custom Stylesheet */}
      <link rel="stylesheet" href="styles.css" />
      {/* Header Section */}
      <header className="text-gray-600 body-font shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-2">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <img
              src="logo_transparent.png"
              alt="SalonConnect Logo"
              className="logo"
            />
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
            <Link to="/contact" className="mr-5 hover:text-gray-900">
              Contato
            </Link>
          </nav>
          <button
            onClick={() => (window.location.href = 'login.html')}
            className="inline-flex items-center custom-color text-white border-0 py-1 px-3 focus:outline-none hover:bg-opacity-90 rounded text-base mt-4 md:mt-0"
          >
            Login
          </button>
        </div>
      </header>
      {/* Main Content Section */}
      <main className="mt-10">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sobre o SalonConnect
            </h1>
            <p className="mb-8 leading-relaxed">
              O SalonConnect é a plataforma ideal para você encontrar
              profissionais de beleza perto de você. Explore os melhores salões
              e serviços para todas as suas necessidades de beleza.
            </p>
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
