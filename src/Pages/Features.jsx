import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import BusinessIdeasSection from "../Components/Home/BusinessIdeasSection";
import GetToKnowSection from "../Components/Home/GetToKnowSection";
import FeaturesHero from "../Components/Features/FeaturesHero";
import FeaturesDetail from "../Components/Features/FeaturesDetail";
import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <Navbar />
      <FeaturesHero />
      <FeaturesDetail />
      <GetToKnowSection />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* max-width: 1440px;
  margin: auto; */
`;

export default Features;
