import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

export default function Services() {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const openModal = (index) => {
    setModalIsOpen(index);
  };

  const closeModal = () => {
    setModalIsOpen(null);
  };

  const Logo = {
    backgroundImage: `url(${require('../../img/logo_transparent.png')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '55px',
  };

  const Cabeleleira = {
    backgroundImage: `url(${require('../../img/marcacabeleleira.png')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '13vw',
    height: '100%',
  };

  const services = [
    {
      style: {
        backgroundImage: `url(${require('../../img/cabelo1.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Cabelo de Noiva',
      price: 'A partir de 200$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/cabelo2.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Tintura de cabelo',
      price: 'A partir de 50$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/cabelo3.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Cabelo masculino',
      price: 'A partir de 10$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/cabelo4.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Penteado feminino',
      price: 'A partir de 10$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/cabelo2.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Pintura de cabelo',
      price: 'A partir de 50$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/cabelo1.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Cabelo de noiva',
      price: 'A partir de 200$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/cuidado.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Cuidados e tratamentos',
      price: 'A partir de 150$',
    },
    {
      style: {
        backgroundImage: `url(${require('../../img/pedicure.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60%',
      },
      title: 'Manicure & Pedicure',
      price: 'A partir de 75$',
    },
  ];

  return (
    <>
      <meta charSet="UTF-8" />
      <title>
        SalonConnect - Encontre profissionais de beleza perto de você
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="styles.css" />
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
            <Link to="/contact" className="mr-5 hover:text-gray-900">
              Contato
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
      <main className="mt-10">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-full">
          <div className="text-center w-full flex justify-center">
            <div className="card bg-base-100 w-2/12 w-5/12 shadow-2xl bg-white shadow-black rounded p-3 flex">
              <div
                className="flex justify-center align-center col-span-2"
                style={Cabeleleira}
              ></div>
              <div className="text-center w-full flex justify-center align-center h-full">
                <p className="title-font text-xl mb-4 font-medium text-gray-900">
                  Serviços do Salão - Unidade Centro
                </p>
                <p className="title-font text-xl mb-4 font-medium text-yellow-400">
                  ★ 4.5 (200 avaliações)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-around gap-x-32 gap-y-12 w-full h-screen mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-base-100 w-2/12 mt-3 shadow-2xl bg-white shadow-black rounded p-3 flex flex-col cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div style={service.style}></div>
                <p className="title-font text-xl font-bold">{service.title}</p>
                <p>{service.price}</p>
              </div>
            ))}
          </div>

          {services.map((service, index) => (
            <Modal
              key={index}
              isOpen={modalIsOpen === index}
              onRequestClose={closeModal}
              contentLabel={service.title}
              className="fixed inset-0 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75 transition-opacity"
              overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            >
              <div className="bg-white rounded-lg p-6 w-3/4 h-5/6 flex">
                <div className="w-6/12 h-96 mb-4">
                  <div className="w-full" style={service.style}></div>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Fechar
                  </button>
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="w-full flex justify-center">
                      <p className="title-font text-2xl mb-4 font-medium text-gray-900">
                        {service.title}
                      </p>
                    </div>
                    <div className="p-4 flex">
                      <div
                        className="flex justify-center align-center"
                        style={Cabeleleira}
                      ></div>
                      <div className="text-center w-full flex justify-center align-center h-full">
                        <p className="title-font text-xl mb-4 font-medium text-gray-900">
                          Serviços do Salão - Unidade Centro
                        </p>
                        <p className="title-font text-xl mb-4 font-medium text-yellow-400">
                          ★ 4.5 (200 avaliações)
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center text-lg font-medium card bg-base-100 shadow-2xl bg-white shadow-black rounded p-3">
                      Selecione o tipo desejado:
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          ))}
        </div>
      </main>
    </>
  );
}
