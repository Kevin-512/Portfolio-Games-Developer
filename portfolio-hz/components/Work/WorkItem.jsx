import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

const WorkItem = ({ href, category, img, title }) => {
  return (
    <Link href={href} target="_blank" className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        {/* Displays a badge/icon in the top right of the image */}
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>
        {/* Code for background image of the work item */}
        <Image
          src={img}
          fill
          priority
          quality
          alt={title}
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      {/* Section for text and link to code */}
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3 text-cream/60">{title}</h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
