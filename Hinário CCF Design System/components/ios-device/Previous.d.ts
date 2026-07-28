import * as React from 'react';
export interface PreviousProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  enabled?: boolean;
  /** Text content; defaults to "􀆇". */
  text1?: string;
}
export declare const Previous: React.FC<PreviousProps>;
export default Previous;
