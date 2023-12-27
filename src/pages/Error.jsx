import React from "react";
import { Navbar } from "../components/Header";
import { Error404 } from "../components/Error";
import { Footer } from "../components/Footer";
import { MainWidth } from "../components/MainWidth";

export const Error = () => {
  return (
    <div>
      <MainWidth>
        <Navbar />
        <Error404 />
      </MainWidth>
      <Footer />
    </div>
  );
};
