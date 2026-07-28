One-sentence: The Hinário CCF icon set — renders any glyph from the source kit (nav house/music/gear, search, chevron, sun, Tt, music note) as an inline SVG that inherits `color`.

```jsx
import { Icon } from "./assets/icons/Icon.jsx";
<Icon name="NavHome" size={26} style={{ color: "var(--icon-brand)" }} />
<Icon name="SearchSize24" size={18} />
```

Names: `NavHome`, `NavMusic`, `NavGear` (filled tab glyphs); `SearchSize16–48`, `ChevronLeftSize16–48`, `SunSize16–48` (size-specific); `MusicNote`, `TextFields`. Single-color — recolor via CSS `color`. See `Icon.d.ts` for the full name list.
