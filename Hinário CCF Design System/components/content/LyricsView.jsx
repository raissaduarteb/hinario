import React from "react";

/**
 * Hymn lyrics body. Verses are rendered from an array of blocks; every
 * other block is emphasized (the sung refrain), matching the source.
 * `scale` multiplies the base 16px line size (driven by ReaderControls).
 */
export function LyricsView({ verses = [], scale = 1, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${1.1 * scale}em`,
        fontFamily: "var(--font-body)",
        fontSize: `calc(var(--fs-song) * ${scale})`,
        lineHeight: 1.35,
        color: "var(--text-body)",
        ...style,
      }}
      {...rest}
    >
      {verses.map((v, i) => (
        <p
          key={i}
          style={{
            margin: 0,
            whiteSpace: "pre-line",
            fontWeight: v.emphasis ? "var(--fw-bold)" : "var(--fw-regular)",
            color: v.emphasis ? "var(--text-primary)" : "var(--text-body)",
          }}
        >
          {typeof v === "string" ? v : v.text}
        </p>
      ))}
    </div>
  );
}
export default LyricsView;
