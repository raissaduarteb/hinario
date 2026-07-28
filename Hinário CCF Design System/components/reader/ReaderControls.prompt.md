One-sentence: The lyrics reader's appearance sheet — an escuro/claro theme toggle and a font-size slider — used to adjust reading comfort.

```jsx
const [theme, setTheme] = React.useState("claro");
const [scale, setScale] = React.useState(1);
<ReaderControls theme={theme} onThemeChange={setTheme}
  fontScale={scale} onFontScaleChange={setScale} />
```

Wire `theme` to a `data-theme` attribute on the screen root and `fontScale` into `LyricsView`.
