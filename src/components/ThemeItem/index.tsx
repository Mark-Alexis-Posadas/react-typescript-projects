import React from "react";

interface ThemeItemProps {
  item: {
    id: number;
    bgColor: string;
  };
  handleClick: (themeColor: string) => void;
  theme: string;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ item, handleClick, theme }) => {
  return (
    <button
      className={`text-white w-10 h-10 rounded-full mr-2 ${item.bgColor}`}
      style={theme === item.bgColor ? { border: "3px solid #222" } : {}}
      onClick={() => handleClick(item.bgColor)}
    ></button>
  );
};

export default ThemeItem;
