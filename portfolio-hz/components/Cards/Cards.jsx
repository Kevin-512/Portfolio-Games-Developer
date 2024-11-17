"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaJava, FaPython, FaUnity } from "react-icons/fa";

const journey = [
  {
    type: "experience",
    company: "Manchester Metropolitan University",
    logoURL: "/journey/MMU_logo.svg",
    position: "Front and Backend Developer",
    duration: "May 2023 - July 2023",
    description:
      "Software Engineer for a live mobile application called Smarter Thinking which allows user to enter in their negative thought and allow them to think logically and judge if the thought was helpful or not",
  },
  {
    type: "experience",
    company: "Boomball Extreme",
    logoURL: "/journey/boomballLogo.png",
    position: "Software Engineer",
    duration: "May 2024 - Present",
    description:
      "Games designer and programmer for a multiplayer fast action game where players battle in a head to head to see who can score the most points on a football inspired environement.",
  },
  {
    type: "education",
    institution: "Manchester Metropolitan University",
    logoURL: "/journey/MMU_logo.svg",
    position: "BSc Computer Science",
    duration: "2019 - 2023",
    description:
      "Learned about a variety of programming languages including Python, Java and C. Explored various algorithms and procedures important for software development.",
  },
  {
    type: "education",
    institution: "Manchester Metropolitan University",
    logoURL: "/journey/MMU_logo.svg",
    position: "MSc Computer Games Development",
    duration: "2023 - 2024",
    description:
      "Harnessed the power of new games development technology such as Unity. Applied knowledge of C# to implement behaviour within games to produce immesive experiences.",
  },
  {
    type: "skill",
    category: "Programming",
    name: "Python",
    icon: <FaPython />,
    description: "",
  },
  {
    type: "skill",
    category: "Programming",
    name: "Java",
    icon: <FaJava />,
    description: "",
  },
  {
    type: "skill",
    category: "Programming",
    name: "Unity",
    icon: <FaUnity />,
    description: "",
  },
];

const Cards = () => {
  return (
    <Tabs
      defaultValue="experience"
      className="w-full flex flex-col items-center"
    >
      <TabsList className="border border-cream">
        <TabsTrigger value="experience" className="hover:text-cream text-cream/40">
          Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="hover:text-cream text-cream/40">
          Education
        </TabsTrigger>
        <TabsTrigger value="skills" className="hover:text-cream text-cream/40">
          My Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience" className="w-full">
        <div>
          {journey
            .filter((item) => item.type === "experience")
            .map((card, index) => {
              return <Card key={index} {...card} />;
            })}
        </div>
      </TabsContent>
      <TabsContent value="education" className="w-full">
        <div>
          {journey
            .filter((item) => item.type === "education")
            .map((card, index) => {
              return <Card key={index} {...card} />;
            })}
        </div>
      </TabsContent>
      <TabsContent value="skills" className="w-full">
        <div>
          {journey
            .filter((item) => item.type === "skill")
            .map((card, index) => {
              return <Card key={index} {...card} />;
            })}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Cards;
