import { useParams } from "react-router-dom";
import { Footer } from "@/components/Footer";
import data from "@/assets/data/apartments.json";
import { MainWidth } from "@/components/MainWidth/MainWidth";
import { Navbar } from "../../components/Header";

export const Apartment = () => {
  const { apartmentId } = useParams();
  const apartment = data.find((card) => card.id === apartmentId);
  console.log(apartment);

  return (
    <div>
      <MainWidth>
        <Navbar />
        <h1>Appartmeent n°{apartmentId}</h1>
      </MainWidth>
      <Footer />
    </div>
  );
};
