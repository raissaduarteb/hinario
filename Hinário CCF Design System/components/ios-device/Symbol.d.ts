import * as React from 'react';
export interface SymbolProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀆅". */
  text1?: string;
}
export declare const Symbol: React.FC<SymbolProps>;
export default Symbol;
