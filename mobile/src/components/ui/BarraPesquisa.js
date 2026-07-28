import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function BarraPesquisa({
  value,
  onChange,
  autoFocus = false,
  editable = true,
  onPress,
}) {
  const { isDark } = useTheme();
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && editable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus, editable]);

  const inner = (
    <View
      style={[styles.container, isDark && styles.containerDark]}
      pointerEvents={editable ? "auto" : "none"}
    >
      <Ionicons
        name="search-outline"
        size={20}
        color={isDark ? "#888" : "#999"}
        style={styles.icon}
      />
      <TextInput
        ref={inputRef}
        style={[styles.input, isDark && styles.inputDark]}
        value={value}
        onChangeText={onChange}
        placeholder="Pesquise por hinos, letras..."
        placeholderTextColor={isDark ? "#888" : "#999"}
        editable={editable}
      />
    </View>
  );

  if (!editable && onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {inner}
      </TouchableOpacity>
    );
  }

  return inner;
}

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  containerDark: {
    backgroundColor: "#2a2a2a",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  inputDark: {
    color: "#fff",
  },
};
