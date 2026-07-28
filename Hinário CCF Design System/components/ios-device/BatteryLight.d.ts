import * as React from 'react';
export interface BatteryLightProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "normal" | "charging";
  level?: "10" | "100" | "50";
}
export declare const BatteryLight: React.FC<BatteryLightProps>;
export default BatteryLight;
