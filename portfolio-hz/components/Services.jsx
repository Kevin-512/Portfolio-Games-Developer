import { IoGameController } from "react-icons/io5";
import { FaUnity, FaReact, FaJava } from "react-icons/fa";

const services = [
  {
    icon: <IoGameController className="size-12" />,
    title: "Game Designer",
    description: "Creating new and innovative ideas for endless enjoyment.",
  },
  {
    icon: <FaUnity className="size-12" />,
    title: "Unity",
    description: "Utilising the latest cutting edge technology by Unity.",
  },
  {
    icon: <FaReact className="size-12" />,
    title: "React",
    description: "Developing frontend sites for showcasing the best products.",
  },
  {
    icon: <FaJava className="size-12" />,
    title: "Java",
    description: "Object oriented expertise for developing core game concepts.",
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-content-stretch">
          {/* Subsection underneath the hero giving a brief description of skills and familiar programming languages */}
          {services.map((service, index) => {
            return (
              <li
                className="bg-cream shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
                key={index}
              >
                {service.icon}
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
