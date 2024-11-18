import { useState } from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import WorkItem from "./WorkItem";

const data = [
  {
    href: "https://hualiangz.itch.io/note-attack",
    category: "game",
    img: "/work/noteAttack.png",
    title: "Note Attack",
  },
  {
    href: "https://hualiangz.itch.io/pawns-dream",
    category: "game",
    img: "/work/pawnsDream.png",
    title: "Pawn's Dream",
  },
  {
    href: "https://hualiangz.itch.io/sleep-paralasis",
    category: "game",
    img: "/work/sleepParalysis.png",
    title: "Sleep Paralysis",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="container mx-auto mb-8">
        <Tabs className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            {/* Title for section */}
            <h2 className="h2 mb-[15px] xl:mb-0 text-cream mt-4">My Work</h2>
          </div>
          {/* Separates the content into different tabs */}
          <TabsContent className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              {data.map((item, index) => (
                <div key={index}>
                  <WorkItem {...item} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
