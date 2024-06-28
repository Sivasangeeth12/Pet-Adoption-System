import React from "react";
import Navigationbar from "./Navigationbar";
import Navigationbar1 from "./Navigationbar1";
import Carousels from "./Carousels";
import PetList from "./PetList";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Hero from "./Hero";
import AdoptForm from "./AdoptPet/AdoptForm";
const Home = () => {
  return (
    <>
      <Navigationbar />
      <Navigationbar1 />
      <Carousels />
      <HeroSection />
      <AdoptForm />
      <PetList />
      <Hero />

      <Footer />
    </>
  );
};

export default Home;
