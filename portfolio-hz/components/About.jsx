import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* Left Placed Images (Rook, Games Console and Mario Images)*/}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute right-2 -top-5">
                <Image
                  src="/about/rook.svg"
                  width={160}
                  height={160}
                  quality={100}
                  alt="Chess Rook"
                />
              </div>
              <div>
                <Image
                  src="/about/console.svg"
                  width={250}
                  height={250}
                  quality={100}
                  priority
                  alt="Games Console"
                />
              </div>
              <div className="absolute top-2/4 -right-8">
                <Image
                  src="/about/mario.svg"
                  width={250}
                  height={250}
                  quality={100}
                  priority
                  alt="Games Console"
                />
              </div>
            </div>
          </div>
          {/* Right Placed Text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6 ">
            <div className="text-center xl:text-left">
              {/* Title and introduction */}
              <div>
                <h2 className="h2 mb-2 text-cream">Hi, I'm Hualiang!</h2>
                <p className="text-lg text-cream/80">Games Developer</p>
              </div>
              {/* Short description of role and achievements */}
              <p className="max-w-[680px] mx-auto xl:mx-0 mb-2 text-cream/50">
                I am a recent graduate with educational background in Computer
                Science and Games Development. I'm looking to use my creativity
                and expertise in technologies to develop the best gaming
                experience around.
              </p>
              {/* Short summary of name, location and recent experience */}
              <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
                <div className="max-w-max">
                  <div className="uppercase font-bold text-cream">Name</div>
                  <p className="text-cream/50">Hualiang Zhao</p>
                </div>
                <div className="max-w-max">
                  <div className="uppercase font-bold text-cream">
                    Experience
                  </div>
                  <p className="text-cream/50">Graduated Masters</p>
                </div>
                <div className="max-w-max">
                  <div className="uppercase font-bold text-cream">Location</div>
                  <p className="text-cream/50">Manchester, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
