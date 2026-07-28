import { Text, View } from "react-native";
import { useFontSize } from "../../contexts/FontSizeContext";
import { useTheme } from "../../contexts/ThemeContext";
import TextoFormatado from "../ui/TextoFormatado";
export default function LetraHino({ letra }) {
  const { fontSize } = useFontSize();
  const { isDark } = useTheme();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          isDark && styles.textDark,
          {
            fontSize: fontSize,
          },
        ]}
      >
        <TextoFormatado texto={letra} />
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
  textDark: {
    color: "#eee",
  },
};
