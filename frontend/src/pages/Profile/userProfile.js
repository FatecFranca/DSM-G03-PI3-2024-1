import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const [userData, setUserData] = useState({
    nome: '',
    dataNascimento: '',
    cpf: '',
    sexo: '',
    email: '',
    telefone: '',
    endereco: '',
    cep: '',
    cidade: '',
    estado: '',
    tipoCabelo: '',
    tipoPele: '',
    preferenciasServicos: '',
    areaInteresse: '',
    saloesFavoritos: ''
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/profile');
      setUserData(response.data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/user/profile', userData);
      console.log(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Failed to update user data:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Perfil do Usuário</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 mb-4">
              <label htmlFor="nome" className="block font-medium mb-1">Nome Completo</label>
              <input type="text" id="nome" name="nome" value={userData.nome} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            {/* Add other input fields for user data */}
            <div className="col-span-2 mb-4">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Salvar Alterações</button>
              <button type="button" onClick={() => setEditing(false)} className="ml-2 text-gray-600 hover:text-gray-800">Cancelar</button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium">Nome Completo:</label>
              <span>{userData.nome}</span>
            </div>
          </div>
          <button onClick={() => setEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Editar Perfil</button>
        </div>
      )}
    </div>
  );
}
