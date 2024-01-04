import "./navbar.scss";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar_logo" src="/logo_kasa_nav.svg" alt="Logo" />
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        A propos
      </NavLink>
    </nav>
  );
}
