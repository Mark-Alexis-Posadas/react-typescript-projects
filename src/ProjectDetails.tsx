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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      <Link to="/">
        <button className="border border-slate-400 p-3 rounded-full text-slate-400 w-[50px] h-[50px]">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>

      {renderProjectComponent()}
    </div>
  );
};

export default ProjectDetails;
