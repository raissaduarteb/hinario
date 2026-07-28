import * as React from "react";

/**
 * A hymn search-result row: badge + title + two-line snippet.
 */
export interface SongListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Reference shown in the badge (e.g. "L1", "H6"). */
  number?: React.ReactNode;
  /** Badge tone. */
  tone?: "solid" | "soft";
  /** Hymn title (rendered uppercase). */
  title?: string;
  /** Two-line lyric preview. */
  snippet?: string;
  /** Query to bold within the snippet. */
  query?: string;
  /** Show the bottom hairline divider. Default true. */
  divider?: boolean;
  onClick?: () => void;
}
export declare function SongListItem(props: SongListItemProps): JSX.Element;
export default SongListItem;
