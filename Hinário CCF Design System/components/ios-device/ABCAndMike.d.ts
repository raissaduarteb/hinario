import * as React from 'react';
export interface ABCAndMikeProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "ABC". */
  text1?: string;
  /** Text content; defaults to "􀊰". */
  text2?: string;
}
export declare const ABCAndMike: React.FC<ABCAndMikeProps>;
export default ABCAndMike;
