import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RefHino from "../hymn/RefHino";
import LetrasHinosBusca from "./LetrasHinosBusca";
import LinhaBusca from "./LinhaBusca";
export default function HinosPesquisa({ busca }) {
  const [hinos, setHinos] = useState([]);
  const abortControllerRef = useRef(null);
  const router = useRouter();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (busca.busca.length === 0) {
      setHinos([]);
      return;
    }
    // Cancela a requisição anterior se ainda estiver pendente
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const timeout = setTimeout(() => {
      fetch(
        `https://hinario-api.onrender.com/api/Hino/pesquisar?texto=${busca.busca}`,
        { signal: controller.signal },
      )
        .then((res) => res.json())
        .then((data) => {
          setHinos(data);
          // Aproveita o retorno do endpoint de pesquisa para hidratar o cache do hino.
          for (const hino of data ?? []) {
            if (!hino?.identificador) continue;
            queryClient.setQueryData(["hino", hino.identificador], (prev) => ({
              ...prev,
              ...hino,
            }));
          }
        })
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });
    }, 400); // aguarda 400ms após a última digitação
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [busca.busca]);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "hino/[id]",
          params: { id: item.identificador, from: "pesquisa" },
        })
      }
    >
      <View style={styles.hinoItem}>
        <View style={styles.hinoContent}>
          <RefHino id={item.identificador} />
          <LetrasHinosBusca tituloHino={item.titulo} letraHino={item.trecho} />
        </View>
      </View>
      <LinhaBusca />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={hinos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={styles.container}
      scrollEnabled={false}
    />
  );
}
const styles = {
  container: {
    flex: 1,
  },
  hinoItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  hinoContent: {
    flex: 1,
  },
};
