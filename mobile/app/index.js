import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Teclado from "../src/components/keyboard/Teclado";
import BarraPesquisa from "../src/components/ui/BarraPesquisa";
import BottomMenu from "../src/components/ui/BottomMenu";
import Switch from "../src/components/ui/Switch";
import Titulo from "../src/components/ui/Titulo";
import { useTheme } from "../src/contexts/ThemeContext";
import { useModoState } from "../src/hooks/useModoState";

export default function Home() {
  const router = useRouter();
  const { modo, setModo } = useModoState();
  const { isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Titulo />
      <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.searchBar}>
          <Switch
            options={["Hinário", "Harpa Cristã"]}
            selectedOption={modo}
            onChange={setModo}
          />
          <BarraPesquisa
            value=""
            onChange={() => {}}
            editable={false}
            onPress={() => router.push("/pesquisa")}
          />
        </View>
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
  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
};
