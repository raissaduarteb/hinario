import { Text, View } from "react-native";
export default function RefHino({ id }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{id}</Text>
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
};
