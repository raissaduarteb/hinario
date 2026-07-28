import React from "react";

/**
 * iOS-style status bar (device chrome) — clock left, signal / wi-fi /
 * battery right. `tone="dark"` paints glyphs dark for light screens;
 * "light" paints them white for dark screens. This is the one device
 * component kept from the source mockup kit.
 */
export function StatusBar({ time = "9:41", tone = "dark", style, ...rest }) {
  const fg = tone === "light" ? "var(--w)" : "var(--b)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 47,
        padding: "0 24px",
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--fw-semibold)", fontSize: 17, color: fg }}>{time}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 7, color: fg }}>
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={i * 4.6} y={9 - i * 3} width="3" height={3 + i * 3} rx="1" fill="currentColor" />
          ))}
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden>
          <path d="M8.5 1C11.6 1 14.4 2.2 16.4 4.1L15 5.6C13.3 4 11 3 8.5 3S3.7 4 2 5.6L0.6 4.1C2.6 2.2 5.4 1 8.5 1Z" fill="currentColor" />
          <path d="M8.5 5.2C10.3 5.2 11.9 5.9 13.1 7L11.6 8.5C10.8 7.7 9.7 7.2 8.5 7.2S6.2 7.7 5.4 8.5L3.9 7C5.1 5.9 6.7 5.2 8.5 5.2Z" fill="currentColor" />
          <path d="M8.5 9C9.2 9 9.8 9.3 10.3 9.7L8.5 11.5L6.7 9.7C7.2 9.3 7.8 9 8.5 9Z" fill="currentColor" />
        </svg>
        {/* battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="19" height="9" rx="2" fill="currentColor" />
          <path d="M24.5 4.5C25.3 4.8 25.3 8.2 24.5 8.5V4.5Z" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}
export default StatusBar;
