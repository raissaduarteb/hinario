One-sentence: A tappable hymn search-result row with a number badge, uppercase title, and a two-line lyric snippet that bolds the matched query.

```jsx
<SongListItem number="L1" tone="solid" title="Esta Paz"
  snippet="Esta paz que sinto em minh'alma, Não é porque tudo me vai bem;"
  query="Esta" onClick={() => open("L1")} />
```

Stack rows directly; each draws its own hairline divider (set `divider={false}` on the last). Use `tone="solid"` for the top match, `tone="soft"` for the rest.
