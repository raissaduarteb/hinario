import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function ApagarBotao({ onApagar, ativo }) {
  const { isDark } = useTheme();
  if (!ativo) return null;
  return (
    <TouchableOpacity onPress={onApagar} style={styles.button}>
      <Ionicons
        name="backspace-outline"
        size={26}
        color={isDark ? "#aaa" : "#666"}
      />
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
