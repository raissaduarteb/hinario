import * as React from 'react';
export interface NetworkSignalLightProps {
  className?: string;
  style?: React.CSSProperties;
  strength?: "0 bars" | "1 bars" | "3 bars" | "4 bars" | "2 bars";
}
export declare const NetworkSignalLight: React.FC<NetworkSignalLightProps>;
export default NetworkSignalLight;
