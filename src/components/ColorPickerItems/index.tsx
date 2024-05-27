import React from "react";

interface ColorPickerItemsType {
  colorData: { id: number; hex: string }[];
  hexColor: string;
  handleClick: (color: string) => void;
}

const ColorPickerItems: React.FC<ColorPickerItemsType> = ({
  colorData,
  hexColor,
  handleClick,
}) => {
  return (
    <>
      {colorData.map((color) => (
        <div
          onClick={() => handleClick(color.hex)}
          key={color.id}
          className="w-10 h-10 cursor-pointer border"
          style={{
            backgroundColor: color.hex,
            border: hexColor === color.hex ? "2px solid #222" : "none",
            borderRadius: "2px",
          }}
        ></div>
      ))}
    </>
  );
};

export default ColorPickerItems;
