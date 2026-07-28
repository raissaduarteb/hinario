import { View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import Voltar from "../hymn/Voltar";
import BarraPesquisa from "./BarraPesquisa";
export default function Buscas({ value, onChange }) {
  const { isDark } = useTheme();
  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Voltar />
      <BarraPesquisa value={value} onChange={onChange} autoFocus={true} />
    </View>
  );
}
const styles = ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  containerDark: {
    backgroundColor: "#1e1e1e",
  },
});
