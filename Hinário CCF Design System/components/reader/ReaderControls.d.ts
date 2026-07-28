import * as React from "react";

/**
 * Lyrics reader appearance controls — theme toggle + font-size slider.
 */
export interface ReaderControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "escuro" | "claro". */
  theme?: "escuro" | "claro";
  onThemeChange?: (theme: "escuro" | "claro") => void;
  /** Font-size multiplier (0.8–1.6). */
  fontScale?: number;
  onFontScaleChange?: (scale: number) => void;
}
export declare function ReaderControls(props: ReaderControlsProps): JSX.Element;
export default ReaderControls;
