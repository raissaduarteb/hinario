One-sentence: One outlined rounded-square keypad tile holding a letter or digit for the home search pad.

```jsx
<KeypadTile onClick={() => append("C")}>C</KeypadTile>
<KeypadTile onClick={() => append("7")}>7</KeypadTile>
```

Letters render bold, digits regular (auto-detected; override with `bold`). Lay out in a 3-column grid with ~16px gaps to recreate the C/H/S + 0–9 pad.
