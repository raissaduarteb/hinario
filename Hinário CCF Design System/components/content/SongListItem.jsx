import React from "react";
import { SongBadge } from "./SongBadge.jsx";

/** Renders a snippet, bolding the matched query occurrences. */
function highlight(text, query) {
  if (!query) return text;
  const parts = String(text).split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig"));
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase()
      ? <strong key={i} style={{ fontWeight: "var(--fw-bold)", color: "var(--text-body)" }}>{p}</strong>
      : <React.Fragment key={i}>{p}</React.Fragment>
  );
}

/**
 * Search-result / hymn list row: number badge, uppercase title, and a
 * two-line lyric snippet with the matched query bolded. Hairline
 * divider below.
 */
export function SongListItem({ number, tone = "soft", title, snippet, query, onClick, divider = true, style, ...rest }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 4px",
        cursor: onClick ? "pointer" : "default",
        borderBottom: divider ? "1px solid var(--border-hairline)" : "none",
        ...style,
      }}
      {...rest}
    >
      <SongBadge tone={tone}>{number}</SongBadge>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "var(--fs-title)",
            lineHeight: "var(--lh-tight)",
            color: "var(--text-primary)",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: "var(--fw-regular)",
            fontSize: "var(--fs-body)",
            lineHeight: 1.35,
            color: "var(--text-muted)",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {highlight(snippet, query)}
        </div>
      </div>
    </div>
  );
}
export default SongListItem;
