One-sentence: The Hinário / Harpa segmented toggle — a raised white active pill with brand-orange label on a neutral track.

```jsx
const [book, setBook] = React.useState("Hinário");
<SegmentedControl value={book} onChange={setBook} />
```

Defaults to two options; pass `options` for others. Uses the display font (Ysabeau Office) for labels.
