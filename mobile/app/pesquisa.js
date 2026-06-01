import { Stack } from "expo-router";
import { ScrollView, useColorScheme } from "react-native";
import Teclado from "../../mobile/src/components/keyboard/Teclado";
import BottomMenu from "../../mobile/src/components/ui/BottomMenu";
import Buscas from "../../mobile/src/components/ui/Buscas";
import ComponenteBuscaHino from "../../mobile/src/components/ui/ComponenteBuscaHino";
import Titulo from "../../mobile/src/components/ui/Titulo";
import { useBuscaState } from "../../mobile/src/hooks/useBuscaState";
import { useModoState } from "../../mobile/src/hooks/useModoState";
export default function SearchScreen() {
  const { modo, setModo } = useModoState();
  const { busca, setBusca } = useBuscaState();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const handleSwitch = () => {
    // Limpar busca quando alternar modo
    setBusca("");
  };
  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Titulo />
      <ScrollView style={styles.content}>
        <Buscas value={busca} onChange={setBusca} />
        <ComponenteBuscaHino busca={{ busca }} />
      </ScrollView>
      <Teclado modo={modo} onLimparTudo={() => setBusca("")} />
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
