import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * App top bar: the orange house mark + "Hinário" title, with optional
 * back button (left) and kebab/menu (right). Centered brand lockup.
 */
export function AppHeader({ title = "Hinário", onBack, onMenu, style, ...rest }) {
  return (
    <header
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        padding: "0 16px",
        ...style,
      }}
      {...rest}
    >
      {onBack && (
        <button
          onClick={onBack}
          aria-label="Voltar"
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            padding: 6,
            cursor: "pointer",
            color: "var(--text-primary)",
          }}
        >
          <Icon name="ChevronLeftSize24" size={22} />
        </button>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img
          src="../../assets/brand/mark-orange.png"
          alt=""
          style={{ height: 34, width: 22, objectFit: "contain", objectPosition: "center" }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "var(--fs-title)",
            lineHeight: "var(--lh-tight)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </span>
      </div>
      {onMenu && (
        <button
          onClick={onMenu}
          aria-label="Mais opções"
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            background: "none",
            border: "none",
            padding: 8,
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--text-secondary)" }} />
          ))}
        </button>
      )}
    </header>
  );
}
export default AppHeader;
