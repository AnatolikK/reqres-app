import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Главная</Link>
    <Link to="/register">Регистрация</Link>
    <Link to="/myprofile">Профиль</Link>
  </nav>
);

export default Navbar;
