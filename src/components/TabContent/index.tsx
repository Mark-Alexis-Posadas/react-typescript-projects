import React from "react";

interface ContentProp {
  title: string;
  content: string;
  index: number;
  activeTab: number;
}
const TabContent: React.FC<ContentProp> = ({
  title,
  content,
  index,
  activeTab,
}) => {
  return (
    <div
      className={`${
        activeTab === index ? "block" : "hidden"
      } p-3  bg-blue-600 w-[500px] m-auto mt-4 rounded`}
    >
      <h1 className="font-bold text-2xl text-white mb-2">{title}</h1>
      <p className="text-white text-sm">{content}</p>
    </div>
  );
};

export default TabContent;
