import React, { useState } from "react";
import TabItem from "./TabItem";
import { tabText, tabContent } from "./data";
import TabContent from "./TabContent";
const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChangeTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <>
      <ul className="grid grid-cols-3 gap-3">
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
          content={content.description}
          key={content.id}
          index={index}
          activeTab={activeTab}
        />
      ))}
    </>
  );
};

export default Tab;
