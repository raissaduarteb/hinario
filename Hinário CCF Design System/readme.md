# Hinário CCF — Design System

Design system for **Hinário CCF**, the web/mobile hymnal ("hinário") app for **Comunidade Cristã em Fortaleza** (CCF), a Christian community in Fortaleza, Brazil. The app lets members look up hymns by number or letters, browse the *Hinário* and *Harpa* songbooks, read lyrics with adjustable size and a light/dark reader, and open curated hymn *seleções* for each meeting.

This system was extracted from the client's Figma file and rebuilt as tokens, components, foundation cards and an interactive UI kit. The product is intentionally lean: one accent color (orange), a neutral gray ramp, two typefaces, and a small, purpose-built component set.

## Sources
- **Figma:** "Hinario CCF.fig" (attached) — the source of truth for tokens, components, screens and brand assets. All numeric values (radii, sizes, colors) are transcribed verbatim from it.
- **GitHub (existing implementation, for deeper reference):**
  - App — https://github.com/raissaduarteb/hinario
  - API — https://github.com/kelvenrafaX/hinario-api

  These repos are the running app the design refines. Explore them to build higher-fidelity or production work; nothing from them is bundled here.

The user's goal: *"Já criei o hinário, porém quero deixar com melhor design e usabilidade"* — improve the design and usability of the existing hymnal.

---

## Content fundamentals
- **Language:** Brazilian Portuguese, throughout. UI labels are short nouns: *Home, Seleção, Ajustes, Buscar, Hinário, Harpa, escuro, claro*.
- **Casing:** Hymn and section titles are **UPPERCASE** ("ESTA PAZ", "SELEÇÕES DE HINOS"); nav and control labels are sentence/lowercase ("escuro", "claro", "Seleção").
- **Voice:** Functional and reverent — the copy is the hymn content itself. No marketing voice, no first/second-person UI chatter. Placeholder text is instructional: *"Pesquise por número ou letras…"*.
- **Numbers as identity:** Hymns are addressed by reference badges — a book letter + number (`L1`, `H6`, `H18`, `S10`) or a zero-padded index (`001`). These badges are a core content pattern, not decoration.
- **Emoji:** none. No emoji, no unicode-glyph icons — iconography is real SVG (see Iconography).
- **Vibe:** calm, legible, utilitarian; a tool for use during worship, so contrast and tap-targets favor quick, low-friction reading.

## Visual foundations
- **Color:** A single brand orange — `--l1` / `--brand` = `rgb(233,78,26)` — against a nine-step neutral gray ramp (`--c1` lightest → `--c9` darkest) plus white and an off-white app background `--fa` `rgb(250,250,250)`. A soft peach `--peach` `rgb(251,222,212)` and orange-at-55% are the only tints (used for secondary badges / active pills). No gradients anywhere. One accent color, used sparingly for the active/primary state only.
- **Dark reader:** the lyrics reader flips to a `rgb(45,45,45)` surface with light-gray text and a `rgb(79,79,79)` raised layer; the orange accent is unchanged.
- **Type:** **Ysabeau Office** (display) for the brand wordmark, screen titles (20px/600), section headers and hymn titles; **Figtree** (body/UI) for search, nav labels (14px/500), buttons (16px/600), lyrics (16px) and the large keypad glyphs (40px — letters bold, digits regular). Both are on Google Fonts (exact match — no substitution).
- **Spacing & radii:** radii are specific and worth honoring exactly — badge `8`, primary button `12`, keypad tile & search pill `20`, circular page-nav/segmented `full`. Spacing runs on a 4-based scale (4·8·12·16·20·24·32).
- **Backgrounds:** flat off-white; no imagery, patterns, textures or full-bleed photography. The splash screen is the centered wordmark on white.
- **Borders & elevation:** hairlines are 1px `--df` `rgb(223,223,223)`. Keypad tiles use a 1px **inset** stroke in near-black `--c9`. The search field has a distinctive combined shadow — a 0.5px inset hairline **plus** a soft `0 1px 3px rgba(0,0,0,.22)` drop (`--shadow-search`). The bottom nav lifts with an upward `0 -3px 5px rgba(0,0,0,.05)` shadow. Cards are white with a soft drop shadow; no colored left-border accents.
- **Corner language:** everything is rounded — soft-square tiles, pill inputs, fully-round nav circles. No sharp corners in the UI.
- **Hover / press:** primary button scales to `0.97` on press; keypad tiles flash a light sunken fill; nav/segments swap to the accent color. Transitions are short (~0.1–0.18s) ease — subtle, no bounces or elaborate motion.
- **Imagery tone:** n/a — the app carries no photography. The only bitmaps are the logo lockups and house mark.

## Iconography
- Icons are **line/solid SVGs** exported from the source, rendered through a single `Icon` component (`assets/icons/`). All paint with `currentColor` so they recolor via CSS.
- **Set:** filled tab glyphs `NavHome` / `NavMusic` / `NavGear`; size-specific outline icons `SearchSize16–48`, `ChevronLeftSize16–48`, `SunSize16–48`; plus `MusicNote` and `TextFields` (the "Tt" font-size glyph). See `assets/icons/Icon.d.ts` for the full name list.
- No icon font, no emoji, no unicode-as-icon. The house **mark** (brand logo glyph) is a bitmap asset, not an icon-font glyph.

---

## Components
Reusable primitives (React, styled with the CSS custom properties). Grouped by concern under `components/`:

