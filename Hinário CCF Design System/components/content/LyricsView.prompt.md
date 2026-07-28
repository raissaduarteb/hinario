One-sentence: The hymn lyrics body — verse blocks with the refrain emphasized, whose text size is driven by the reader's font-size control.

```jsx
<LyricsView scale={fontScale} verses={[
  { text: "Esta paz que sinto em minh'alma,\nNão é porque tudo me vai bem;" },
  { text: "Não olho as circunstâncias (não, não, não)\nSó olho o seu amor", emphasis: true },
]} />
```

Use `\n` for line breaks inside a verse; `emphasis: true` renders the refrain bold + darker.
