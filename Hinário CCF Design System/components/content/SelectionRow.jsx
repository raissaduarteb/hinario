import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Expandable selection row for the "Seleções de hinos" screen — a
 * title + date label with a brand-orange chevron that rotates open to
 * reveal its children.
 */
export function SelectionRow({ title, open = false, onToggle, children, style, ...rest }) {
  return (
    <div style={{ ...style }} {...rest}>
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: 12,
          padding: "18px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "var(--fs-title)",
            lineHeight: "var(--lh-tight)",
            color: "var(--text-body)",
          }}
        >
          {title}
        </span>
        <Icon
          name="ChevronLeftSize24"
          size={20}
          style={{
            color: "var(--brand)",
            flexShrink: 0,
            transform: open ? "rotate(90deg)" : "rotate(-90deg)",
            transition: "transform .18s ease",
          }}
        />
      </button>
      {open && <div style={{ paddingBottom: 12 }}>{children}</div>}
    </div>
  );
}
export default SelectionRow;
