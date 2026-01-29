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
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

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
      <Testimonial />
      <Banner />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
