import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </>
  );
};

export default Homepage;
