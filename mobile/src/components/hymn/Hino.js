import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  Animated,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import { irParaAnterior, irParaProximo, useSwipe } from "../../utils/navegacao";
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
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Esse hino não existe.</Text>
        </View>
      );
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Não foi possível carregar o hino agora. Tente novamente.
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Voltar />
          </View>
          <View style={styles.headerCenter}>
            <RefHino id={hino.identificador} />
          </View>
          <View style={styles.headerTitle}>
            <LetrasHinosBusca tituloHino={hino.titulo} />
          </View>
        </View>

        {hino?.letra ? <LetraHino letra={hino.letra} /> : <Loading />}
      </Animated.View>

      <Setas />
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  headerLeft: {
    flex: 1,
  },
  headerCenter: {
    flex: 2,
    justifyContent: "center",
  },
  headerTitle: {
    flex: 12,
    justifyContent: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  errorText: {
    fontSize: 16,
    color: "#E94E1A",
    textAlign: "center",
    marginHorizontal: 20,
  },
};
