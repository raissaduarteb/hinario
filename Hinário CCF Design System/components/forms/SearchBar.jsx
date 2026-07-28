import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Rounded search field with a leading magnifier icon. Reads as an
 * inset pill with a soft drop shadow. Controlled or placeholder-only.
 */
export function SearchBar({ value, onChange, placeholder = "Pesquise por número ou letras...", onFocus, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: 43,
        padding: "0 16px",
        borderRadius: "var(--radius-pill)",
        background: "var(--surface-card)",
        boxShadow: "var(--shadow-search)",
        ...style,
      }}
      {...rest}
    >
      <Icon name="SearchSize20" size={17} style={{ color: "var(--text-placeholder)", flexShrink: 0 }} />
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        style={{
          flex: 1,
          minWidth: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "var(--font-body)",
          fontWeight: "var(--fw-regular)",
          fontSize: "var(--fs-body)",
          color: "var(--text-body)",
        }}
      />
    </div>
  );
}
export default SearchBar;
