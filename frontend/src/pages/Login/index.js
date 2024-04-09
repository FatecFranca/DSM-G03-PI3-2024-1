export default function Login() {
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
      {/* Header Section */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h2 className="text-2xl mb-2">
              A poucos passos de agendar seu horário!
            </h2>
            <p className="flex mb-4 justify-center items-center">
              Como deseja continuar?
            </p>
            {/* Social Media Login */}
            <button className="flex items-center justify-center mb-4 p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full">
              {/* Facebook logo */}
              <img src="face.png" alt="Facebook" className="h-6 w-6 mr-2" />
              Continue com Facebook
            </button>
            <button className="flex items-center justify-center mb-4 p-3 rounded-lg text-white bg-gray-400 hover:bg-gray-500 w-full">
              {/* Google logo */}
              <img src="google.webp" alt="Google" className="h-6 w-6 mr-2" />
              Continue com Google
            </button>
            {/* Email or Cellphone Login */}
            <div className="flex gap-4 mb-4">
              <input
                type="tel"
                id="cellphoneInput"
                placeholder="Telefone"
                className="p-3 border border-gray-300 rounded-lg flex-grow"
              />
              <input
                type="email"
                id="emailInput"
                placeholder="E-mail"
                className="p-3 border border-gray-300 rounded-lg flex-grow"
              />
            </div>
            <hr className="my-8" />
            <p className="text-center">
              Não tem uma conta?
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Criar conta
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
