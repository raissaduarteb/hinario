import React from "react";

/**
 * Keypad tile used on the home search pad — an outlined rounded square
 * holding a single glyph. Letters (C/H/S) render bold; digits regular,
 * matching the source. 68×73 by default.
 */
export function KeypadTile({ children, bold, onClick, style, ...rest }) {
  const isBold = bold ?? (typeof children === "string" && /[A-Za-z]/.test(children));
  return (
    <button
      onClick={onClick}
      style={{
        width: 68,
        height: 73,
        borderRadius: "var(--radius-tile)",
        background: "transparent",
        boxShadow: "inset 0 0 0 1px var(--border-strong)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-body)",
        fontWeight: isBold ? "var(--fw-bold)" : "var(--fw-regular)",
        fontSize: "var(--fs-keypad)",
        lineHeight: "var(--lh-tight)",
        color: "var(--text-body)",
        transition: "background .1s ease",
        ...style,
      }}
      onPointerDown={(e) => (e.currentTarget.style.background = "var(--surface-sunken)")}
      onPointerUp={(e) => (e.currentTarget.style.background = "transparent")}
      onPointerLeave={(e) => (e.currentTarget.style.background = "transparent")}
      {...rest}
    >
      {children}
    </button>
  );
}
export default KeypadTile;
