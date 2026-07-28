import React from "react";

/**
 * Song-number badge — a small rounded chip carrying a hymn reference
 * (e.g. "001", "L1", "H6"). `solid` is full brand orange (current
 * hymn / primary result); `soft` is a muted orange for secondary
 * results.
 */
export function SongBadge({ children, tone = "solid", style, ...rest }) {
  const isSolid = tone === "solid";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 44,
        padding: "6px 10px",
        borderRadius: "var(--radius-badge)",
        background: isSolid ? "var(--brand)" : "rgba(233,78,26,0.55)",
        color: "var(--w)",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-bold)",
        fontSize: "var(--fs-song)",
        lineHeight: "var(--lh-tight)",
        letterSpacing: 0.2,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
export default SongBadge;
