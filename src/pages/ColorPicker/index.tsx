import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import colors from "./data";
import ColorPickerItems from "../../components/ColorPickerItems";

const ColorPicker: React.FC = () => {
  const [hexColor, setHexColor] = useState<string>(colors[0].hex);
  const [copyToClipboard, setCopyToClipBoard] = useState<boolean>(false);

  const handleCopy = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    console.log("Event:", e);
    navigator.clipboard
      .writeText(hexColor)
      .then(() => setCopyToClipBoard(true))
      .catch((e) => setCopyToClipBoard(e));
  };

  const handleClick = (color: string) => {
    setHexColor(color);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyToClipBoard(false);
    }, 2000);
  }, [copyToClipboard]);

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center w-full lg:w-[900px] m-auto">
      <div className="bg-white shadow-[0 5px 10px rgba(0, 0, 0, 0.12)] rounded transition-[all 0.2s ease]">
        <h1 className="font-bold text-4xl md:text-8xl mb-20">Color Picker</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div
            className="w-full md:w-40 h-40 rounded md:mr-7 mb-5 md:mb-0"
            style={{ backgroundColor: hexColor }}
          ></div>
          <div className="flex flex-col">
            {copyToClipboard && (
              <p className="text-green-500">Copied to clipboard</p>
            )}
            <div className="border border-slate-200 p-2 rounded flex items-center justify-between w-[200px]">
              <h3 className="font-bold">
                HEX: <span className="font-light">{hexColor}</span>
              </h3>
              <FontAwesomeIcon
                icon={faCopy}
                className="cursor-pointer"
                onClick={(e) => handleCopy(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-start md:justify-center bg-white shadow-md p-3 mt-10 rounded">
        <ColorPickerItems
          colorData={colors}
          handleClick={handleClick}
          hexColor={hexColor}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
