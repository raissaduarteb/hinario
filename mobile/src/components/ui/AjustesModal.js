import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useFontSize } from "../../contexts/FontSizeContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function AjustesModal({ open, onClose }) {
  const pathname = usePathname();
  const isHinoPage = pathname?.startsWith("/hino") ?? false;
  const { theme, setTheme, isDark } = useTheme();
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
        <View style={[styles.modal, isDark && styles.modalDark]}>
          <View style={styles.section}>
            <Ionicons
              name="sunny-outline"
              size={22}
              color={isDark ? "#aaa" : "#666"}
              style={styles.sectionIcon}
            />
            <View style={[styles.modoToggle, isDark && styles.modoToggleDark]}>
              <TouchableOpacity
                style={[
                  styles.toggleOption,
                  theme !== "escuro" &&
                    (isDark ? styles.toggleOptionSelectedDark : styles.toggleOptionSelected),
                ]}
                onPress={() => setTheme("claro")}
              >
                <Text
                  style={[
                    styles.toggleOptionText,
                    isDark && styles.toggleOptionTextDark,
                    theme !== "escuro" && styles.toggleOptionTextSelected,
                  ]}
                >
                  Claro
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleOption,
                  theme === "escuro" &&
                    (isDark ? styles.toggleOptionSelectedDark : styles.toggleOptionSelected),
                ]}
                onPress={() => setTheme("escuro")}
              >
                <Text
                  style={[
                    styles.toggleOptionText,
                    isDark && styles.toggleOptionTextDark,
                    theme === "escuro" && styles.toggleOptionTextSelected,
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
                color={isDark ? "#aaa" : "#666"}
                style={styles.sectionIcon}
              />
              <View style={styles.fontControls}>
                <TouchableOpacity
                  style={[
                    styles.fontButton,
                    isDark && styles.fontButtonDark,
                    fontSize <= 12 && styles.fontButtonDisabled,
                  ]}
                  onPress={decreaseFont}
                  disabled={fontSize <= 12}
                >
                  <Text
                    style={[
                      styles.fontButtonText,
                      isDark && styles.fontButtonTextDark,
                    ]}
                  >
                    −
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    styles.fontSizeDisplay,
                    isDark && styles.fontSizeDisplayDark,
                  ]}
                >
                  {fontSize}px
                </Text>
                <TouchableOpacity
                  style={[
                    styles.fontButton,
                    isDark && styles.fontButtonDark,
                    fontSize >= 30 && styles.fontButtonDisabled,
                  ]}
                  onPress={increaseFont}
                  disabled={fontSize >= 30}
                >
                  <Text
                    style={[
                      styles.fontButtonText,
                      isDark && styles.fontButtonTextDark,
                    ]}
                  >
                    +
                  </Text>
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
  modalDark: {
    backgroundColor: "#2a2a2a",
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
  modoToggleDark: {
    backgroundColor: "#1e1e1e",
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
  toggleOptionSelectedDark: {
    backgroundColor: "#3a3a3a",
  },
  toggleOptionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  toggleOptionTextDark: {
    color: "#aaa",
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
  fontButtonDark: {
    backgroundColor: "#3a3a3a",
  },
  fontButtonDisabled: {
    opacity: 0.4,
  },
  fontButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  fontButtonTextDark: {
    color: "#fff",
  },
  fontSizeDisplay: {
    fontSize: 14,
    color: "#666",
  },
  fontSizeDisplayDark: {
    color: "#aaa",
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
