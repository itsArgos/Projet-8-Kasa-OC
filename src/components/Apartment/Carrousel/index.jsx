import "./carrousel.scss";
import React, { useState } from "react";

export const Carrousel = ({ pictures }) => {
  /*
   * useState renvoie TOUJOURS un tableau avec deux items :
   * 1. la valeur passée en paramètre de useState => ici = 0 (l'index pour trouver la bonne image dans pictures)
   * 2. une fonction qui permet de modifier la valeur passé ci-dessus. Elle prend un unique paramètre la nouvelle valeur pour modifier la valeur ci-dessus.
   *
   * Pour le 1. on donne le nom qu'on veut, ce sera une constante avec ce nom
   * Pour le 2. on met set + le nom de la constante ci-dessus
   *
   * Attention ! useState ne doit être utilisée que pour les variables qu'on souhaite "écouter". Car dès que la variable est modifiée tout le composant est re-rendu.
   */
  const [pictureIndex, setPictureIndex] = useState(0);

  const nextImage = () => {
    setPictureIndex((prevImage) => (prevImage + 1) % pictures.length);
  };

  const prevImage = () => {
    setPictureIndex(
      (prevImage) => (prevImage - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carousel_container">
      <button className="btn_left" onClick={nextImage}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <img src={pictures[pictureIndex]} alt="" />
      <button className="btn_right" onClick={prevImage}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
