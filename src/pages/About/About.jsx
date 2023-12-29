import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth/MainWidth";
import { Banner } from "@/components/BannerAbout";
import { Collapse } from "@/components/Collapse";
import { Navbar } from "@/components/Header";
import aboutData from "@/assets/data/about.json";

export const About = () => {
  return (
    <div>
      <MainWidth>
        <Navbar />
        <Banner />
        <div>
          {aboutData.map((content) => {
            return (
              <div key={content.id}>
                <Collapse title={content.title} text={content.text} />
              </div>
            );
          })}
        </div>
      </MainWidth>
      <Footer />
    </div>
  );
};
