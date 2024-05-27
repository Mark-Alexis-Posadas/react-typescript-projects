import React from "react";

interface ItemProp {
  item: string;
  index: number;
  activeTab: number;
  handleChangeTab: (index: number) => void;
}
const TabItem: React.FC<ItemProp> = ({
  item,
  index,
  activeTab,
  handleChangeTab,
}) => {
  return (
    <li
      className={`${
        activeTab === index ? "bg-green-500 text-white" : "bg-white text-black"
      } p-2 rounded text-center cursor-pointer`}
      onClick={() => handleChangeTab(index)}
    >
      {item}
    </li>
  );
};

export default TabItem;
