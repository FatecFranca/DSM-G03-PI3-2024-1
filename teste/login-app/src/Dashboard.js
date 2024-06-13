import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'https://dsm-g03-pi3-2024-1-n0e0.onrender.com/Cliente',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do dashboard', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Renderize os dados do dashboard */}
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.nomeCompleto}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
