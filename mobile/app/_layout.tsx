import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { FontSizeProvider } from "@/src/contexts/FontSizeContext";
import { ThemeProvider, useTheme } from "@/src/contexts/ThemeContext";

const queryClient = new QueryClient();

function Navigation() {
  const { isDark } = useTheme();

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pesquisa" />
        <Stack.Screen name="selecao" />
        <Stack.Screen name="favoritos" />
        <Stack.Screen name="hino/[id]" />
      </Stack>
      <StatusBar style={isDark ? "light" : "dark"} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FontSizeProvider>
          <Navigation />
        </FontSizeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
