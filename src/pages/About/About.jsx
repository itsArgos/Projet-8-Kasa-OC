import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth/MainWidth";
import { Banner } from "@/components/BannerAbout";
import { Collapse } from "../../components/Collapse";
import { Navbar } from "../../components/Header";

export const About = () => {
  return (
    <div>
      <MainWidth>
        <Navbar />
        <Banner />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </MainWidth>
      <Footer />
    </div>
  );
};
