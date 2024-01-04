import "./cards.scss";
import { Link } from "react-router-dom";
import data from "@/assets/data/apartments.json";

function Card({ title, cover, id }) {
  return (
    <Link to={`/apartment/${id}`}>
      <article
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <h2>{title}</h2>
      </article>
    </Link>
  );
}

export function Cards() {
  // Ici on déclare une fonction qui récupère le tableau, boucle dessus et renvoie X fois une Card
  function getCard() {
    return data.map((card) => {
      return <Card title={card.title} cover={card.cover} id={card.id} />;
    });
  }

  return <section className="grid">{getCard()}</section>;
}
