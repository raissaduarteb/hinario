One-sentence: The rounded pill search field with a leading magnifier used to look up hymns by number or letters.

```jsx
const [q, setQ] = React.useState("");
<SearchBar value={q} onChange={setQ} />
```

Placeholder defaults to "Pesquise por número ou letras...". Sits on a card surface with the soft inset+drop shadow.
