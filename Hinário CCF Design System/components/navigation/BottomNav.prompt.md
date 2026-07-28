One-sentence: The app's three-tab bottom navigation (Home / Seleção / Ajustes) with brand-orange active state — pin to the bottom of every screen.

```jsx
const [tab, setTab] = React.useState("home");
<BottomNav active={tab} onChange={setTab} />
```

Active tab uses brand orange for icon + label; inactive uses neutral gray. Override `tabs` only if you need a different set.
