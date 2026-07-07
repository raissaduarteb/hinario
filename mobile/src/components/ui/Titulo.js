import { Image, Text, View } from "react-native";

const logoLaranja = require("../../../imgs/LogoLaranja.png");

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Image source={logoLaranja} style={styles.logo} />
      <Text style={styles.title}>Hinário</Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 12,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#E94E1A",
  },
};
