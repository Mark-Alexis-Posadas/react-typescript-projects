import React from "react";
import { Types } from "./data/project-list";
import { Link } from "react-router-dom";
import Tab from "./pages/Tab";
import Accordion from "./pages/Accordion";
import Carousel from "./pages/Carousel";
import ColorPicker from "./pages/ColorPicker";
import Counter from "./pages/Counter";
import Ratings from "./pages/Ratings";
import SearchFiltering from "./pages/SearchFiltering";
import Theme from "./pages/Theme";
import Todo from "./pages/Todo";

interface ProjectDetailsProps {
  project: Types;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { title } = project;
  const renderProjectComponent = () => {
    switch (title) {
      case "accordion":
        return <Accordion />;
      case "carousel":
        return <Carousel />;
      case "color-picker":
        return <ColorPicker />;
      case "counter":
        return <Counter />;
      case "ratings":
        return <Ratings />;
      case "search-filtering":
        return <SearchFiltering />;
      case "tab":
        return <Tab />;
      case "theme":
        return <Theme />;
      case "todo":
        return <Todo />;
      default:
        return null;
    }
  };
  return (
    <div>
      <button>
        <Link to="/">Back</Link>
      </button>
      <h2>{project.title}</h2>
      {renderProjectComponent()}
    </div>
  );
};

export default ProjectDetails;
