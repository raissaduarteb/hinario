import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useFontSize } from "../../contexts/FontSizeContext";
import { useModoState } from "../../hooks/useModoState";

export default function AjustesModal({ open, onClose }) {
  const router = useRouter();
  const isHinoPage = router.pathname?.startsWith("/hino") ?? false;
  const { modo, setModo } = useModoState();
  const { fontSize, setFontSize } = useFontSize();

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 30));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));

  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modal}>
          <View style={styles.section}>
            <Ionicons
              name="sunny-outline"
              size={22}
              color="#666"
              style={styles.sectionIcon}
            />
            <View style={styles.modoToggle}>
              <TouchableOpacity
                style={[
                  styles.toggleOption,
                  modo !== "Escuro" && styles.toggleOptionSelected,
                ]}
                onPress={() => setModo("Claro")}
              >
                <Text
                  style={[
                    styles.toggleOptionText,
                    modo !== "Escuro" && styles.toggleOptionTextSelected,
                  ]}
                >
                  Claro
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleOption,
                  modo === "Escuro" && styles.toggleOptionSelected,
                ]}
                onPress={() => setModo("Escuro")}
              >
                <Text
                  style={[
                    styles.toggleOptionText,
                    modo === "Escuro" && styles.toggleOptionTextSelected,
                  ]}
                >
                  Escuro
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {isHinoPage && (
            <View style={styles.section}>
              <Ionicons
                name="text-outline"
                size={22}
                color="#666"
                style={styles.sectionIcon}
              />
              <View style={styles.fontControls}>
                <TouchableOpacity
                  style={[
                    styles.fontButton,
                    fontSize <= 12 && styles.fontButtonDisabled,
                  ]}
                  onPress={decreaseFont}
                  disabled={fontSize <= 12}
                >
                  <Text style={styles.fontButtonText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.fontSizeDisplay}>{fontSize}px</Text>
                <TouchableOpacity
                  style={[
                    styles.fontButton,
                    fontSize >= 30 && styles.fontButtonDisabled,
                  ]}
                  onPress={increaseFont}
                  disabled={fontSize >= 30}
                >
                  <Text style={styles.fontButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <TouchableOpacity style={styles.fechar} onPress={onClose}>
            <Text style={styles.fecharText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = {
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 32,
    gap: 8,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  sectionIcon: {
    marginRight: 16,
  },
  modoToggle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    borderRadius: 30,
    padding: 4,
  },
  toggleOption: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 26,
  },
  toggleOptionSelected: {
    backgroundColor: "#fff",
  },
  toggleOptionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  toggleOptionTextSelected: {
    color: "#E94E1A",
    fontWeight: "600",
  },
  fontControls: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fontButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  fontButtonDisabled: {
    opacity: 0.4,
  },
  fontButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  fontSizeDisplay: {
    fontSize: 14,
    color: "#666",
  },
  fechar: {
    marginTop: 8,
    alignItems: "center",
    paddingVertical: 12,
  },
  fecharText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#E94E1A",
  },
};
