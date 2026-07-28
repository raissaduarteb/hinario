import React from "react";
import { SongBadge } from "./SongBadge.jsx";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Lyrics reader sub-header: back chevron, the hymn-number badge and the
 * hymn title. Sits directly under the AppHeader on the reader screen.
 */
export function LyricsHeader({ number = "001", title = "ESTA PAZ", onBack, style, ...rest }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "4px 0", ...style }} {...rest}>
      {onBack && (
        <button
          onClick={onBack}
          aria-label="Voltar"
          style={{ background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--text-primary)", display: "flex" }}
        >
          <Icon name="ChevronLeftSize24" size={22} />
        </button>
      )}
      <SongBadge tone="solid">{number}</SongBadge>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-title)",
          lineHeight: "var(--lh-tight)",
          color: "var(--text-primary)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
    </div>
  );
}
export default LyricsHeader;
