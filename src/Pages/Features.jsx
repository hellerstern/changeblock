import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import BusinessIdeasSection from "../Components/Home/BusinessIdeasSection";
import GetToKnowSection from "../Components/Home/GetToKnowSection";
import FeaturesHero from "../Components/Features/FeaturesHero";
import FeaturesDetail from "../Components/Features/FeaturesDetail";

const Features = () => {
  return (
    <div>
      <Navbar />
      <FeaturesHero />
      <FeaturesDetail/>
      <GetToKnowSection />
      <Footer />
    </div>
  );
};

export default Features;
