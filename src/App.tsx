import React from "react";
import { Route, Routes } from "react-router-dom";
import { projectList, Types } from "./data/project-list";
import ProjectDetails from "./ProjectDetails";
import Projects from "./Projects";

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-5 md:p-10 lg:p-14 font-jost">
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
