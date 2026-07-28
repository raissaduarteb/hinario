import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const STORAGE_KEY = "favoritos";

/**
 * Hook para gerenciar os hinos favoritados pelo usuário, persistidos em
 * AsyncStorage. Não confundir com a Seleção (repertório curado pelo admin).
 */
export const useFavoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFavoritos = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setFavoritos(JSON.parse(saved));
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFavoritos();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
    }
  }, [favoritos, isLoading]);

  const isFavorito = (identificador) =>
    favoritos.some((h) => h.identificador === identificador);

  const toggleFavorito = (hino) => {
    setFavoritos((prev) =>
      prev.some((h) => h.identificador === hino.identificador)
        ? prev.filter((h) => h.identificador !== hino.identificador)
        : [
            ...prev,
            { identificador: hino.identificador, titulo: hino.titulo },
          ],
    );
  };

  const removerFavorito = (identificador) => {
    setFavoritos((prev) =>
      prev.filter((h) => h.identificador !== identificador),
    );
  };

  return {
    favoritos,
    isFavorito,
    toggleFavorito,
    removerFavorito,
    isLoading,
  };
};
