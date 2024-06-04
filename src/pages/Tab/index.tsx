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
      <ul className="grid grid-cols-3  p-2 rounded-full bg-blue-600 w-[500px] m-auto">
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
