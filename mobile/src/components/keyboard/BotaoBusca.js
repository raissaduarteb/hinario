import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
export default function BotaoBusca({
  onClickBusca,
  loading = false,
  disabled = false,
  label,
}) {
  return (
    <TouchableOpacity
      onPress={onClickBusca}
      style={[styles.button, (disabled || loading) && styles.buttonDisabled]}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.text}>{label ?? "Buscar"}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = ({
  button: {
    backgroundColor: "#E94E1A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 48,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    opacity: 0.6,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
