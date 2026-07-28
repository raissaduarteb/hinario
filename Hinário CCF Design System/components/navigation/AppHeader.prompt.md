One-sentence: The app's top bar showing the orange house mark and "Hinário" title, with optional back and kebab controls — use at the top of every app screen.

```jsx
<AppHeader />
<AppHeader onBack={() => nav.pop()} onMenu={() => openReaderMenu()} />
```

Title defaults to "Hinário". `onBack` reveals a left chevron; `onMenu` reveals a right kebab (used on the lyrics reader).
