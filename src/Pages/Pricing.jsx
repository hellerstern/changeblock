import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import GetToKnowSection from "../Components/Home/GetToKnowSection";
import PricingHeader from "../Components/Pricing/PricingHeader";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingHeader/>
      <GetToKnowSection />
      <Footer />
    </div>
  );
};

export default Pricing;
