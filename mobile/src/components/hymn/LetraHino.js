import { Text, View } from "react-native";
import { useFontSize } from "../../contexts/FontSizeContext";
export default function LetraHino({ letra }) {
  const { fontSize } = useFontSize();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            fontSize: fontSize,
          },
        ]}
      >
        {letra}
      </Text>
    </View>
  );
}
const styles = {
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  text: {
    color: "#333",
    lineHeight: 24,
    fontFamily: "System",
  },
};
