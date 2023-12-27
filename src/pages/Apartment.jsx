import { useParams } from "react-router-dom";
import data from "@/assets/data/apartments.json";

export const Apartment = () => {
  const { apartmentId } = useParams();
  const apartment = data.find((card) => card.id === apartmentId);
  console.log(apartment);

  return (
    <div>
      <h1>Appartmeent n°{apartmentId}</h1>
    </div>
  );
};
