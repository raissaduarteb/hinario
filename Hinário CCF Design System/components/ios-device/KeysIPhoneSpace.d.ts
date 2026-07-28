import * as React from 'react';
export interface KeysIPhoneSpaceProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  config?: "default" | "email" | "url";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const KeysIPhoneSpace: React.FC<KeysIPhoneSpaceProps>;
export default KeysIPhoneSpace;
