import { Link } from 'react-router-dom';

export default function About() {
  const Logo = {
    backgroundImage: `url(${require('../../img/logo_transparent.png')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '55px',
  };

  const Funcionarios = {
    backgroundImage: `url(${require('../../img/funcionarios.jpg')})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: '80vh',
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
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full bg-white bg-slate-20 p-8 shadow-2xl">
            <div className="flex justify-center">
              <div style={Logo}></div>
            </div>
            <p className="mb-8 mt-3 title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900 leading-relaxed">
              O SalonConnect é a sua plataforma de referência para encontrar os
              melhores profissionais de beleza na sua região. Descubra salões de
              excelência e serviços personalizados que atendem a todas as suas
              necessidades de beleza.
            </p>
          </div>
          <div className="text-center lg:w-2/3 w-full bg-white bg-slate-20 p-8 shadow-2xl">
            <div className="flex justify-center">
              <div className="h-48" style={Funcionarios}></div>
            </div>
            <p className="mb-8 mt-3 title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900 leading-relaxed">
              O melhor lugar para encontrar profissionais de beleza e encontrar
              o que seu estilo de vida precisa. Acesse nosso site e encontre os
              melhores salões de beleza para voce e seus clientes.{' '}
            </p>

            <div className="flex justify-center">
              <div style={Logo}></div>
            </div>

            <p className="mb-8 mt-3 title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900">
              Descubra a experiência definitiva em cuidados com os cabelos no
              Salão Beleza Suprema. Nossa missão é proporcionar a você um
              atendimento personalizado e de alta qualidade, destacando sua
              beleza única e realçando sua confiança. Com uma equipe de
              profissionais altamente qualificados e apaixonados pelo que fazem,
              garantimos que cada visita ao nosso salão seja uma experiência
              transformadora e revitalizante.
            </p>

            <div className="flex justify-center">
              <div style={Logo}></div>
            </div>

            <div className='title-font sm:text-1xl text-1xl mt-3 mb-4 font-medium text-gray-900'>
              <h4 className="text-2xl font-bold mb-4">Serviços</h4>
              <ul className="list-disc list-inside text-left mx-auto mb-8">
                <li className="mb-2">
                  <strong>Cortes Personalizados:</strong> Desde cortes clássicos
                  até os mais modernos e ousados, nossos estilistas estão
                  prontos para criar o visual perfeito para você.
                </li>
                <li className="mb-2">
                  <strong>Coloração:</strong> Transforme seu visual com as mais
                  recentes técnicas de coloração, incluindo balayage, luzes,
                  mechas e tintura global.
                </li>
                <li className="mb-2">
                  <strong>Tratamentos Capilares:</strong> Oferecemos uma gama de
                  tratamentos para todos os tipos de cabelo, incluindo
                  hidratação profunda, reconstrução capilar e alisamentos.
                </li>
                <li className="mb-2">
                  <strong>Penteados para Ocasiões Especiais:</strong> Se você
                  tem um evento especial, casamento ou festa, conte com nossa
                  expertise para criar penteados deslumbrantes que farão você
                  brilhar.
                </li>
                <li className="mb-2">
                  <strong>Barbearia:</strong> Para os homens, oferecemos cortes,
                  aparos de barba e cuidados específicos que garantem um visual
                  impecável.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
