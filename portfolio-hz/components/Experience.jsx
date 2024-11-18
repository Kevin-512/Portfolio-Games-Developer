import Cards from "./Cards/Cards";

const Experience = () => {
  return (
    <section className="" id="experience">
      <div className="container mx-auto">
        {/* Title for section */}
        <h2 className="h2 mb-[30px] text-cream mt-4">
          Education and Experience
        </h2>
        {/* Section for displaying the collection of education and experiences */}
        <Cards />
      </div>
    </section>
  );
};

export default Experience;
