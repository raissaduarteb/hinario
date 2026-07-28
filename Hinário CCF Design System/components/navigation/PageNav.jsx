import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Lyrics reader page navigation — previous (outlined circle) and next
 * (filled brand circle) arrows. Disabled arrows fade out.
 */
export function PageNav({ onPrev, onNext, prevDisabled = false, nextDisabled = false, style, ...rest }) {
  const base = {
    width: 60,
    height: 60,
    borderRadius: "var(--radius-full)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    transition: "opacity .15s ease, transform .1s ease",
  };
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", ...style }} {...rest}>
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Anterior"
        style={{
          ...base,
          background: "transparent",
          border: "1.5px solid var(--border-brand)",
          color: "var(--brand)",
          opacity: prevDisabled ? 0.35 : 1,
        }}
      >
        <Icon name="ChevronLeftSize24" size={22} />
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Próximo"
        style={{
          ...base,
          background: "var(--brand)",
          border: "none",
          color: "var(--brand-contrast)",
          opacity: nextDisabled ? 0.35 : 1,
        }}
      >
        <Icon name="ChevronLeftSize24" size={22} style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
}
export default PageNav;
