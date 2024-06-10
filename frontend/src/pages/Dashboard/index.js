
// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:8080/cliente', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do cliente:', error);
        navigate('/login');
      });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map(cliente => (
          <li key={cliente._id}>{cliente.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
