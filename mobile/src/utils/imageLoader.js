const imageMap = {
  "LogoLaranja.png": require("../../imgs/LogoLaranja.png"),
};

export const loadImage = (imageName) => imageMap[imageName] ?? null;
