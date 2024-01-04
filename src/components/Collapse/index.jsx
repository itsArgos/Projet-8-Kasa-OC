import "./collapse.scss";
import { useState } from "react";

export function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  // Chaque fois que cette fonction est appelée, elle basculera l'état de "isOpen" entre vrai ou faux.
  function open() {
    setIsOpen(!isOpen);
  }

  return (
    <details className="collapse">
      <summary onClick={open} className="collapse_content">
        <h2>{title}</h2>
        <div className="collapse_icon">
          <i className={"fa-solid fa-chevron-down"}></i>
        </div>
      </summary>
      <div className="collapse_text">{text}</div>
    </details>
  );
}
