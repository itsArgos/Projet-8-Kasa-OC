import "./collapse.scss";
import { useState } from "react";

export function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!Array.isArray(text) && typeof text !== "string") {
    return (
      <p>Erreur ! Le texte doit être un tableau ou une chaîne de caractères.</p>
    );
  }

  // Chaque fois que cette fonction est appelée, elle basculera l'état de "isOpen" entre vrai ou faux.
  function open() {
    setIsOpen(!isOpen);
  }

  function contentText() {
    if (typeof text === "string") {
      return <p className="collapse_text">{text}</p>;
    }

    return (
      <ul className="collapse_text">
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="collapse_container">
      <details className="collapse">
        <summary onClick={open} className="collapse_content">
          <h2>{title}</h2>
          <div className="collapse_icon">
            <i className={"fa-solid fa-chevron-up"}></i>
          </div>
        </summary>
      </details>
      {contentText()}
    </div>
  );
}
