import { ActivityIndicator, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
export default function Loading() {
  const { isDark } = useTheme();
  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <ActivityIndicator size="large" color="#E94E1A" />
      <Text style={[styles.text, isDark && styles.textDark]}>
        Carregando...
      </Text>
    </View>
  );
}
const styles = ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  containerDark: {
    backgroundColor: "#1e1e1e",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  textDark: {
    color: "#fff",
  },
});
