import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import FaqHeroSection from "../Components/FAQ/FaqHeroSection";
import BusinessIdeasSection from "../Components/Home/BusinessIdeasSection";
import GetToKnowSection from "../Components/Home/GetToKnowSection";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <FaqHeroSection />
      <BusinessIdeasSection />
      <GetToKnowSection />
      <Footer />
    </div>
  );
};

export default FAQ;
