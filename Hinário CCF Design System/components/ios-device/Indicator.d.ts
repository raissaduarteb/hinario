import * as React from 'react';
export interface IndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "camera" | "microphone" | "none";
}
export declare const Indicator: React.FC<IndicatorProps>;
export default Indicator;
