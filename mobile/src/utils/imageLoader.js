// Mapa estático de imagens pré-carregadas
// Necessário porque React Native não permite require() dinâmico com variáveis
const imageMap = {
  "voltar.png": "../../../imgs/voltar.svg",
  "deletebutton.png": "../../../imgs/deletebutton.png",
  "LogoLaranja.png": "../../../imgs/LogoLaranja.png",
  "Iconsearch.png": "../../../imgs/Iconsearch.png",
  "Sun.png": "../../../imgs/Sun.png",
  "text_fields.png": "../../../imgs/text_fields.png",
  "ajustes.png": "../../../imgs/ajustes.png",
  "ajusteslaranja.png": "../../../imgs/ajusteslaranja.png",
  "casinha.png": "../../../imgs/casinha.png",
  "casinhalaranja.png": "../../../imgs/casinhalaranja.png",
  "selecao.png": "../../../imgs/selecao.png",
  "selecaolaranja.png": "../../../imgs/selecaolaranja.png",
  "setahino.png": "../../../imgs/setahino.png",
};

// Carrega imagem do mapa, retorna null se não existir
export const loadImage = (imageName) => {
  const image = imageMap[imageName];
  if (!image) {
    console.warn(`⚠️ Imagem não encontrada no mapa: ${imageName}`);
  }
  return image || null;
};
