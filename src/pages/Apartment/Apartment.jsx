import "./apartment.scss";
import { useParams } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth/MainWidth";
import { Navbar } from "@/components/Navbar";
import { Carrousel } from "../../components/Apartment/Carrousel";
import { Tag } from "../../components/Apartment/Tags";
import { Collapse } from "../../components/Collapse";
import { Title } from "../../components/Apartment/Title";
import { Paragraph } from "../../components/Apartment/Paragraph";
import { Rating } from "../../components/Apartment/Rating";
import { Host } from "../../components/Apartment/Host";
import ApartmentData from "@/assets/data/apartments.json";

export const Apartment = () => {
  const { apartmentId } = useParams();
  const apartment = ApartmentData.find((card) => card.id === apartmentId);

  return (
    <div className="apartment_container">
      <Navbar />
      <MainWidth>
        <Carrousel pictures={apartment.pictures} />
        <div className="apartment_content">
          <div className="title_p_tag_content">
            <Title title={apartment.title} />
            <Paragraph location={apartment.location} />
            <Tag tags={apartment.tags} />
          </div>
          <div className="host_rating_content">
            <Host name={apartment.host.name} picture={apartment.host.picture} />
            <Rating rating={apartment.rating} />
          </div>
        </div>
        <div key={apartment.id} className="apartment_collapse">
          <Collapse title="Description" text={apartment.description} />
          <Collapse title="Équipements" text={apartment.equipments} />
        </div>
      </MainWidth>
      <Footer />
    </div>
  );
};
