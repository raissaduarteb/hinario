# Hinário CCF — UI Kit

Interactive click-through recreation of the **Hinário CCF** mobile app (the web/mobile hymnal for *Comunidade Cristã em Fortaleza*), rebuilt from the attached Figma source.

## Run
Open `index.html`. It mounts an iPhone frame and boots on the **Home** screen.

## Flow
- **Home** — brand header, search field, the Hinário/Harpa toggle, the letter+number keypad (C H S · 0–9) and the **Buscar** button. Tap the search field or **Buscar** to open results.
- **Search** — filled query ("Esta") with a live result list; matched words are bolded. Tap a result to open the reader.
- **Reader (Letra)** — hymn number badge + title, the lyric verses (refrains emphasized), and page arrows. Tap the header **kebab** (or the **Ajustes** tab) to reveal the appearance controls: **escuro/claro** theme toggle and the font-size slider. Switching to *escuro* re-themes the whole screen.
- **Seleções** — expandable saved hymn selections (Seleção tab).

## Files
- `index.html` — phone frame + mount
- `app.jsx` — screen components and the navigation shell
- `data.js` — sample hymn content ("Esta Paz") and selections

## Built from
Every screen composes the design-system components (`AppHeader`, `SearchBar`, `SegmentedControl`, `KeypadTile`, `PrimaryButton`, `BottomNav`, `SongListItem`, `LyricsHeader`, `LyricsView`, `PageNav`, `ReaderControls`, `SelectionRow`, `StatusBar`, `Icon`) — nothing is re-implemented locally.
