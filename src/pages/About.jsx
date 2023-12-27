import React from "react";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth";
import { Banner } from "@/components/BannerAbout";

export const About = () => {
  return (
    <div>
      <MainWidth>
        <Navbar />
        <Banner />
      </MainWidth>
      <Footer />
    </div>
  );
};
