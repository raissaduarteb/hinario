import * as React from "react";

export interface LyricsVerse {
  text: string;
  /** Bold + darker (the sung refrain). */
  emphasis?: boolean;
}
/**
 * Scalable hymn lyrics body.
 */
export interface LyricsViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Verse blocks (string or {text, emphasis}). */
  verses?: (string | LyricsVerse)[];
  /** Font-size multiplier from ReaderControls. Default 1. */
  scale?: number;
}
export declare function LyricsView(props: LyricsViewProps): JSX.Element;
export default LyricsView;
