import React from "react";
import AboutPage from "./AboutPage";
import ContactPage from "./contact-page/ContactPage";
import Footer from "./Footer";
import HeaderWithNav from "./HeaderWithNav";
import NameAnimation from "./NameAnimation";
import SkillsPage from "./skills-page/SkillsPage";
import ResumePage from "./ResumePage";
import PortfolioHomePage from "./PortfolioHomePage";
import ServicesPage from "./ServicesPage";
import TestimonialPage from "./TestimonialPage";
import BacktoTopBtn from "./BacktoTopBtn";
// import BlogPage from "./Blog/BlogPage";
// import FactnStat from "./skills-page/FactnStat";

const Homepage = () => {
  return (
    <div id="topPage" className="topPage">
      <HeaderWithNav />

      <NameAnimation />

      <main id="main">
        <AboutPage />

        {/* <FactnStat /> */}

        <SkillsPage />

        <ResumePage />

        <PortfolioHomePage />

        <ServicesPage />

        <TestimonialPage />

        {/* <BlogPage /> */}

        <ContactPage />
      </main>

      <Footer />

      <BacktoTopBtn />
    </div>
  );
};

export default Homepage;
