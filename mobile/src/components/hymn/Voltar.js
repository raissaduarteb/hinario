import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import { loadImage } from "../../utils/imageLoader";
const voltarIcon = loadImage("voltar.png");
export default function Voltar() {
  const router = useRouter();
  const handleVoltar = () => {
    router.back();
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleVoltar}>
      {voltarIcon ? (
        <Image source={voltarIcon} style={styles.icon} />
      ) : (
        <Text style={styles.fallbackText}>←</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = ({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  fallbackText: {
    fontSize: 20,
    color: "#333",
  },
});
