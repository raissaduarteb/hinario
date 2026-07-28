import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { Stack, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RefHino from "../src/components/hymn/RefHino";
import BottomMenu from "../src/components/ui/BottomMenu";
import LetrasHinosBusca from "../src/components/ui/LetrasHinosBusca";
import LinhaBusca from "../src/components/ui/LinhaBusca";
import Loading from "../src/components/ui/Loading";
import Titulo from "../src/components/ui/Titulo";
import { useTheme } from "../src/contexts/ThemeContext";
import { fetchRepertorioAtivo } from "../src/utils/api/repertorios";

const formatarData = (data) => {
  const [, mes, dia] = data.split("-");
  return `${dia}/${mes}`;
};

export default function SelectionScreen() {
  const { isDark } = useTheme();
  const router = useRouter();
  const [abertos, setAbertos] = useState(new Set());
  const initialized = useRef(false);

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["repertorio", 5],
    queryFn: () => fetchRepertorioAtivo(5),
  });

  useEffect(() => {
    if (!initialized.current && data?.repertorios?.length > 0) {
      initialized.current = true;
      setAbertos(new Set([data.repertorios[0].id]));
    }
  }, [data]);

  const toggleRepertorio = (id) => {
    setAbertos((prev) => {
      const novo = new Set(prev);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });
  };

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Stack.Screen options={{ headerShown: false }} />
      <Titulo />

      {isLoading ? (
        <Loading />
      ) : isError || !data?.repertorios?.length ? (
        <View style={styles.placeholderContainer}>
          <Ionicons
            name="list-outline"
            size={40}
            color={isDark ? "#555" : "#ccc"}
          />
          <Text
            style={[
              styles.placeholderText,
              isDark && styles.placeholderTextDark,
            ]}
          >
            Nenhuma seleção de hinos disponível
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.content}>
          <Text style={[styles.titulo, isDark && styles.tituloDark]}>
            Seleções de hinos
          </Text>

          {data.repertorios.map((repertorio) => {
            const isOpen = abertos.has(repertorio.id);
            return (
              <View key={repertorio.id} style={styles.repertorio}>
                <TouchableOpacity
                  style={styles.repertorioHeader}
                  onPress={() => toggleRepertorio(repertorio.id)}
                >
                  <Text
                    style={[
                      styles.repertorioNome,
                      isDark && styles.repertorioNomeDark,
                    ]}
                  >
                    {repertorio.nome}
                  </Text>
                  <Text
                    style={[
                      styles.repertorioData,
                      isDark && styles.repertorioDataDark,
                    ]}
                  >
                    | {formatarData(repertorio.data)}
                  </Text>
                  <Ionicons
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={18}
                    color={isDark ? "#aaa" : "#666"}
                    style={styles.seta}
                  />
                </TouchableOpacity>

                {isOpen &&
                  repertorio.itens.map((item) => (
                    <View key={item.id}>
                      <TouchableOpacity
                        style={styles.hinoItem}
                        onPress={() =>
                          router.push({
                            pathname: "hino/[id]",
                            params: {
                              id: item.hino.identificador,
                              from: "selecao",
                            },
                          })
                        }
                      >
                        <RefHino id={item.hino.identificador} />
                        <LetrasHinosBusca
                          tituloHino={item.hino.titulo}
                          letraHino={`${item.hino.letra.substring(0, 100)}...`}
                        />
                      </TouchableOpacity>
                      <LinhaBusca />
                    </View>
                  ))}
              </View>
            );
          })}
        </ScrollView>
      )}

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
  titulo: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#333",
    marginVertical: 16,
  },
  tituloDark: {
    color: "#fff",
  },
  repertorio: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  repertorioHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
  },
  repertorioNome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4a4a4a",
  },
  repertorioNomeDark: {
    color: "#f6f6f6",
  },
  repertorioData: {
    fontSize: 15,
    color: "#828282",
  },
  repertorioDataDark: {
    color: "#a0a0a0",
  },
  seta: {
    marginLeft: "auto",
  },
  hinoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    gap: 8,
  },
  placeholderText: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
  placeholderTextDark: {
    color: "#999",
  },
};
