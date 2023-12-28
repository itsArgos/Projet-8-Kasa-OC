import React from "react";

import { Banner } from "@/components/BannerHome";
import { Cards } from "@/components/Cards";
import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth/MainWidth";
import { Navbar } from "../../components/Header";

export const Home = () => {
  return (
    <div>
      <MainWidth>
        <Navbar />
        <Banner />
        <Cards />
      </MainWidth>
      <Footer />
    </div>
  );
};
