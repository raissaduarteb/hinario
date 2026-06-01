import { Text } from "react-native";
export default function Tecla({ numero, onClickTecla }) {
  const isLetter = isNaN(numero);
  return (
    <Text
      onPress={() => onClickTecla(numero)}
      style={[
        styles.button,
        numero === 0 && styles.zeroButton,
        isLetter && styles.letterButton,
      ]}
    >
      {numero}
    </Text>
  );
}
const styles = ({
  button: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "300",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 4,
    padding: 12,
    color: "#333",
  },
  zeroButton: {
    borderColor: "#ccc",
    backgroundColor: "#fafafa",
  },
  letterButton: {
    fontWeight: "800",
  },
});
