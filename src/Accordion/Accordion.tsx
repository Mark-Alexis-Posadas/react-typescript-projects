import React, { useState } from "react";

import { accordionData } from "./data";
import AccordionItem from "./AccordionItem";

const Accordion: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(
    accordionData[0].id
  );

  const toggleAccordion = (id: number) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };
  return (
    <ul className="mt-10 max-w-[500px]">
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
  );
};

export default Accordion;
