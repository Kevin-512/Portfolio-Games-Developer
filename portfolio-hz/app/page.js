import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />

      <About />
      <Work />
      <Education />
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
