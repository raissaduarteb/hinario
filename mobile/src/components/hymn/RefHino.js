import { Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
export default function RefHino({ id }) {
  const { isDark } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, isDark && styles.textDark]}>{id}</Text>
    </View>
  );
}
const styles = {
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
  },
  textDark: {
    color: "#aaa",
  },
};
