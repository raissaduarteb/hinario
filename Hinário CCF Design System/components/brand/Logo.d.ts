import * as React from "react";

/**
 * Hinário CCF brand lockup — renders the exported logo bitmaps.
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** "full" = wordmark lockup, "mark" = house mark only */
  variant?: "full" | "mark";
  /** Rendered height in px (width auto). */
  height?: number;
}
export declare function Logo(props: LogoProps): JSX.Element;
export default Logo;
