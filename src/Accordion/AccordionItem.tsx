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
        className="flex items-center justify-between cursor-pointer bg-slate-50 shadow-md p-2 rounded"
        onClick={() => toggleAccordion(id)}
      >
        <h2 className="font-bold text-green-600">{title}</h2>
        <span>
          <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
        </span>
      </li>
      {isActive && <div>{body}</div>}
    </>
  );
};

export default AccordionItem;
