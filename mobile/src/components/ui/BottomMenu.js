import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import AjustesModal from "./AjustesModal";

export default function BottomMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const { isDark } = useTheme();
  const isHinoPage = pathname?.startsWith("/hino");
  const isPesquisaPage = pathname === "/pesquisa";
  const isSelecaoPage = pathname === "/selecao";
  const isFavoritosPage = pathname === "/favoritos";
  const isHomePage = pathname === "/";

  const getInitialActive = () => {
    if (isHomePage) return "home";
    if (isSelecaoPage) return "selecao";
    if (isFavoritosPage) return "favoritos";
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
  const isFavoritosActive =
    !isPesquisaPage && !isHinoPage && active === "favoritos";
  const isAjustesActive = active === "ajustes";

  const iconColor = isDark ? "#aaa" : "#666";

  return (
    <>
      <View style={[styles.container, isDark && styles.containerDark]}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("/", "home")}
        >
          <Ionicons
            name={isHomeActive ? "home" : "home-outline"}
            size={22}
            color={isHomeActive ? "#E94E1A" : iconColor}
          />
          <Text
            style={[
              styles.label,
              isDark && styles.labelDark,
              isHomeActive && styles.labelActive,
            ]}
          >
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
            color={isSelecaoActive ? "#E94E1A" : iconColor}
          />
          <Text
            style={[
              styles.label,
              isDark && styles.labelDark,
              isSelecaoActive && styles.labelActive,
            ]}
          >
            Seleção
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("/favoritos", "favoritos")}
        >
          <Ionicons
            name={isFavoritosActive ? "heart" : "heart-outline"}
            size={22}
            color={isFavoritosActive ? "#E94E1A" : iconColor}
          />
          <Text
            style={[
              styles.label,
              isDark && styles.labelDark,
              isFavoritosActive && styles.labelActive,
            ]}
          >
            Favoritos
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
            color={isAjustesActive ? "#E94E1A" : iconColor}
          />
          <Text
            style={[
              styles.label,
              isDark && styles.labelDark,
              isAjustesActive && styles.labelActive,
            ]}
          >
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>

      <AjustesModal
        open={openAjustes}
        onClose={() => {
          setOpenAjustes(false);
          setActive(
            isSelecaoPage ? "selecao" : isFavoritosPage ? "favoritos" : "home",
          );
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
  containerDark: {
    backgroundColor: "#1e1e1e",
    borderTopColor: "#333",
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
  labelDark: {
    color: "#aaa",
  },
  labelActive: {
    color: "#E94E1A",
  },
};
