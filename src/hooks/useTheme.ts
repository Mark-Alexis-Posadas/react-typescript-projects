import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<boolean>(false);

  const handleSetTheme = () => {
    setTheme((p) => !p);
    document.body.classList.toggle("dark");
  };

  return { theme, handleSetTheme };
};
