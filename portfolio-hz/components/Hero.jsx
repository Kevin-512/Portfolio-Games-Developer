"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "next/link";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <div className="xl:hidden relative w-[300px] h-[300px] z-40">
            <Image
              src="/hero/profile_pic.jpg"
              alt=""
              fill
              quality="100"
              priority
              className="object-contain rounded-full pb-5"
            />
          </div>
          <h1 className="h1 font-bold">
            I <span className="text-accent">Design And Develop</span> Games
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Using the latest technology to build innovative and creative games
            with endless immersiveness.
          </p>
        </div>

        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[500px] h-[600px] bottom-0 z-40 left-[12.5vw]">
            <Image
              src="/hero/profile_pic.jpg"
              alt=""
              fill
              quality="100"
              priority
              className="object-contain rounded-t-full"
            />
          </div>
          <div className="hidden xl:flex absolute bottom-0 right-5">
            <Image src="/hero/polygons.svg" alt="" height={1500} width={1500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
