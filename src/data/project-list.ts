import { v4 as uuidv4 } from "uuid";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface Types {
  id: string;
  title: string;
  // icon: IconProp;
}
export const projectList: Types[] = [
  { id: uuidv4(), title: "accordion" },
  { id: uuidv4(), title: "carousel" },
  { id: uuidv4(), title: "color-picker" },
  { id: uuidv4(), title: "counter" },
  { id: uuidv4(), title: "ratings" },
  { id: uuidv4(), title: "search-filtering" },
  { id: uuidv4(), title: "tab" },
  { id: uuidv4(), title: "theme" },
  { id: uuidv4(), title: "todo" },
];
