import * as React from 'react';
export interface KeysIPhoneNumericProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "number" | "number + abc" | "math";
  line1?: string;
  line2?: string;
  /** Text content; defaults to "􀆛". */
  text1?: string;
}
export declare const KeysIPhoneNumeric: React.FC<KeysIPhoneNumericProps>;
export default KeysIPhoneNumeric;
