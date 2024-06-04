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
        className="flex flex-col justify-between cursor-pointer p-2 my-2 border-t-2 border-b-2 border-black"
        onClick={() => toggleAccordion(id)}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-black">{title}</h2>
          <span>
            <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
          </span>
        </div>
        {isActive && <div>{body}</div>}
      </li>
    </>
  );
};

export default AccordionItem;
