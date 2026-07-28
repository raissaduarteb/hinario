import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RefHino from "../src/components/hymn/RefHino";
import BottomMenu from "../src/components/ui/BottomMenu";
import LetrasHinosBusca from "../src/components/ui/LetrasHinosBusca";
import LinhaBusca from "../src/components/ui/LinhaBusca";
import Titulo from "../src/components/ui/Titulo";
import { useTheme } from "../src/contexts/ThemeContext";
import { useFavoritos } from "../src/hooks/useFavoritos";

export default function FavoritosScreen() {
  const { isDark } = useTheme();
  const { favoritos, removerFavorito } = useFavoritos();
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.hinoItem}>
      <TouchableOpacity
        style={styles.hinoContent}
        onPress={() =>
          router.push({
            pathname: "hino/[id]",
            params: { id: item.identificador, from: "favoritos" },
          })
        }
      >
        <RefHino id={item.identificador} />
        <LetrasHinosBusca tituloHino={item.titulo} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removerButton}
        onPress={() => removerFavorito(item.identificador)}
      >
        <Ionicons
          name="heart-dislike-outline"
          size={20}
          color={isDark ? "#aaa" : "#666"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Stack.Screen options={{ headerShown: false }} />
      <Titulo />
      {favoritos.length === 0 ? (
        <View style={styles.placeholderContainer}>
          <Ionicons
            name="heart-outline"
            size={40}
            color={isDark ? "#555" : "#ccc"}
          />
          <Text
            style={[
              styles.placeholderText,
              isDark && styles.placeholderTextDark,
            ]}
          >
            Nenhum hino favoritado
          </Text>
          <Text
            style={[
              styles.placeholderSubText,
              isDark && styles.placeholderSubTextDark,
            ]}
          >
            Toque no coração na tela de um hino para adicioná-lo aqui
          </Text>
        </View>
      ) : (
        <FlatList
          style={styles.content}
          data={favoritos}
          keyExtractor={(item) => item.identificador}
          renderItem={renderItem}
          ItemSeparatorComponent={LinhaBusca}
        />
      )}
      <BottomMenu />
    </SafeAreaView>
  );
}
const styles = ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#1e1e1e",
  },
  content: {
    flex: 1,
  },
  hinoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  hinoContent: {
    flex: 1,
  },
  removerButton: {
    padding: 8,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    gap: 8,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 8,
  },
  placeholderTextDark: {
    color: "#fff",
  },
  placeholderSubText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  placeholderSubTextDark: {
    color: "#999",
  },
});
