import * as React from 'react';
export interface NextProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  enabled?: boolean;
  /** Text content; defaults to "􀆈". */
  text1?: string;
}
export declare const Next: React.FC<NextProps>;
export default Next;
