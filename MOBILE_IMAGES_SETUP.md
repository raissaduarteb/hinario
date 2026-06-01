# Próximas Etapas - Conversão de Imagens

## Imagens que Precisam ser Convertidas

O projeto web usa SVG, mas React Native precisa de PNG/JPG. Faça a conversão:

### De SVG para PNG (100x100 px cada)

```bash
# Instale imagemagick se não tiver:
# macOS: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Converter SVGs para PNGs:
convert /src/imgs/voltar.svg -density 150 -resize 100x100 /mobile/imgs/voltar.png
convert /src/imgs/deletebutton.png -resize 100x100 /mobile/imgs/deletebutton.png  # Já é PNG
convert /src/imgs/ajustes.svg -density 150 -resize 100x100 /mobile/imgs/ajustes.png
convert /src/imgs/ajusteslaranja.svg -density 150 -resize 100x100 /mobile/imgs/ajusteslaranja.png
convert /src/imgs/casinha.svg -density 150 -resize 100x100 /mobile/imgs/casinha.png
convert /src/imgs/casinhalaranja.svg -density 150 -resize 100x100 /mobile/imgs/casinhalaranja.png
convert /src/imgs/selecao.svg -density 150 -resize 100x100 /mobile/imgs/selecao.png
convert /src/imgs/selecaolaranja.svg -density 150 -resize 100x100 /mobile/imgs/selecaolaranja.png
convert /src/imgs/Iconsearch.svg -density 150 -resize 100x100 /mobile/imgs/Iconsearch.png
convert /src/imgs/text_fields.svg -density 150 -resize 100x100 /mobile/imgs/text_fields.png
convert /src/imgs/Sun.svg -density 150 -resize 100x100 /mobile/imgs/Sun.png
convert /src/imgs/LogoLaranja.svg -density 150 -resize 100x100 /mobile/imgs/LogoLaranja.png
convert /src/imgs/setahino.svg -density 150 -resize 100x100 /mobile/imgs/setahino.png
```

## Alternativa: Usar Service Online

Se não quiser instalar imagemagick:

1. Acesse https://convertio.co/svg-png/
2. Faça upload do SVG
3. Configure: 100x100 px, fundo transparente
4. Baixe PNG
5. Coloque em `/mobile/imgs/`

## Arquivos SVG do Projeto Web

Verifique se todos existem em `/src/imgs/`:

- ✓ voltar.svg
- ✓ deletebutton.png (já está em PNG!)
- ✓ ajustes.svg
- ✓ ajusteslaranja.svg
- ✓ casinha.svg
- ✓ casinhalaranja.svg
- ✓ selecao.svg
- ✓ selecaolaranja.svg
- ✓ Iconsearch.svg
- ✓ text_fields.svg
- ✓ Sun.svg
- ✓ LogoLaranja.svg
- ✓ setahino.svg

## Após Converter

1. Coloque todos os PNGs em `/mobile/imgs/`
2. Teste a app com `npm start`
3. Verifique se as imagens aparecem

## Comando Batch (macOS/Linux)

```bash
#!/bin/bash
cd /Users/raissaduarteb/Desktop/dev/hinario

for svg in imgs/*.svg; do
  filename=$(basename "$svg" .svg)
  convert "$svg" -density 150 -resize 100x100 "mobile/imgs/${filename}.png"
  echo "✓ Convertido: $filename.png"
done

# Copiar PNGs existentes
cp imgs/*.png mobile/imgs/
echo "✓ Todos os arquivos foram processados!"
```

## Próximas Ações

1. ✅ Componentes mobile criados
2. ✅ Rotas Expo Router configuradas
3. ✅ Hooks e contextos implementados
4. ⏳ **Converter imagens SVG para PNG**
5. ⏳ Testar na App Expo Go
6. ⏳ Corrigir erros de runtime
7. ⏳ Build para iOS/Android
