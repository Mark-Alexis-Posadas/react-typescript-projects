import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EmployeeManagement() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl mb-5">
        Please visit these links to see the demo and the code.
      </h1>
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://github.com/Mark-Alexis-Posadas/employee-management-system"
          target="_blank"
          className="text-[#999] border-dashed border-2 border-[#999] p-2 rounded flex items-center gap-3"
        >
          Source
          <FontAwesomeIcon className="text-2xl" icon={faGithub} />
        </a>

        <a
          href="https://employee-management-system-ruby.vercel.app/"
          target="_blank"
          className="text-[#999] border-dashed border-2 border-[#999] p-2 rounded flex items-center gap-3"
        >
          Demo
          <FontAwesomeIcon
            className="text-2xl"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </div>
  );
}
