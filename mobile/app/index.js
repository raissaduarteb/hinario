import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, useColorScheme, View } from "react-native";
import Teclado from "../src/components/keyboard/Teclado";
import BarraPesquisa from "../src/components/ui/BarraPesquisa";
import BottomMenu from "../src/components/ui/BottomMenu";
import ComponenteBuscaHino from "../src/components/ui/ComponenteBuscaHino";
import Switch from "../src/components/ui/Switch";
import Titulo from "../src/components/ui/Titulo";
import { useBuscaState } from "../src/hooks/useBuscaState";
import { useHinoSelecionado } from "../src/hooks/useHinoSelecionado";
import { useModoState } from "../src/hooks/useModoState";
export default function Home() {
  const router = useRouter();
  const { modo, setModo } = useModoState();
  const { busca, setBusca } = useBuscaState();
  const { hinoSelecionado, setHinoSelecionado } = useHinoSelecionado();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const handleSwitch = () => {
    // Limpar teclado quando alternar modo
    setBusca("");
  };
  const handleSearchChange = (texto) => {
    setBusca(texto);
    if (texto.length > 0) {
      router.push("/pesquisa");
    }
  };
  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Titulo />
      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Switch
            options={["Hinário", "Harpa Cristã"]}
            selectedOption={modo}
            onChange={(value) => setModo(value)}
            onSwitch={handleSwitch}
          />
          <BarraPesquisa value={busca} onChange={handleSearchChange} />
        </View>
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
  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
};
