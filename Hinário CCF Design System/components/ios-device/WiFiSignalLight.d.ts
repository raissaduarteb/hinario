import * as React from 'react';
export interface WiFiSignalLightProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "0 bars" | "1 bars" | "2 bars" | "3 bars";
}
export declare const WiFiSignalLight: React.FC<WiFiSignalLightProps>;
export default WiFiSignalLight;
