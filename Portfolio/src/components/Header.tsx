import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ flex: '1' }}>
        <Navigation />
      </div>
      <h1 style={{ textAlign: 'center', flex: '1', margin: 0 }}>Axel's Portfolio</h1>
      <div style={{ flex: '1' }}></div>
    </header>
  );
};

export default Header;
