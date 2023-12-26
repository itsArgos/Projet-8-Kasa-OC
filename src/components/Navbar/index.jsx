import './Navbar.scss'
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar_logo'>
    <img src="logo_kasa_nav.svg" alt="Logo" />
    </div>
    <NavLink className='home' to="/">Accueil</NavLink>
    <NavLink className='about'to="/about">A propos</NavLink>
    </nav>
    );
  }