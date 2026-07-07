import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import ApagarBotao from "./ApagarBotao";
import BotaoBusca from "./BotaoBusca";
import Tecla from "./Tecla";

const LINHAS_HINARIO = [
  ["C", "H", "S"],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const LINHAS_HARPA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function Teclado({ modo }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const params = useLocalSearchParams();
  const [textoPreview, setTextoPreview] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");

  useEffect(() => {
    if (params?.clearInput) {
      setTextoPreview("");
      setMensagemErro("");
    }
  }, [params?.clearInput]);

  const ApagarUltimo = () => {
    setTextoPreview((prev) => prev.slice(0, -1));
  };

  const tratarEntrada = (valor) => {
    const ehNumero = typeof valor === "number";
    if (!ehNumero) {
      setTextoPreview(valor);
      return;
    }
    if (textoPreview.length === 0 && ehNumero && modo === "Hinário") {
      setTextoPreview("H");
    }
    if (valor === 0 && textoPreview.length === 0) return;
    if (valor === 0 && ["C", "H", "S"].includes(textoPreview)) return;
    const maxLength = modo === "Hinário" ? 4 : 3;
    if (textoPreview.length >= maxLength) return;
    setTextoPreview((prev) => prev + valor);
  };

  const clickBusca = () => {
    const minLengthBusca = modo === "Hinário" ? 2 : 1;
    const identificador =
      modo !== "Hinário" ? "HC-" + textoPreview : textoPreview;
    if (identificador.length >= minLengthBusca) {
      setMensagemErro("");
      setBuscando(true);
      queryClient
        .fetchQuery({
          queryKey: ["hino", identificador],
          queryFn: ({ signal }) =>
            fetchHinoPorIdentificador(identificador, { signal }),
        })
        .then(() => {
          router.push({
            pathname: "hino/[id]",
            params: { id: identificador, from: "teclado" },
          });
        })
        .catch((err) => {
          if (err?.status === 404) {
            setMensagemErro("Esse hino não existe.");
            return;
          }
          setMensagemErro(
            "Não foi possível buscar o hino agora. Tente novamente.",
          );
        })
        .finally(() => setBuscando(false));
    } else {
      setMensagemErro("");
    }
  };

  const linhas = modo === "Hinário" ? LINHAS_HINARIO : LINHAS_HARPA;

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Text style={styles.previewText}>{textoPreview || " "}</Text>
        <ApagarBotao onApagar={ApagarUltimo} ativo={textoPreview !== ""} />
      </View>

      {mensagemErro ? (
        <Text style={styles.errorMessage}>{mensagemErro}</Text>
      ) : null}

      <View style={styles.teclado}>
        {linhas.map((linha, i) => (
          <View key={i} style={styles.linha}>
            {linha.map((v) => (
              <Tecla key={v} numero={v} onClickTecla={() => tratarEntrada(v)} />
            ))}
          </View>
        ))}
        <View style={styles.linha}>
          <Tecla spacer />
          <Tecla numero={0} onClickTecla={() => tratarEntrada(0)} />
          <Tecla spacer />
        </View>
      </View>

      <BotaoBusca onClickBusca={clickBusca} loading={buscando} />
    </View>
  );
}

const styles = {
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  previewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    minHeight: 44,
  },
  previewText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  errorMessage: {
    color: "#E94E1A",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 4,
  },
  teclado: {
    marginVertical: 8,
  },
  linha: {
    flexDirection: "row",
  },
};

export default Teclado;
