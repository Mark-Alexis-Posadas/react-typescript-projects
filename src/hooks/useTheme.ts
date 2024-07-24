import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);

  const handleSetTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return { theme, handleSetTheme };
};
