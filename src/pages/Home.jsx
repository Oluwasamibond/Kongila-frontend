import React from "react";
import PageTitle from "../components/PageTitle";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyKongila from "../components/WhyKongila";
import HowWeWork from "../components/HowWeWork";
import Services from "../components/Services";
import TalentSection from "../components/TalentSection";
import EmployerSection from "../components/EmployerSection";
import EmployerBenefits from "../components/EmployerBenefit";

function Home() {
  return (
    <>
      <PageTitle title="Home - Kongila" />
      <Navbar />
      <Hero />
      <WhyKongila />
      <HowWeWork />
      <Services />
      <TalentSection />
      <EmployerSection />
      <EmployerBenefits />
    </>
  );
}

export default Home;
