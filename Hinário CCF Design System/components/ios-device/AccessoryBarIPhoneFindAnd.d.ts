import * as React from 'react';
export interface AccessoryBarIPhoneFindAndProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "Done". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const AccessoryBarIPhoneFindAnd: React.FC<AccessoryBarIPhoneFindAndProps>;
export default AccessoryBarIPhoneFindAnd;
