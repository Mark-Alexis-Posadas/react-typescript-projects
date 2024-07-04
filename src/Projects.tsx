import React from "react";
import { Link } from "react-router-dom";
import { projectList, Types } from "./data/project-list";
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
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projectList.map((project: Types) => (
          <li key={project.id} className="bg-white p-3 rounded">
            <Link to={`/${project.title}`}>
              <header className="flex items-center justify-between py-2">
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
              <h2 className="font-bold text-[#999] capitalize mb-2">
                {project.title}
              </h2>
              <p className="text-[#666] text-sm">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Projects;
