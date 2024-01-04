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
      <MainWidth>
        <Navbar />
        <Carrousel pictures={apartment.pictures} />
        <div className="title_host_content">
          <div>
            <Title title={apartment.title} />
          </div>
          <div>
            <Host />
          </div>
        </div>
        <Paragraph location={apartment.location} />
        <div className="tag_rating_content">
          <div>
            <Tag tags={apartment.tags} />
          </div>
          <div>
            <Rating />
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
