import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login-personas">Login Personas</Link>
        </li>
        <li>
          <Link to="/login-empresas">Login Empresas</Link>
        </li>
      </ul>
    </nav>
  );
};