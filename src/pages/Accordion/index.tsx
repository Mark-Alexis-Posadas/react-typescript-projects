import React, { useState } from "react";
import { accordionData } from "./data";
import AccordionItem from "../../components/AccordionItem";
import SourceCode from "../../components/SourceCode";

const Accordion: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(
    accordionData[0].id
  );

  const toggleAccordion = (id: number) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };
  return (
    <div className="lg:max-w-[1200px] m-auto min-h-screen p-3 lg:p-0">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl lg:text-9xl my-10">Question?</h1>
        <SourceCode link="https://github.com/Mark-Alexis-Posadas/react-typescript-projects/blob/main/src/pages/Accordion/index.tsx" />
      </div>
      <ul className="w-full">
        {accordionData.map((item) => {
          const isActive = item.id === activeAccordion;

          return (
            <AccordionItem
              key={item.id}
              title={item.title}
              body={item.body}
              id={item.id}
              isActive={isActive}
              toggleAccordion={toggleAccordion}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
