import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

/**
 * Hook para gerenciar o estado da busca com persistência em AsyncStorage
 */
export const useBuscaState = () => {
  const [busca, setBusca] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Carrega dados do AsyncStorage na inicialização
  useEffect(() => {
    const loadBusca = async () => {
      try {
        const saved = await AsyncStorage.getItem("busca");
        if (saved) setBusca(saved);
      } catch (error) {
        console.error("Erro ao carregar busca:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadBusca();
  }, []);

  // Persiste busca no AsyncStorage
  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem("busca", busca);
    }
  }, [busca, isLoading]);

  return { busca, setBusca, isLoading };
};
