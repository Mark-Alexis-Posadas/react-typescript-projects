import React from "react";

interface ContentProp {
  content: string;
  index: number;
  activeTab: number;
}
const TabContent: React.FC<ContentProp> = ({ content, index, activeTab }) => {
  return (
    <div
      className={`${
        activeTab === index ? "block" : "hidden"
      } p-3  bg-blue-600 w-[500px] m-auto mt-4 rounded`}
    >
      {content}
    </div>
  );
};

export default TabContent;
