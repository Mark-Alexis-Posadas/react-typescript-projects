import React from "react";
import { Types } from "./data/project-list"; // Import Types interface
import { Link } from "react-router-dom";

interface ProjectDetailsProps {
  project: Types;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div>
      <button>
        <Link to="/">Back</Link>
      </button>
      <h2>{project.title}</h2>
      {/* Render additional details about the project */}
    </div>
  );
};

export default ProjectDetails;
