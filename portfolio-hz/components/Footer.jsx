import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary z-10">
      <div className="container mx-auto">
        {/* Display logo and copyright information */}
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light={true} />
          <div className="text-cream/70 font-light">
            Copyright &copy; 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
