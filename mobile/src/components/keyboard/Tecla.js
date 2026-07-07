import { Text, TouchableOpacity } from "react-native";

export default function Tecla({ numero, onClickTecla, spacer = false }) {
  if (spacer) return <TouchableOpacity style={styles.button} disabled />;

  const isLetter = isNaN(numero);
  return (
    <TouchableOpacity
      onPress={onClickTecla}
      style={[styles.button, isLetter && styles.letterButton]}
      activeOpacity={0.6}
    >
      <Text style={[styles.text, isLetter && styles.letterText]}>{numero}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  letterButton: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  text: {
    fontSize: 22,
    fontWeight: "300",
    color: "#333",
  },
  letterText: {
    fontWeight: "800",
    fontSize: 20,
  },
};
