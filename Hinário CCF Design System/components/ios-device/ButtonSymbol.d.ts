import * as React from 'react';
export interface ButtonSymbolProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled" | "_button - symbol - dark";
  symbol?: string;
  property2?: "disabled" | "default";
}
export declare const ButtonSymbol: React.FC<ButtonSymbolProps>;
export default ButtonSymbol;
