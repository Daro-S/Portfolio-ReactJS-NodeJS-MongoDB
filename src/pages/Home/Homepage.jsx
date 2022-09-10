import React from "react";

import Navbar from "../../components/HomepageComponent/Navbar";
import Header from "../../components/HomepageComponent/Header";
import Passions from "../../components/HomepageComponent/Passions";
import PortfolioInfo from "../../components/HomepageComponent/PortfolioInfo";
import Contact from "../../components/HomepageComponent/Contact";
import Footer from "../../components/HomepageComponent/Footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Passions />
      <PortfolioInfo />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
