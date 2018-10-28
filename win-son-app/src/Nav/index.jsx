import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  <nav>
    <Link to="/">
      <img src="" alt="Home" />
    </Link>
    <Link to="/about">About</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/reservations">Reservations</Link>
    <Link to="/press">Press</Link>
    <Link to="/contact">Contact</Link>
  </nav>
}

export default Nav;
