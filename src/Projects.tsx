import React from "react";
import { Link } from "react-router-dom";
import { projectList, Types } from "./data/project-list"; // Import projectList and Types interface
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
faArrowUpRightFromSquare;
const Projects: React.FC = () => {
  return (
    <nav>
      <ul className="grid grid-cols-3 gap-3">
        {projectList.map((project: Types) => (
          <li key={project.id} className="bg-[#1f1f1f] p-3 rounded">
            <Link to={`/${project.title}`}>
              <header className="flex items-center justify-between">
                <FontAwesomeIcon
                  className="text-2xl text-[#999]"
                  icon={faFolder}
                />
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className="text-2xl text-[#999]"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="text-2xl text-[#999]"
                    icon={faArrowUpRightFromSquare}
                  />
                </div>
              </header>
              <h2 className="font-bold text-[#999] capitalize">
                {project.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Projects;
