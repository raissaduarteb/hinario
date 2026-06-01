import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { loadImage } from "../../utils/imageLoader";
import AjustesModal from "./AjustesModal";
const iconeajustes = loadImage("ajustes.png");
const iconeajusteslaranja = loadImage("ajusteslaranja.png");
const iconehome = loadImage("casinha.png");
const iconehomelaranja = loadImage("casinhalaranja.png");
const iconeselecao = loadImage("selecao.png");
const iconeselecaolaranja = loadImage("selecaolaranja.png");
export default function BottomMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const isHinoPage = pathname?.startsWith("/hino");
  const isPesquisaPage = pathname === "/pesquisa";
  const isSelecaoPage = pathname === "/selecao";
  const isHomePage = pathname === "/";
  const getInitialActive = () => {
    if (isHomePage) return "home";
    if (isSelecaoPage) return "selecao";
    if (isPesquisaPage || isHinoPage) return null;
    return "home";
  };
  const [active, setActive] = useState(getInitialActive());
  const [openAjustes, setOpenAjustes] = useState(false);
  const handleNavigation = (route, buttonName) => {
    setActive(buttonName);
    router.push(route);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("/", "home")}
        >
          <Image
            source={
              !isPesquisaPage && !isHinoPage && active === "home"
                ? iconehomelaranja
                : iconehome
            }
            style={styles.icon}
          />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("/selecao", "selecao")}
        >
          <Image
            source={
              !isPesquisaPage && !isHinoPage && active === "selecao"
                ? iconeselecaolaranja
                : iconeselecao
            }
            style={styles.icon}
          />
          <Text style={styles.label}>Seleção</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            setActive("ajustes");
            setOpenAjustes(true);
          }}
        >
          <Image
            source={active === "ajustes" ? iconeajusteslaranja : iconeajustes}
            style={styles.icon}
          />
          <Text style={styles.label}>Ajustes</Text>
        </TouchableOpacity>
      </View>
      <AjustesModal
        open={openAjustes}
        onClose={() => {
          setOpenAjustes(false);
          if (isHomePage) {
            setActive("home");
          } else if (isSelecaoPage) {
            setActive("selecao");
          } else {
            setActive(null);
          }
        }}
      />
    </>
  );
}
const styles = ({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
});
