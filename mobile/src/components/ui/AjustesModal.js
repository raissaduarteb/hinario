import { useRouter } from "expo-router";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useFontSize } from "../../contexts/FontSizeContext";
import { useModoState } from "../../hooks/useModoState";
import { loadImage } from "../../utils/imageLoader";
const IconeSol = loadImage("Sun.png");
const IconeLetra = loadImage("text_fields.png");
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
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, modo === "Escuro" && styles.modalDark]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          {/* Modo Claro/Escuro */}
          <View style={styles.section}>
            <Image source={IconeSol} style={styles.sectionIcon} />
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
          {/* Ajustes de Fonte */}
          {isHinoPage && (
            <View style={styles.section}>
              <Image source={IconeLetra} style={styles.sectionIcon} />
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
        </View>
      </View>
    </Modal>
  );
}
const styles = {
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    width: "80%",
    maxWidth: 400,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalDark: {
    backgroundColor: "#1e1e1e",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#666",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  sectionIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    resizeMode: "contain",
  },
  modoToggle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 4,
  },
  toggleOption: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  toggleOptionSelected: {
    backgroundColor: "#E94E1A",
  },
  toggleOptionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  toggleOptionTextSelected: {
    color: "#fff",
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
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  fontButtonDisabled: {
    opacity: 0.5,
  },
  fontButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  fontSizeDisplay: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 12,
  },
};
