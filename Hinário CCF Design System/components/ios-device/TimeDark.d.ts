import * as React from 'react';
export interface TimeDarkProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "green" | "red" | "clear" | "blue";
}
export declare const TimeDark: React.FC<TimeDarkProps>;
export default TimeDark;
