import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [fontSize, setFontSize] = useState(16);
  const [isLoading, setIsLoading] = useState(true);

  // Carrega fontSize do AsyncStorage na inicialização
  useEffect(() => {
    const loadFontSize = async () => {
      try {
        const saved = await AsyncStorage.getItem("fontSize");
        if (saved) {
          setFontSize(parseInt(saved, 10));
        }
      } catch (error) {
        console.error("Erro ao carregar fontSize:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFontSize();
  }, []);

  // Persiste fontSize no AsyncStorage
  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem("fontSize", fontSize.toString());
    }
  }, [fontSize, isLoading]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
