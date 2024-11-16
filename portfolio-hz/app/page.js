"use client";
import { useEffect } from "react";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import Services from "@/components/Services";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div>
      <Hero />
      <ScrollButton />
      <Services/>
      <About />
      <Work />
      <Experience />
      <div className="bg-amber-500 h-[500px]"></div>
    </div>
  );
};

export default Home;
