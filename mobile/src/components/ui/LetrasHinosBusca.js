import { Text, View } from "react-native";
export default function LetrasHinosBusca({ tituloHino, letraHino }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tituloHino}</Text>
      {letraHino && <Text style={styles.excerpt}>{letraHino}</Text>}
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
  excerpt: {
    fontSize: 13,
    fontWeight: "300",
    color: "#666",
    lineHeight: 18,
  },
});
