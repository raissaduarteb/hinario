import * as React from "react";

/**
 * Single outlined keypad tile (letter or digit) for the search pad.
 */
export interface KeypadTileProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The glyph to display (e.g. "C" or "7"). */
  children?: React.ReactNode;
  /** Force bold weight. Defaults to bold for letters, regular for digits. */
  bold?: boolean;
}
export declare function KeypadTile(props: KeypadTileProps): JSX.Element;
export default KeypadTile;
