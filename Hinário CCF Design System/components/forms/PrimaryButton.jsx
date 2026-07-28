import React from "react";

/**
 * Primary action button (e.g. "Buscar"). Solid brand orange, 12px
 * radius, Figtree semibold. Full-width when `block`.
 */
export function PrimaryButton({ children = "Buscar", block = false, disabled = false, style, ...rest }) {
  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "12px 20px",
        borderRadius: "var(--radius-button)",
        border: "none",
        background: "var(--brand)",
        color: "var(--brand-contrast)",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-song)",
        lineHeight: "var(--lh-tight)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        width: block ? "100%" : "auto",
        transition: "filter .12s ease, transform .08s ease",
      }}
      onPointerDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.97)")}
      onPointerUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onPointerLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      {children}
    </button>
  );
}
export default PrimaryButton;
