import React from "react";
import { Link } from "react-router-dom";
import { projectList, Types } from "./data/project-list"; // Import projectList and Types interface

const Projects: React.FC = () => {
  return (
    <nav>
      <ul>
        {projectList.map((project: Types) => (
          <li key={project.id}>
            <Link to={`/${project.title}`}>
              <h2 className="font-bold">{project.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Projects;
