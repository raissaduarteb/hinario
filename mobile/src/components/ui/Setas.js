import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { irParaAnterior, irParaProximo } from "../../utils/navegacao";

export default function Setas() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => irParaAnterior(id, router)}
      >
        <Ionicons name="chevron-back" size={30} color="#E94E1A" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => irParaProximo(id, router)}
      >
        <Ionicons name="chevron-forward" size={30} color="#E94E1A" />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#E94E1A",
    justifyContent: "center",
    alignItems: "center",
  },
};
