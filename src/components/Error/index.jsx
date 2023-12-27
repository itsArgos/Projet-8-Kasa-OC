import "./error.scss";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className="container">
      <p className="error-404">404</p>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="link-home" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}