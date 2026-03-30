import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontSizeProvider } from "./src/contexts/FontSizeContext";
import { useBuscaState } from "./src/hooks/useBuscaState";
import { useHinoSelecionado } from "./src/hooks/useHinoSelecionado";
import { useModoState } from "./src/hooks/useModoState";

const queryClient = new QueryClient();

export default function App() {
  const { modo, setModo } = useModoState();
  const { busca, setBusca, isLoading: isBuscaLoading } = useBuscaState();
  const { hinoSelecionado, setHinoSelecionado } = useHinoSelecionado();

  if (isBuscaLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <FontSizeProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Hinário Mobile</Text>
            <Text>Modo: {modo}</Text>
            <Text>Busca: {busca}</Text>
          </View>
        </SafeAreaView>
      </FontSizeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
