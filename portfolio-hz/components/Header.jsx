import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full absolute py-8 xl:py-[48px] z-30">
      <div className="container mx-auto">
        {/* If screen size is large then features are placed in a line, otherwise they are loaded in a column */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          <Logo />
          <div className="flex items-center gap-12">
            {/* Showcases the different text links to navigate to a section of the page */}
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex gap-6"
              linkStyles="text-cream font-semibold text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer uppercase hover:underline"
            />
            {/* Displays the social buttons next to the text links */}
            <Socials
              containerStyles="flex items-center gap-2"
              iconStyles="text-xl w-[32px] h-[32px] bg-cream text-primary flex items-center justify-center rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
