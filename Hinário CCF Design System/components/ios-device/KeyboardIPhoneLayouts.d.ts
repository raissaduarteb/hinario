import * as React from 'react';
export interface KeyboardIPhoneLayoutsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "letters - lowercase" | "letters - uppercase" | "numbers" | "characters";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const KeyboardIPhoneLayouts: React.FC<KeyboardIPhoneLayoutsProps>;
export default KeyboardIPhoneLayouts;
