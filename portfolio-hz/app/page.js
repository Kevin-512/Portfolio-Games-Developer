"use client";
import { useEffect } from "react";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Work from "@/components/Work/Work";
import ScrollButton from "@/components/ScrollButton";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div className="bg-primary">
      <Hero />
      <ScrollButton />
      <Services />
      <About />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
