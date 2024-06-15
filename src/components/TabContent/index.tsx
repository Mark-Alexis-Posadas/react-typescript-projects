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
      } p-3 w-full md:w-[600px] m-auto mt-4 rounded`}
    >
      <h1 className="font-bold text-2xl text-purple-700 mb-2">{title}</h1>
      <p className="text-black text-sm">{content}</p>
    </div>
  );
};

export default TabContent;
