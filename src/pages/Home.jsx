import React from "react";
import { Navbar } from "../components/Header";
import { Banner } from "@/components/BannerHome";
import { Cards } from "@/components/Cards";
import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth";

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
