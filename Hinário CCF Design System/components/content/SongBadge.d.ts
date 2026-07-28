import * as React from "react";

/**
 * Rounded chip carrying a hymn number/reference.
 */
export interface SongBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** "solid" = full brand orange, "soft" = muted orange. */
  tone?: "solid" | "soft";
}
export declare function SongBadge(props: SongBadgeProps): JSX.Element;
export default SongBadge;
