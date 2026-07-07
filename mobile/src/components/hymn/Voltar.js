import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Voltar() {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.button} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={24} color="#333" />
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
};
