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
        activeTab === index &&
        "border-r border-t border-l border-black font-bold text-purple-700"
      } text-black p-2  text-center cursor-pointer`}
      onClick={() => handleChangeTab(index)}
    >
      {item}
    </li>
  );
};

export default TabItem;
