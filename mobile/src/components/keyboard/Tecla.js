import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function Tecla({ numero, onClickTecla, spacer = false }) {
  const { isDark } = useTheme();
  if (spacer)
    return (
      <TouchableOpacity
        style={[styles.button, isDark && styles.buttonDark]}
        disabled
      />
    );

  const isLetter = isNaN(numero);
  return (
    <TouchableOpacity
      onPress={onClickTecla}
      style={[
        styles.button,
        isDark && styles.buttonDark,
        isLetter && (isDark ? styles.letterButtonDark : styles.letterButton),
      ]}
      activeOpacity={0.6}
    >
      <Text
        style={[
          styles.text,
          isDark && styles.textDark,
          isLetter && styles.letterText,
        ]}
      >
        {numero}
      </Text>
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
  buttonDark: {
    backgroundColor: "#2a2a2a",
    borderColor: "#444",
  },
  letterButton: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  letterButtonDark: {
    backgroundColor: "#1e1e1e",
    borderColor: "#444",
  },
  text: {
    fontSize: 22,
    fontWeight: "300",
    color: "#333",
  },
  textDark: {
    color: "#fff",
  },
  letterText: {
    fontWeight: "800",
    fontSize: 20,
  },
};
