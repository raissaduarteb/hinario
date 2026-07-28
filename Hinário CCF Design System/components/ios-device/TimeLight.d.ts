import * as React from 'react';
export interface TimeLightProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "green" | "red" | "clear" | "blue";
}
export declare const TimeLight: React.FC<TimeLightProps>;
export default TimeLight;
