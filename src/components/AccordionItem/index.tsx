import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
interface AccordionProps {
  title: string;
  body: string;
  id: number;
  isActive: boolean;
  toggleAccordion: (id: number) => void;
}
const AccordionItem: React.FC<AccordionProps> = ({
  title,
  body,
  id,
  isActive,
  toggleAccordion,
}: AccordionProps) => {
  return (
    <>
      <li
        className="flex items-center justify-between cursor-pointer p-2 my-2 border-t-2 border-b-2 border-black"
        onClick={() => toggleAccordion(id)}
      >
        <h2 className="font-bold text-black">{title}</h2>
        <span>
          <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
        </span>
      </li>
      {isActive && <div>{body}</div>}
    </>
  );
};

export default AccordionItem;
