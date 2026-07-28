import { Ionicons } from "@expo/vector-icons";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Animated,
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import { useFavoritos } from "../../hooks/useFavoritos";
import { irParaAnterior, irParaProximo, useSwipe } from "../../utils/navegacao";
import AjustesModal from "../ui/AjustesModal";
import LetrasHinosBusca from "../ui/LetrasHinosBusca";
import Loading from "../ui/Loading";
import Setas from "../ui/Setas";
import LetraHino from "./LetraHino";
import RefHino from "./RefHino";
import Voltar from "./Voltar";

export default function Hino() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { width } = useWindowDimensions();
  const { isDark } = useTheme();
  const { isFavorito, toggleFavorito } = useFavoritos();
  const [openAjustes, setOpenAjustes] = useState(false);

  const {
    data: hino,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hino", id],
    queryFn: () => fetchHinoPorIdentificador(id),
    enabled: !!id,
  });

  const {
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    dragX,
    exiting,
    opacity,
    setOpacity,
  } = useSwipe(
    () => irParaProximo(id, router),
    () => irParaAnterior(id, router),
  );

  const isDragging = dragX !== 0 && !exiting;

  useEffect(() => {
    if (!isLoading && hino) {
      setOpacity(1);
    }
  }, [isLoading, hino, setOpacity]);

  if (isLoading && !hino) return <Loading />;

  if (isError) {
    if (error?.status === 404)
      return (
        <View style={[styles.errorContainer, isDark && styles.errorContainerDark]}>
          <Text style={styles.errorText}>Esse hino não existe.</Text>
        </View>
      );
    return (
      <View style={[styles.errorContainer, isDark && styles.errorContainerDark]}>
        <Text style={styles.errorText}>
          Não foi possível carregar o hino agora. Tente novamente.
        </Text>
      </View>
    );
  }

  const favoritado = isFavorito(hino.identificador);

  const handleCompartilhar = () => {
    Share.share({
      message: `${hino.titulo}\n\n${hino.letra}`,
    });
  };

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Animated.View
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={[
          styles.content,
          {
            transform: [{ translateX: dragX * 0.3 }],
            opacity: opacity,
          },
        ]}
      >
        <View style={[styles.header, isDark && styles.headerDark]}>
          <View style={styles.headerLeft}>
            <Voltar />
          </View>
          <View style={styles.headerCenter}>
            <RefHino id={hino.identificador} />
          </View>
          <View style={styles.headerTitle}>
            <LetrasHinosBusca tituloHino={hino.titulo} />
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => toggleFavorito(hino)}
            >
              <Ionicons
                name={favoritado ? "heart" : "heart-outline"}
                size={22}
                color="#E94E1A"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={handleCompartilhar}
            >
              <Ionicons
                name="share-outline"
                size={22}
                color={isDark ? "#aaa" : "#666"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => setOpenAjustes(true)}
            >
              <Ionicons
                name="settings-outline"
                size={22}
                color={isDark ? "#aaa" : "#666"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {hino?.letra ? <LetraHino letra={hino.letra} /> : <Loading />}
      </Animated.View>

      <Setas />

      <AjustesModal open={openAjustes} onClose={() => setOpenAjustes(false)} />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerDark: {
    borderBottomColor: "#333",
  },
  headerLeft: {
    flex: 1,
  },
  headerCenter: {
    flex: 2,
    justifyContent: "center",
  },
  headerTitle: {
    flex: 6,
    justifyContent: "center",
  },
  headerRight: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerButton: {
    padding: 6,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  errorContainerDark: {
    backgroundColor: "#1e1e1e",
  },
  errorText: {
    fontSize: 16,
    color: "#E94E1A",
    textAlign: "center",
    marginHorizontal: 20,
  },
};
