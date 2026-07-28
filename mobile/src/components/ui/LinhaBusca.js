import { View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
export default function LinhaBusca() {
  const { isDark } = useTheme();
  return <View style={[styles.divider, isDark && styles.dividerDark]} />;
}
const styles = ({
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 0,
  },
  dividerDark: {
    backgroundColor: "#333",
  },
});
