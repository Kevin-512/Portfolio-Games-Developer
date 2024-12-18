import Image from "next/image";
import React from "react";
import { SiBoardgamegeek } from "react-icons/si";

const Card = ({
  type,
  logoURL,
  position,
  duration,
  description,
  company,
  institution,
  category,
  name,
  icon,
}) => {
  return (
    <div className="w-full h-[300px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[270px] border border-accent/80 bg-cream/90 rounded-[8px]">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-cream flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex gap-2">
              {/* Accompanying icon alongside titles */}
              <SiBoardgamegeek className="text-primary mt-1.5 items-center" />
              <h3 className="text-lg font-semibold text-primary">
                {/* Display in correct section depending on category */}
                {type === "experience"
                  ? position
                  : type === "education"
                  ? position
                  : category}
              </h3>
            </div>
            <p className="text-base">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              {type === "skill" ? (
                // icon for skill
                <div className="w-max xl:w-[300px] h-full relative flex items-center justify-center">
                  <div className="text-5xl text-primary/90">{icon}</div>
                </div>
              ) : (
                // render logo for experience
                <div className="relative w-[300px] h-[38px] xl:h-[44px]">
                  <Image src={logoURL} fill alt="" className="object-contain" />
                </div>
              )}
              {/* Display the location of the skill */}
              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
                  {type === "experience"
                    ? company
                    : type === "education"
                    ? institution
                    : type === "skill"
                    ? name
                    : null}
                </h3>
                <p className="text-base max-w-[660px]">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
