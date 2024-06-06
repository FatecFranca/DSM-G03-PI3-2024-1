import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Você está logado com sucesso.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  }
};

export default Dashboard;
