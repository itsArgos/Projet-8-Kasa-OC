import React from "react";
import { Error404 } from "@/components/Error";
import { Footer } from "@/components/Footer";
import { MainWidth } from "@/components/MainWidth/MainWidth";
import { Navbar } from "@/components/Navbar";

export const Error = () => {
  return (
    <div>
      <Navbar />
      <MainWidth>
        <Error404 />
      </MainWidth>
      <Footer />
    </div>
  );
};
