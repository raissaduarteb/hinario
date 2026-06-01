import { useEffect, useRef, useState } from "react";
import { Image, TextInput, View } from "react-native";
import { loadImage } from "../../utils/imageLoader";
const Iconsearch = loadImage("Iconsearch.png");
export default function BarraPesquisa({ value, onChange, autoFocus = false }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(autoFocus);
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Image source={Iconsearch} style={styles.icon} />
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Pesquise por hinos, letras..."
        placeholderTextColor="#999"
      />
    </View>
  );
}
const styles = ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#333",
  },
});
