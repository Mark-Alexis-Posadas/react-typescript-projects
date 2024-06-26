import { v4 as uuidv4 } from "uuid";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface Types {
  id: string;
  title: string;
  description: string;
  // icon: IconProp;
}
export const projectList: Types[] = [
  {
    id: uuidv4(),
    title: "accordion",
    description:
      "This project demonstrates an accordion component built using React, Tailwind CSS for styling, and React Hooks for state management. It allows users to expand and collapse sections to show and hide content.",
  },
  {
    id: uuidv4(),
    title: "carousel",
    description:
      "This project is a carousel component built using React, Tailwind CSS, and React Hooks. It allows users to navigate through a set of images or content.",
  },
  { id: uuidv4(), title: "color-picker", description: "test" },
  { id: uuidv4(), title: "counter", description: "test" },
  { id: uuidv4(), title: "ratings", description: "test" },
  { id: uuidv4(), title: "search-filtering", description: "test" },
  {
    id: uuidv4(),
    title: "tab",
    description:
      "This project is a tabbed interface built with React, utilizing Tailwind CSS for styling and React Hooks for state management. The project provides a simple and intuitive way to navigate between different sections or content within a single page application.",
  },
  {
    id: uuidv4(),
    title: "theme",
    description:
      "This project demonstrates a theme switcher built using React, Tailwind CSS, and React Hooks. It allows users to switch between different themes.",
  },
  {
    id: uuidv4(),
    title: "todo",
    description:
      "This is a Todo List application built with React, Tailwind CSS, and React Hooks. Users can add, edit, and delete tasks.",
  },
];
