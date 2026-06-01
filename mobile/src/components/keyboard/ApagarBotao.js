import { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { loadImage } from "../../utils/imageLoader";
const deleteButton = loadImage("deletebutton.png");
export default function ApagarBotao({ onApagar, ativo }) {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    if (ativo) {
      setVisivel(true);
    } else {
      setVisivel(false);
    }
  }, [ativo]);
  return (
    <TouchableOpacity
      onPress={onApagar}
      style={[styles.button, !visivel && styles.hidden]}
    >
      <Image source={deleteButton} style={styles.icon} />
    </TouchableOpacity>
  );
}
const styles = ({
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  hidden: {
    display: "none",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