**brand/** — `Logo` (wordmark / house-mark lockup, from the real bitmaps)
**navigation/** — `AppHeader` (brand top bar), `BottomNav` (Home/Seleção/Ajustes tabs), `PageNav` (reader prev/next arrows)
**forms/** — `PrimaryButton` (Buscar), `SearchBar` (pill search), `SegmentedControl` (Hinário/Harpa), `KeypadTile` (letter/digit tile)
**content/** — `SongBadge` (reference chip), `SongListItem` (search-result row), `SelectionRow` (expandable seleção), `LyricsHeader` (badge + title), `LyricsView` (scalable lyric body)
**reader/** — `ReaderControls` (theme toggle + font-size slider)
**system/** — `StatusBar` (device chrome)
**assets/icons/** — `Icon` (the SVG icon set)

### Intentional additions
The Figma file's "component families" are dominated by an imported **iOS device-mockup UI kit** (keyboard layouts, keys, battery/wi-fi/signal/notch/time/status-bar variants, emoji tabs, autocorrection bars, etc. — ~24 families). Those are device chrome used only to render the phone mockups, **not** part of the hinário's own design language, so they are intentionally **not** rebuilt as components. The one exception kept is `StatusBar`, since every screen shows it. The app's real UI (header, nav, search, keypad, buttons, badges, result rows, selections, lyrics reader, reader controls) is not expressed as tidy Figma component sets in the source, so those primitives were authored from the screens' exact transcribed values and named in the app's own vocabulary.

### Intentional additions
The source Figma file does not store the app's own UI as tidy component sets, so these 13 primitives were authored from the screens' exact transcribed values and named in the app's own (Portuguese-context) vocabulary. They are **intentional additions**, not renames of kit families: `Logo`, `AppHeader`, `BottomNav`, `PageNav`, `PrimaryButton`, `SearchBar`, `SegmentedControl`, `KeypadTile`, `SongBadge`, `SongListItem`, `SelectionRow`, `LyricsHeader`, `LyricsView`, `ReaderControls`. (`StatusBar` and `Icon` map to kit families.)

### iOS device chrome (imported, for source coverage)
The Figma file's other "component families" are an imported **iOS device-mockup UI kit** (keyboard layouts, keys, battery/wi-fi/signal/notch/time/status widgets, emoji tabs, autocorrection bars, etc.). These are device chrome used only to render the phone mockups — **not** part of the hinário's own design language — but they are materialized under `components/ios-device/` for complete source coverage. Prefer the hinário's own components above for real work.

`components/ios-device/`: `ABCAndMike`, `AccessoryBarIPhoneFind`, `AccessoryBarIPhoneFindAnd`, `AccessoryBarIPhoneToolbar`, `Autocorrection`, `BackgroundIPhone`, `ButtonSymbol`, `EmojiTabs`, `FieldBG`, `FieldFind`, `FieldReplace`, `KeyboardIPhoneLayouts`, `KeysIPhone`, `KeysIPhoneNumeric`, `KeysIPhoneSpace`, `Next`, `Previous`, `ReplaceButton`, `SearchEmoji`, `Symbol`, `BatteryDark`, `BatteryLight`, `Indicator`, `Keyboard`, `LiquidGlassRegularSmall`, `NetworkSignalDark`, `NetworkSignalLight`, `Notch`, `TimeDark`, `TimeLight`, `WiFiSignalDark`, `WiFiSignalLight`, `Search`, `Sun`, `ChevronLeft`, `Searchbar`, `MusicNote`, `TextFields`, `Copy`, `Frame1`, `Group4`, `MaskCircle`.

## UI kits
- **ui_kits/hinario/** — interactive click-through of the full app: Home (keypad search) → Search results → Lyrics reader (with light/dark + font-size controls) → Seleções. See its `README.md`.

## Brand assets
`assets/brand/` — logo lockups and house marks exported from the source:
- `logo-full.png` — wordmark (orange house + black "COMUNIDADE CRISTÃ / EM FORTALEZA")
- `logo-ad33.png` — white wordmark (for dark/photo backgrounds)
- `logo-e41a.png`, `logo-8153.png` — additional wordmark variants
- `mark-orange.png`, `mark-2d2a.png`, `mark-bf1a.png` — the standalone house mark

## Foundations (Design System tab)
Specimen cards live in `guidelines/` (Colors, Type, Spacing, Brand groups) and each component directory carries a `@dsCard` thumbnail.

---

## Index / manifest
- `styles.css` — global entry point (@imports only)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
- `components/` — reusable primitives (see Components above)
- `ui_kits/hinario/` — interactive app recreation
- `guidelines/` — foundation specimen cards
- `assets/brand/` — logos & house marks · `assets/icons/` — `Icon` set + data
- `thumbnail.html` — design-system homepage tile
- `SKILL.md` — Agent-Skill wrapper
- `github.md` — source-repo association

## Caveats
- **Fonts** are loaded from Google Fonts (Figtree + Ysabeau Office are exact matches to the source — no substitution). If you have the licensed font binaries, drop them into `tokens/` and swap the `@font-face` source.
- **Tokens:** the Figma variable collection was polluted by the imported iOS/Material kit (SDS, Brand-B, keyboard, scheme variables). The token files here keep only the hinário's real palette (`w, b, c1–c9, l1`) plus semantic aliases derived from the screens.
- **Device chrome** (keyboard, battery, wi-fi, etc.) is materialized under `components/ios-device/` for source coverage but is not part of the hinário's own design language — see *iOS device chrome*.
