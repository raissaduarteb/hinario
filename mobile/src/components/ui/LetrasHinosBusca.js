import { Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import TextoFormatado from "./TextoFormatado";
export default function LetrasHinosBusca({ tituloHino, letraHino }) {
  const { isDark } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isDark && styles.titleDark]}>
        {tituloHino}
      </Text>
      {letraHino && (
        <Text style={[styles.excerpt, isDark && styles.excerptDark]}>
          <TextoFormatado texto={letraHino} />
        </Text>
      )}
    </View>
  );
}
const styles = ({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 4,
    color: "#333",
  },
  titleDark: {
    color: "#fff",
  },
  excerpt: {
    fontSize: 13,
    fontWeight: "300",
    color: "#666",
    lineHeight: 18,
  },
  excerptDark: {
    color: "#aaa",
  },
});
