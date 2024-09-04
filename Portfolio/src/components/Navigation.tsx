import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }: { isActive: boolean }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          padding: '0 10px',
          color: isActive ? '#FFD700' : '#FFF'
        })}
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        style={({ isActive }: { isActive: boolean }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          padding: '0 10px',
          color: isActive ? '#FFD700' : '#FFF'
        })}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }: { isActive: boolean }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          padding: '0 10px',
          color: isActive ? '#FFD700' : '#FFF'
        })}
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        style={({ isActive }: { isActive: boolean }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          padding: '0 10px',
          color: isActive ? '#FFD700' : '#FFF'
        })}
      >
        Resume
      </NavLink>
    </nav>
  );
};

export default Navigation;
