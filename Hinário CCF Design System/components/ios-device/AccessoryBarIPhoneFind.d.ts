import * as React from 'react';
export interface AccessoryBarIPhoneFindProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const AccessoryBarIPhoneFind: React.FC<AccessoryBarIPhoneFindProps>;
export default AccessoryBarIPhoneFind;
