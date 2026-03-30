import { createContext, useContext, useEffect, useState } from "react";

const FontSizeContext = createContext(null);

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within FontSizeProvider");
  }
  return context;
};

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("fontSize");
    return saved ? parseInt(saved, 10) : 16;
  });

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
