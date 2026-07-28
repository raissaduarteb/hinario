import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Reader appearance controls (bottom sheet on the lyrics screen):
 * a theme toggle (escuro / claro) under a sun icon, and a font-size
 * slider under a "Tt" icon.
 */
export function ReaderControls({ theme = "claro", onThemeChange, fontScale = 1, onFontScaleChange, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 28,
        padding: "16px 24px 24px",
        background: "var(--surface-card)",
        ...style,
      }}
      {...rest}
    >
      {/* Theme toggle */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <Icon name="SunSize24" size={22} style={{ color: "var(--text-secondary)" }} />
        <div style={{ display: "flex", padding: 4, borderRadius: "var(--radius-full)", background: "var(--surface-sunken)" }}>
          {["escuro", "claro"].map((opt) => {
            const active = opt === theme;
            return (
              <button
                key={opt}
                onClick={() => onThemeChange && onThemeChange(opt)}
                style={{
                  padding: "8px 22px",
                  borderRadius: "var(--radius-full)",
                  border: "none",
                  cursor: "pointer",
                  background: active ? "var(--surface-card)" : "transparent",
                  boxShadow: active ? "0 1px 3px rgba(0,0,0,0.14)" : "none",
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--fw-medium)",
                  fontSize: "var(--fs-body)",
                  color: active ? "var(--brand)" : "var(--text-secondary)",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Font-size slider */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 12 }}>
        <Icon name="TextFields" size={24} style={{ color: "var(--text-secondary)", alignSelf: "center" }} />
        <input
          type="range"
          min={0.8}
          max={1.6}
          step={0.05}
          value={fontScale}
          onChange={(e) => onFontScaleChange && onFontScaleChange(parseFloat(e.target.value))}
          className="ccf-fontslider"
          style={{ width: "100%" }}
        />
        <style>{`
          .ccf-fontslider{-webkit-appearance:none;appearance:none;height:6px;border-radius:999px;background:var(--surface-sunken);outline:none}
          .ccf-fontslider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:6px;height:26px;border-radius:3px;background:var(--brand);cursor:pointer}
          .ccf-fontslider::-moz-range-thumb{width:6px;height:26px;border:none;border-radius:3px;background:var(--brand);cursor:pointer}
        `}</style>
      </div>
    </div>
  );
}
export default ReaderControls;
