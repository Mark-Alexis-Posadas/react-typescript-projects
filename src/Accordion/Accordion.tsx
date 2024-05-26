import { useState } from "react";

import { accordionData } from "./data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(accordionData[0].id);

  const toggleAccordion = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };
  return (
    <ul>
      {accordionData.map((item) => {
        const isActive = item.id === activeAccordion;

        return (
          <AccordionItem
            key={item.id}
            title={item.title}
            body={item.body}
            id={item.id}
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
            isActive={isActive}
            toggleAccordion={toggleAccordion}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
