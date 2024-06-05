import React, { useState, useEffect, useRef } from "react";
import ThemeItem from "../../components/ThemeItem";

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
  {
    id: 5,
    bgColor: "bg-blue-600",
  },
  {
    id: 6,
    bgColor: "bg-pink-600",
  },
  {
    id: 7,
    bgColor: "bg-teal-600",
  },
  {
    id: 8,
    bgColor: "bg-indigo-600",
  },
  {
    id: 9,
    bgColor: "bg-black",
  },
  {
    id: 10,
    bgColor: "bg-white",
  },
];

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || data[0].bgColor
  );
  const [chooseTheme, setChooseTheme] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (themeColor: string) => {
    setTheme(themeColor);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setChooseTheme(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <div className={`w-full min-h-screen ${theme}`}></div>
      <div className="absolute top-5 right-5 flex flex-col items-end" ref={ref}>
        <button
          className="text-white bg-black p-2 rounded"
          onClick={() => setChooseTheme((prev) => !prev)}
        >
          Choose theme
        </button>
        {chooseTheme && (
          <div className="bg-slate-700 p-2 rounded shadow-md flex items-center mt-3">
            {data.map((item) => (
              <ThemeItem
                item={item}
                key={item.id}
                handleClick={handleClick}
                theme={theme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Theme;
