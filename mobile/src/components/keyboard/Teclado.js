import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { fetchHinoPorIdentificador } from "../../utils/api/hinos";
import ApagarBotao from "./ApagarBotao";
import BotaoBusca from "./BotaoBusca";
import Tecla from "./Tecla";
function Teclado({ modo, onLimparTudo }) {
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
  const LimparTudo = () => {
    setTextoPreview("");
    setMensagemErro("");
    onLimparTudo?.();
  };
  const teclas =
    modo === "Hinário"
      ? ["C", "H", "S", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
    // ❌ Não permitir 0 isolado
    if (valor === 0 && textoPreview.length === 0) return;
    // ❌ Não permitir C0, H0, S0 (mantém só a letra)
    if (valor === 0 && ["C", "H", "S"].includes(textoPreview)) {
      return;
    }
    // Limite de tamanho
    const maxLength = modo === "Hinário" ? 4 : 3;
    if (textoPreview.length >= maxLength) return;
    setTextoPreview((prev) => prev + valor);
  };
  const clickBusca = () => {
    const minLengthBusca = modo === "Hinário" ? 2 : 1;
    let identificador =
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
  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Text style={styles.previewText}>{textoPreview}</Text>
        {textoPreview && (
          <ApagarBotao onApagar={ApagarUltimo} ativo={textoPreview !== ""} />
        )}
      </View>
      {mensagemErro ? (
        <Text style={styles.errorMessage}>{mensagemErro}</Text>
      ) : null}
      <View style={styles.tecbotao}>
        <View
          style={
            modo === "Hinário"
              ? styles.teclado
              : [styles.teclado, styles.teclado_expansivo]
          }
        >
          {teclas.map((v, i) => (
            <Tecla key={i} numero={v} onClickTecla={() => tratarEntrada(v)} />
          ))}
        </View>
        <BotaoBusca onClickBusca={clickBusca} loading={buscando} />
      </View>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  previewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  previewText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  errorMessage: {
    color: "#E94E1A",
    fontSize: 14,
    marginBottom: 12,
  },
  tecbotao: {
    flex: 1,
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  teclado_expansivo: {
    justifyContent: "space-around",
  },
};
export default Teclado;
