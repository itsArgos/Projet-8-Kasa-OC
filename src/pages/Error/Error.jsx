import React from "react";
import { Error404 } from "@/components/Error";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Error = () => {
  return (
    <div>
      <Navbar />
      <Error404 />
      <Footer />
    </div>
  );
};
