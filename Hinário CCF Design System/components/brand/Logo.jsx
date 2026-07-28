import React from "react";

/**
 * Hinário CCF brand lockup. Renders the real logo bitmaps exported
 * from the source file — never redraw the mark.
 *  - variant "full": house mark + "COMUNIDADE CRISTÃ / EM FORTALEZA"
 *  - variant "mark": the house mark on its own
 */
export function Logo({ variant = "full", height, style, alt = "Comunidade Cristã em Fortaleza", ...rest }) {
  const isFull = variant === "full";
  const src = isFull ? "../../assets/brand/logo-full.png" : "../../assets/brand/mark-orange.png";
  const h = height ?? (isFull ? 48 : 36);
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: h,
        width: "auto",
        objectFit: "contain",
        display: "block",
        ...style,
      }}
      {...rest}
    />
  );
}
export default Logo;
