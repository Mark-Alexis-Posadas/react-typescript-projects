import React, { useState } from "react";
import TabItem from "../../components/TabItem";
import { tabText, tabContent } from "./data";
import TabContent from "../../components/TabContent";
const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChangeTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="p-10">
      <ul className="grid grid-cols-3 w-full md:w-[600px] m-auto border-b border-slate-600 py-3">
        {tabText.map((item, index) => (
          <TabItem
            key={index}
            item={item}
            index={index}
            activeTab={activeTab}
            handleChangeTab={handleChangeTab}
          />
        ))}
      </ul>
      {tabContent.map((content, index) => (
        <TabContent
          title={content.title}
          content={content.description}
          key={content.id}
          index={index}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};

export default Tab;
