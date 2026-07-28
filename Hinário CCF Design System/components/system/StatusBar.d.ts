import * as React from "react";

/**
 * iOS-style device status bar (clock + signal/wi-fi/battery).
 */
export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Clock text. Default "9:41". */
  time?: string;
  /** "dark" glyphs (light screens) or "light" glyphs (dark screens). */
  tone?: "dark" | "light";
}
export declare function StatusBar(props: StatusBarProps): JSX.Element;
export default StatusBar;
