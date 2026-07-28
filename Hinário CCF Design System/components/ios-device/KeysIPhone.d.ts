import * as React from 'react';
export interface KeysIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "uppercase" | "lowercase" | "punctuation" | "special charaters (not capitalized)" | "symbol" | "return" | "return-prominent" | "123" | "#+" | "abc" | "123 small";
  character?: string;
  letter?: string;
  punctuation?: string;
  symbol?: string;
  /** Text content; defaults to "􀅇". */
  text1?: string;
}
export declare const KeysIPhone: React.FC<KeysIPhoneProps>;
export default KeysIPhone;
