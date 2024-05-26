import { useState } from "react";
import TabItem from "./TabItem";
import { tabText, tabContent } from "./data";
const Tab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <ul className="grid grid-cols-3 gap-3">
      {tabText.map((item, index) => (
        <TabItem key={index} item={item} index={index} activeTab={activeTab} />
      ))}
    </ul>
  );
};

export default Tab;
