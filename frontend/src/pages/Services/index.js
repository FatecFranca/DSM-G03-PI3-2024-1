import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Carousel, Typography, IconButton } from '@material-tailwind/react';

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
        <div className="container mx-auto flex px-5 py-24 items-center justify-start flex-col h-screen">
          <div className="text-center w-full flex justify-center">
            <div className="card bg-base-100 w-2/12 w-5/12 shadow-2xl bg-white shadow-yellow rounded p-3 flex">
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

          <div className="flex flex-wrap justify-around gap-x-32 gap-y-12 w-full h-1/2 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-base-100 w-2/12 h-2/3 mt-3 shadow-2xl bg-white shadow-yellow rounded p-3 flex flex-col cursor-pointer"
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
                <div className="w-6/12 h-full mb-4">
                  <div className="w-full flex justify-center items-center h-full">
                    <div className="w-96 h-full flex justify-center items-center">
                      <div
                        className="w-full h-full"
                        style={service.style}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-12">
                  <div className="flex flex-col">
                    <div className="w-full flex justify-center">
                      <p className="title-font text-2xl mb-4 font-medium text-gray-900">
                        {service.title}
                      </p>
                    </div>
                    <div className="p-4 flex h-1/6">
                      <div
                        className="flex justify-center align-center"
                        style={Cabeleleira}
                      ></div>
                      <div className="text-center w-full flex justify-center align-center h-full">
                        <p className="title-font text-xl mt-10 font-medium text-gray-900">
                          Serviços do Salão - Unidade Centro
                        </p>
                        <p className="title-font text-xl mt-10 font-medium text-yellow-400">
                          ★ 4.5 (200 avaliações)
                        </p>
                      </div>
                    </div>
                    <Carousel
                      className="rounded-xl"
                      prevArrow={({ handlePrev }) => (
                        <IconButton
                          variant="text"
                          color="white"
                          size="lg"
                          onClick={handlePrev}
                          className="!absolute bottom-4 !left-4 p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 bg-custom-orange w-48 mt-4"
                        >
                          Voltar
                        </IconButton>
                      )}
                      nextArrow={({ handleNext }) => (
                        <IconButton
                          variant="text"
                          color="black"
                          size="lg"
                          onClick={handleNext}
                          className="!absolute bottom-4 !right-4 p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 bg-custom-orange w-48 mt-4"
                        >
                          Próximo
                        </IconButton>
                      )}
                    >
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 grid h-full w-full place-items-center">
                          <div className="w-full">
                            <Typography
                              variant="lead"
                              color="black"
                              className="mb-12 opacity-80"
                            >
                              <div className="w-full flex justify-center flex-col">
                                <div className="w-full flex justify-center text-lg font-medium card bg-base-100  bg-gray-200 rounded p-3">
                                  Informe o tipo de seu cabelo:
                                </div>
                                <div className="w-full flex justify-center flex-col p-6">
                                  <div className="flex w-full p-6 px-12 text-xl font-medium justify-between">
                                    <div class="inline-flex items-center">
                                      <label
                                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="tipoCabelo"
                                      >
                                        <input
                                          name="color"
                                          type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-600 before:opacity-0 before:transition-opacity checked:border-yellow-600 checked:before:bg-gray-900 hover:before:opacity-10"
                                          id="tipoCabelo"
                                        />
                                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="#ca8a04"
                                          >
                                            <circle
                                              data-name="ellipse"
                                              cx="8"
                                              cy="8"
                                              r="8"
                                            ></circle>
                                          </svg>
                                        </span>
                                      </label>
                                    </div>{' '}
                                    <p>Curto</p> <p>R$ 50</p>
                                  </div>
                                  <hr />
                                  <div className="flex w-full p-6 px-12 text-xl font-medium justify-between">
                                    <div class="inline-flex items-center">
                                      <label
                                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="tipoCabelo"
                                      >
                                        <input
                                          name="color"
                                          type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-600 before:opacity-0 before:transition-opacity checked:border-yellow-600 checked:before:bg-gray-900 hover:before:opacity-10"
                                          id="tipoCabelo"
                                        />
                                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="#ca8a04"
                                          >
                                            <circle
                                              data-name="ellipse"
                                              cx="8"
                                              cy="8"
                                              r="8"
                                            ></circle>
                                          </svg>
                                        </span>
                                      </label>
                                    </div>{' '}
                                    <p>Médio</p> <p>R$ 60</p>
                                  </div>
                                  <hr />
                                  <div className="flex w-full p-6 px-12 text-xl font-medium justify-between">
                                    <div class="inline-flex items-center">
                                      <label
                                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="tipoCabelo"
                                      >
                                        <input
                                          name="color"
                                          type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-600 before:opacity-0 before:transition-opacity checked:border-yellow-600 checked:before:bg-gray-900 hover:before:opacity-10"
                                          id="tipoCabelo"
                                        />
                                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="#ca8a04"
                                          >
                                            <circle
                                              data-name="ellipse"
                                              cx="8"
                                              cy="8"
                                              r="8"
                                            ></circle>
                                          </svg>
                                        </span>
                                      </label>
                                    </div>{' '}
                                    <p>Longo</p> <p>R$ 70</p>
                                  </div>
                                  <hr />
                                  <div className="flex w-full p-6 px-12 text-xl font-medium justify-between">
                                    <div class="inline-flex items-center">
                                      <label
                                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="tipoCabelo"
                                      >
                                        <input
                                          name="color"
                                          type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-600 before:opacity-0 before:transition-opacity checked:border-yellow-600 checked:before:bg-gray-900 hover:before:opacity-10"
                                          id="tipoCabelo"
                                        />
                                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="#ca8a04"
                                          >
                                            <circle
                                              data-name="ellipse"
                                              cx="8"
                                              cy="8"
                                              r="8"
                                            ></circle>
                                          </svg>
                                        </span>
                                      </label>
                                    </div>{' '}
                                    <p>Cacheado</p> <p>R$ 60</p>
                                  </div>
                                  <hr />
                                  <div className="flex w-full p-6 px-12 text-xl font-medium justify-between">
                                    <div class="inline-flex items-center">
                                      <label
                                        class="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="tipoCabelo"
                                      >
                                        <input
                                          name="color"
                                          type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-600 before:opacity-0 before:transition-opacity checked:border-yellow-600 checked:before:bg-gray-900 hover:before:opacity-10"
                                          id="tipoCabelo"
                                        />
                                        <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="#ca8a04"
                                          >
                                            <circle
                                              data-name="ellipse"
                                              cx="8"
                                              cy="8"
                                              r="8"
                                            ></circle>
                                          </svg>
                                        </span>
                                      </label>
                                    </div>{' '}
                                    <p>Chapinha</p> <p>R$ 50</p>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 grid h-full w-full items-center flex">
                          <div className="w-full h-full">
                            <Typography
                              variant="lead"
                              color="black"
                              className="mb-12 opacity-80"
                            >
                              <div className="w-full flex justify-center flex-col">
                                <div className="w-full flex justify-center text-lg font-medium card bg-base-100 gap-2 bg-gray-200 rounded p-3">
                                  Selecione o profissional{' '}
                                  <p className="rounded-full px-2 bg-gray-800 text-white">
                                    obrigatório
                                  </p>
                                </div>
                              </div>
                              <div className="w-full flex justify-center flex-col p-6">
                                <div className="flex w-full px-12 text-xl font-medium justify-between">
                                  <div className="inline-flex items-center">
                                    <label
                                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                                      htmlFor="profissional1"
                                    >
                                      <input
                                        name="profissional"
                                        type="radio"
                                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 transition-all checked:border-yellow-600 checked:bg-yellow-600"
                                        id="profissional1"
                                      />
                                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-3.5 w-3.5"
                                          viewBox="0 0 16 16"
                                          fill="#ca8a04"
                                        >
                                          <circle cx="8" cy="8" r="8"></circle>
                                        </svg>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="mt-10 p-5 flex h-48 justify-start w-full align-center col-span-2 rounded-full">
                                    <div className="flex h-48 justify-start w-full align-center col-span-2 rounded-full">
                                      <div className="w-36">
                                        <div
                                          className="flex justify-center align-center col-span-2 rounded-full"
                                          style={service.style}
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="h-full flex justify-center align-center mt-5 p-5">
                                      <p>Nome</p>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div className="flex w-full px-12 text-xl font-medium justify-between">
                                  <div className="inline-flex items-center">
                                    <label
                                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                                      htmlFor="profissional2"
                                    >
                                      <input
                                        name="profissional"
                                        type="radio"
                                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-600 transition-all checked:border-yellow-600 checked:bg-yellow-600"
                                        id="profissional2"
                                      />
                                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-3.5 w-3.5"
                                          viewBox="0 0 16 16"
                                          fill="#ca8a04"
                                        >
                                          <circle cx="8" cy="8" r="8"></circle>
                                        </svg>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="mt-10 p-5 flex h-48 justify-start w-full align-center col-span-2 rounded-full">
                                    <div className="flex h-48 justify-start w-full align-center col-span-2 rounded-full">
                                      <div className="w-36">
                                        <div
                                          className="flex justify-center align-center col-span-2 rounded-full"
                                          style={service.style}
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="h-full flex justify-center align-center mt-5 p-5">
                                      <p>Nome</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 grid h-full w-full items-end">
                          <div className="w-full h-full">
                            <Typography
                              variant="lead"
                              color="black"
                              className="mb-12 opacity-80"
                            >
                              <div className="w-full flex justify-center flex-col">
                                <div className="w-full flex justify-center text-lg font-medium card bg-base-100  bg-gray-200 rounded p-3">
                                  Selecione o horário:
                                </div>
                              </div>
                              <div className="w-full h-full flex justify-center items-center flex-col">
                                <div className="grid grid-cols-3 gap-10 w-full p-6 mt-12">
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="7:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      7:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="8:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      8:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="9:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      9:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="10:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      10:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="11:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      11:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="12:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      12:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="13:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      13:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="14:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      14:00
                                    </span>
                                  </label>
                                  <label className="flex items-center justify-center border border-gray-300 rounded px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
                                    <input
                                      type="radio"
                                      name="time"
                                      value="15:00"
                                      className="hidden peer"
                                    />
                                    <span className="peer-checked:bg-yellow-600 peer-checked:text-white px-4 py-2 w-full text-center rounded">
                                      15:00
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </Carousel>
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
