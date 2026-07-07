import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AjustesModal from "./AjustesModal";

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
    return "home";
  };

  const [active, setActive] = useState(getInitialActive());
  const [openAjustes, setOpenAjustes] = useState(false);

  const handleNavigation = (route, buttonName) => {
    setActive(buttonName);
    router.push(route);
  };

  const isHomeActive = !isPesquisaPage && !isHinoPage && active === "home";
  const isSelecaoActive =
    !isPesquisaPage && !isHinoPage && active === "selecao";
  const isAjustesActive = active === "ajustes";

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("/", "home")}
        >
          <Ionicons
            name={isHomeActive ? "home" : "home-outline"}
            size={22}
            color={isHomeActive ? "#E94E1A" : "#666"}
          />
          <Text style={[styles.label, isHomeActive && styles.labelActive]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("/selecao", "selecao")}
        >
          <Ionicons
            name={isSelecaoActive ? "bookmark" : "bookmark-outline"}
            size={22}
            color={isSelecaoActive ? "#E94E1A" : "#666"}
          />
          <Text style={[styles.label, isSelecaoActive && styles.labelActive]}>
            Seleção
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            setActive("ajustes");
            setOpenAjustes(true);
          }}
        >
          <Ionicons
            name={isAjustesActive ? "settings" : "settings-outline"}
            size={22}
            color={isAjustesActive ? "#E94E1A" : "#666"}
          />
          <Text style={[styles.label, isAjustesActive && styles.labelActive]}>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>

      <AjustesModal
        open={openAjustes}
        onClose={() => {
          setOpenAjustes(false);
          setActive(isSelecaoPage ? "selecao" : "home");
        }}
      />
    </>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 3,
  },
  label: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  labelActive: {
    color: "#E94E1A",
  },
};
