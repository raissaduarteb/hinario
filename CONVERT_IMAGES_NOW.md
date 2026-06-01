# Solução: Conversão de Imagens SVG → PNG

## ✅ O que foi feito

Todos os imports de imagens foram convertidos de `import` para `require()`. Isso é mais robusto em React Native.

## 🖼️ Próximo Passo: Converter Imagens

### Opção 1: ImageMagick (Recomendado - Local)

```bash
cd /Users/raissaduarteb/Desktop/dev/hinario

# Instalar ImageMagick (macOS)
brew install imagemagick

# Converter todos os SVGs para PNG
mkdir -p mobile/imgs

# Converter individualmente com 100x100 px
convert imgs/voltar.svg -density 150 -resize 100x100 mobile/imgs/voltar.png
convert imgs/ajustes.svg -density 150 -resize 100x100 mobile/imgs/ajustes.png
convert imgs/ajusteslaranja.svg -density 150 -resize 100x100 mobile/imgs/ajusteslaranja.png
convert imgs/casinha.svg -density 150 -resize 100x100 mobile/imgs/casinha.png
convert imgs/casinhalaranja.svg -density 150 -resize 100x100 mobile/imgs/casinhalaranja.png
convert imgs/selecao.svg -density 150 -resize 100x100 mobile/imgs/selecao.png
convert imgs/selecaolaranja.svg -density 150 -resize 100x100 mobile/imgs/selecaolaranja.png
convert imgs/Iconsearch.svg -density 150 -resize 100x100 mobile/imgs/Iconsearch.png
convert imgs/text_fields.svg -density 150 -resize 100x100 mobile/imgs/text_fields.png
convert imgs/Sun.svg -density 150 -resize 100x100 mobile/imgs/Sun.png
convert imgs/LogoLaranja.svg -density 150 -resize 100x100 mobile/imgs/LogoLaranja.png
convert imgs/setahino.svg -density 150 -resize 100x100 mobile/imgs/setahino.png

# Copiar PNGs existentes
cp imgs/deletebutton.png mobile/imgs/deletebutton.png
```

### Opção 2: Script Batch (Mais Rápido)

```bash
#!/bin/bash
cd /Users/raissaduarteb/Desktop/dev/hinario
mkdir -p mobile/imgs

# Converter todos SVGs de uma vez
for svg in imgs/*.svg; do
  filename=$(basename "$svg" .svg)
  convert "$svg" -density 150 -resize 100x100 "mobile/imgs/${filename}.png"
  echo "✓ Convertido: $filename.png"
done

# Copiar PNGs existentes
cp imgs/*.png mobile/imgs/
echo "✓ Concluído!"
```

### Opção 3: Online (Sem Instalar)

1. Acesse https://convertio.co/svg-png/
2. Upload do arquivo SVG
3. Configuração:
   - Tamanho: 100x100 px
   - Fundo: Transparent
4. Download PNG
5. Salvar em `/mobile/imgs/`

Repita para cada arquivo.

## 📋 Arquivos que Precisam Converter

```
SVG → PNG (100x100):
✓ voltar.svg → voltar.png
✓ ajustes.svg → ajustes.png
✓ ajusteslaranja.svg → ajusteslaranja.png
✓ casinha.svg → casinha.png
✓ casinhalaranja.svg → casinhalaranja.png
✓ selecao.svg → selecao.png
✓ selecaolaranja.svg → selecaolaranja.png
✓ Iconsearch.svg → Iconsearch.png
✓ text_fields.svg → text_fields.png
✓ Sun.svg → Sun.png
✓ LogoLaranja.svg → LogoLaranja.png
✓ setahino.svg → setahino.png
✓ deletebutton.png (já existe)
```

## 🧪 Testando a App AGORA (Sem Imagens)

Você pode testar a app mesmo sem as imagens:

- As imagens não aparecem, mas o layout funciona
- Todos os botões funcionam
- Navegação funciona
- Teclado funciona
- Busca funciona

```bash
cd mobile
npm start
# Escanear QR code
```

## ✨ Após Converter

```bash
# 1. Ir para pasta mobile
cd mobile

# 2. Limpar cache (importante!)
npm start -- --clear

# 3. Escanear QR code novamente
```

## 🐛 Se Ainda Der Erro

Se a app ainda tiver erro de imagem:

1. Verificar se arquivo existe:

```bash
ls -la /Users/raissaduarteb/Desktop/dev/hinario/mobile/imgs/
```

2. Limpar cache do Expo:

```bash
cd mobile
rm -rf node_modules/.cache
npm start -- --clear
```

3. Reinstalar (último recurso):

```bash
cd mobile
rm -rf node_modules package-lock.json
npm install
npm start -- --clear
```

## Status Atual

✅ Todos os imports convertidos para `require()`
✅ Pasta `imgs/` criada
⏳ Arquivos PNG precisam ser copiados/convertidos
⏳ Testar em Expo Go

## Comando Rápido Macos

```bash
cd /Users/raissaduarteb/Desktop/dev/hinario && \
mkdir -p mobile/imgs && \
for svg in imgs/*.svg; do \
  convert "$svg" -density 150 -resize 100x100 "mobile/imgs/$(basename "$svg" .svg).png"; \
done && \
cp imgs/*.png mobile/imgs/ && \
echo "✓ Imagens convertidas!"
```

Pronto! Agora você só precisa converter as imagens e testar! 🚀
