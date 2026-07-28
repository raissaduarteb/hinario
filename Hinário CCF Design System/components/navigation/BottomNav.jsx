import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

const TABS = [
  { key: "home", label: "Home", icon: "NavHome" },
  { key: "selecao", label: "Seleção", icon: "NavMusic" },
  { key: "ajustes", label: "Ajustes", icon: "NavGear" },
];

/**
 * Bottom tab bar — Home / Seleção / Ajustes. Active tab renders in
 * brand orange; inactive in neutral gray. White surface, soft top shadow.
 */
export function BottomNav({ active = "home", onChange, tabs = TABS, style, ...rest }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: 88,
        paddingBottom: 12,
        background: "var(--surface-card)",
        boxShadow: "var(--shadow-nav)",
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const isActive = t.key === active;
        const color = isActive ? "var(--icon-brand)" : "var(--icon-default)";
        return (
          <button
            key={t.key}
            onClick={() => onChange && onChange(t.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 12px",
              minWidth: 64,
            }}
          >
            <Icon name={t.icon} size={26} style={{ color }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "var(--fw-medium)",
                fontSize: "var(--fs-body)",
                lineHeight: "var(--lh-tight)",
                color: isActive ? "var(--icon-brand)" : "var(--text-secondary)",
              }}
            >
              {t.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
export default BottomNav;
