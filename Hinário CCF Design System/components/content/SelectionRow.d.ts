import * as React from "react";

/**
 * Expandable row for the hymn-selections screen.
 */
export interface SelectionRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Row title, e.g. "Reunião da Mesa do Senhor | 31/05". */
  title?: string;
  /** Whether the row is expanded. */
  open?: boolean;
  onToggle?: () => void;
  /** Content revealed when open. */
  children?: React.ReactNode;
}
export declare function SelectionRow(props: SelectionRowProps): JSX.Element;
export default SelectionRow;
