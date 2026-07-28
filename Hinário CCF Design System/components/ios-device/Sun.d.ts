import * as React from 'react';
export interface SunProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}
export declare const Sun: React.FC<SunProps>;
export default Sun;
