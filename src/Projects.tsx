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
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {projectList.map((project: Types) => (
          <li key={project.id} className="bg-white p-3 rounded group">
            <Link to={`/${project.title}`}>
              <header className="flex items-center justify-between py-2">
                <FontAwesomeIcon
                  className="text-2xl text-[#999] group-hover:text-green-200"
                  icon={faFolder}
                />
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className="text-2xl text-[#999] group-hover:text-green-200"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="text-2xl text-[#999] group-hover:text-green-200"
                    icon={faArrowUpRightFromSquare}
                  />
                </div>
              </header>
              <h2 className="font-bold text-[#999] capitalize">
                {project.title}
              </h2>
              <p className="text-[#666] text-sm my-2">{project.description}</p>
              <ul className="flex flex-wrap items-center gap-3">
                {project.tags.map((item, index) => (
                  <li
                    key={index}
                    className="group-hover:bg-green-200 group-hover:text-white text-sm text-green-500 border border-green-500 py-1 px-2 bg-green-100 rounded-full flex items-center justify-center p-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Projects;
