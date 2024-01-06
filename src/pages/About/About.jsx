import "./about.scss";
import { Footer } from "@/components/footer";
import { MainWidth } from "@/components/MainWidth/mainWidth";
import { Banner } from "@/components/BannerAbout";
import { Collapse } from "@/components/Collapse";
import { Navbar } from "@/components/Navbar";
import aboutData from "@/assets/data/about.json";

export const About = () => {
  return (
    <div className="about_container">
      <Navbar />
      <MainWidth>
        <Banner />
        <div>
          {aboutData.map((content) => {
            return (
              <div className="about_content" key={content.id}>
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
