import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function ApagarBotao({ onApagar, ativo }) {
  if (!ativo) return null;
  return (
    <TouchableOpacity onPress={onApagar} style={styles.button}>
      <Ionicons name="backspace-outline" size={26} color="#666" />
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
