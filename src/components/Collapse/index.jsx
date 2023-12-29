import "./collapse.scss";
import React, { useState } from "react";

export function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  // Chaque fois que cette fonction est appelée, elle basculera l'état de "isOpen" entre vrai ou faux.
  function open() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse">
      <div onClick={open} className="collapse_content">
        <h2>{title}</h2>
        <div className="collapse_icon">
          <i className={"fa-solid fa-chevron-" + (isOpen ? "up" : "down")}></i>
        </div>
      </div>
      <div className="collapse_text">
        {isOpen && <div className="text_content">{text}</div>}
      </div>
    </div>
  );
}
