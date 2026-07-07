import { useState } from "react";
import { ScrollView, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Teclado from "../src/components/keyboard/Teclado";
import BottomMenu from "../src/components/ui/BottomMenu";
import Buscas from "../src/components/ui/Buscas";
import ComponenteBuscaHino from "../src/components/ui/ComponenteBuscaHino";
import Titulo from "../src/components/ui/Titulo";
import { useModoState } from "../src/hooks/useModoState";

export default function SearchScreen() {
  const { modo } = useModoState();
  const [busca, setBusca] = useState("");
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Titulo />
      <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
        <Buscas value={busca} onChange={setBusca} />
        <ComponenteBuscaHino busca={{ busca }} />
      </ScrollView>
      <Teclado modo={modo} />
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
