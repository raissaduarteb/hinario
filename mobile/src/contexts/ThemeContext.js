import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

/**
 * Hook para gerenciar o estado do tema (Claro ou Escuro), com persistência em
 * AsyncStorage. Quando o usuário nunca escolheu um tema, segue o esquema de
 * cores do sistema.
 */
export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setThemeState] = useState(null);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const saved = await AsyncStorage.getItem("theme");
        if (saved) setThemeState(saved);
      } catch (error) {
        console.error("Erro ao carregar theme:", error);
      }
    };
    loadTheme();
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    AsyncStorage.setItem("theme", newTheme);
  };

  const theme_ = theme ?? (systemScheme === "dark" ? "escuro" : "claro");
  const isDark = theme_ === "escuro";

  return (
    <ThemeContext.Provider value={{ theme: theme_, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
