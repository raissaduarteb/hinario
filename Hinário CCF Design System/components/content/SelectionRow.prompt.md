One-sentence: An accordion row for a saved hymn selection (title + date) whose brand-orange chevron rotates to reveal the hymns inside.

```jsx
const [open, setOpen] = React.useState(false);
<SelectionRow title="Reunião de Oração | 25/05" open={open} onToggle={() => setOpen(!open)}>
  <SongListItem number="001" title="Esta Paz" snippet="…" />
</SelectionRow>
```

Title uses the display font. Nest `SongListItem`s (or any content) as children.
