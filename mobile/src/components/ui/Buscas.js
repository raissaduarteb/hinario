import { View } from "react-native";
import Voltar from "../hymn/Voltar";
import BarraPesquisa from "./BarraPesquisa";
export default function Buscas({ value, onChange }) {
  return (
    <View style={styles.container}>
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
});
