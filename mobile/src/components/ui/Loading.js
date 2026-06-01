import { ActivityIndicator, Text, View } from "react-native";
export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#E94E1A" />
      <Text style={styles.text}>Carregando...</Text>
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
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
