import React, { useState, useEffect } from "react";
const data = [
  {
    id: 1,
    bgColor: "bg-green-600",
  },
  {
    id: 2,
    bgColor: "bg-purple-600",
  },
  {
    id: 3,
    bgColor: "bg-yellow-600",
  },

  {
    id: 4,
    bgColor: "bg-red-600",
  },
];

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || data[0].bgColor
  );
  const [chooseTheme, setChooseTheme] = useState<boolean>(false);

  const handleClick = (themeColor: string) => {
    setTheme(themeColor);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <div className={`w-full min-h-screen ${theme}`}></div>
      <div className="absolute top-5 right-5 flex flex-col items-end">
        <button
          className="text-white bg-black p-2 rounded"
          onClick={() => setChooseTheme((p) => !p)}
        >
          Choose theme
        </button>
        {chooseTheme && (
          <div className="bg-slate-50 p-2 rounded shadow-md flex items-center">
            {data.map((item) => (
              <button
                key={item.id}
                className={`text-white w-10 h-10 rounded-full mr-2 ${item.bgColor}`}
                style={
                  theme === item.bgColor ? { border: "3px solid #222" } : {}
                }
                onClick={() => handleClick(item.bgColor)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Theme;
