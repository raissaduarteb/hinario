import * as React from "react";

/**
 * Back + number badge + title row for the lyrics reader.
 */
export interface LyricsHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: React.ReactNode;
  title?: string;
  onBack?: () => void;
}
export declare function LyricsHeader(props: LyricsHeaderProps): JSX.Element;
export default LyricsHeader;
