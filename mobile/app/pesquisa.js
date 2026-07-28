import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomMenu from "../src/components/ui/BottomMenu";
import Buscas from "../src/components/ui/Buscas";
import ComponenteBuscaHino from "../src/components/ui/ComponenteBuscaHino";
import Titulo from "../src/components/ui/Titulo";
import { useTheme } from "../src/contexts/ThemeContext";

export default function SearchScreen() {
  const [busca, setBusca] = useState("");
  const { isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Titulo />
      <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
        <Buscas value={busca} onChange={setBusca} />
        <ComponenteBuscaHino busca={{ busca }} />
      </ScrollView>
      <BottomMenu />
    </SafeAreaView>
  );
}

const styles = {
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
};
