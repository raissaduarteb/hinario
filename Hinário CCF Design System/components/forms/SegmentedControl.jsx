import React from "react";

/**
 * Two-option segmented control (e.g. Hinário / Harpa). The active
 * segment is a raised white pill with brand-orange label inside a
 * neutral track.
 */
export function SegmentedControl({ options = ["Hinário", "Harpa"], value, onChange, style, ...rest }) {
  const current = value ?? options[0];
  return (
    <div
      role="tablist"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${options.length}, 1fr)`,
        padding: 4,
        borderRadius: "var(--radius-full)",
        background: "var(--ea)",
        ...style,
      }}
      {...rest}
    >
      {options.map((opt) => {
        const isActive = opt === current;
        return (
          <button
            key={opt}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange && onChange(opt)}
            style={{
              padding: "10px 16px",
              borderRadius: "var(--radius-full)",
              border: "none",
              cursor: "pointer",
              background: isActive ? "var(--surface-card)" : "transparent",
              boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-semibold)",
              fontSize: "var(--fs-title)",
              lineHeight: "var(--lh-tight)",
              color: isActive ? "var(--brand)" : "var(--text-secondary)",
              transition: "color .15s ease",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
export default SegmentedControl;
