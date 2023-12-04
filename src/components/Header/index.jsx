import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return <header>
        <img className='logo' src="/Logo.svg" alt="Logo" />
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>;
  }
  