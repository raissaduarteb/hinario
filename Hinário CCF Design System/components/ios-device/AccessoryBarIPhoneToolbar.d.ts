import * as React from 'react';
export interface AccessoryBarIPhoneToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "1 symbol" | "2 symbols" | "3 symbols" | "4 symbols" | "5 symbols" | "6 symbols";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const AccessoryBarIPhoneToolbar: React.FC<AccessoryBarIPhoneToolbarProps>;
export default AccessoryBarIPhoneToolbar;
