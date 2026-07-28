import * as React from 'react';
export interface BatteryDarkProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "normal" | "charging";
  level?: "10" | "100" | "50";
}
export declare const BatteryDark: React.FC<BatteryDarkProps>;
export default BatteryDark;
