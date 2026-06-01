import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { loadImage } from "../../utils/imageLoader";
import { irParaAnterior, irParaProximo } from "../../utils/navegacao";
const setasIcon = loadImage("setahino.png");
export default function Setas() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => irParaAnterior(id, router)}
      >
        <Image source={setasIcon} style={[styles.icon, styles.iconLeft]} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => irParaProximo(id, router)}
      >
        <Image source={setasIcon} style={[styles.icon, styles.iconRight]} />
      </TouchableOpacity>
    </View>
  );
}
const styles = ({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  button: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  iconLeft: {
    transform: [{ scaleX: -1 }],
  },
  iconRight: {},
});
