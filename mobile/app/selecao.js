import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, Text, useColorScheme, View } from "react-native";
import BottomMenu from "../src/components/ui/BottomMenu";
import Titulo from "../src/components/ui/Titulo";
export default function SelectionScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  // Placeholder para Seleção - você pode implementar funcionalidade de seleção de hinos favoritos
  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Titulo />
      <ScrollView style={styles.content}>
        <View style={styles.placeholderContainer}>
          <Text
            style={[
              styles.placeholderText,
              isDark && styles.placeholderTextDark,
            ]}
          >
            Página de Seleção
          </Text>
          <Text
            style={[
              styles.placeholderSubText,
              isDark && styles.placeholderSubTextDark,
            ]}
          >
            Implemente funcionalidade de seleção de hinos favoritos aqui
          </Text>
        </View>
      </ScrollView>
      <BottomMenu />
    </SafeAreaView>
  );
}
const styles = ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#1e1e1e",
  },
  content: {
    flex: 1,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  placeholderTextDark: {
    color: "#fff",
  },
  placeholderSubText: {
    fontSize: 14,
    color: "#666",
  },
  placeholderSubTextDark: {
    color: "#999",
  },
});
