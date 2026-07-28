import { Text } from "react-native";

/**
 * A API retorna a letra/trecho dos hinos com marcação HTML simples
 * (<b>...</b> para o refrão ou termos buscados, &nbsp; para indentação).
 * O React Native não interpreta HTML dentro de <Text>, então convertemos
 * manualmente essa marcação em <Text> aninhados.
 */
export default function TextoFormatado({ texto }) {
  if (!texto) return null;

  const partes = texto.split(/(<b>|<\/b>)/g);
  let negrito = false;
  const nodes = [];

  partes.forEach((parte, index) => {
    if (parte === "<b>") {
      negrito = true;
      return;
    }
    if (parte === "</b>") {
      negrito = false;
      return;
    }
    if (!parte) return;

    const limpo = parte.replace(/&nbsp;/g, " ");
    nodes.push(
      <Text key={index} style={negrito ? styles.negrito : undefined}>
        {limpo}
      </Text>,
    );
  });

  return nodes;
}

const styles = {
  negrito: {
    fontWeight: "700",
  },
};
