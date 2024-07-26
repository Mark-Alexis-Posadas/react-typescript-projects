import React from "react";
import { Route, Routes } from "react-router-dom";
import { projectList, Types } from "./data/project-list";
import ProjectDetails from "./ProjectDetails";
import Projects from "./Projects";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  // const { theme, handleSetTheme } = useTheme();
  return (
    <div className="bg-slate-50 dark:bg-black min-h-screen p-5 md:p-10 lg:p-14 font-jost">
      {/* <button
        className="mb-10 text-2xl dark:text-yellow-400"
        onClick={handleSetTheme}
      >
        <FontAwesomeIcon icon={theme ? faSun : faMoon} />
      </button> */}
      <Routes>
        <Route path="/" element={<Projects />} />
        {projectList.map((project: Types) => (
          <Route
            key={project.id}
            path={`/${project.title}`}
            element={<ProjectDetails project={project} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
