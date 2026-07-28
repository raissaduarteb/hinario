import * as React from 'react';
export interface KeyboardProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "numbers and punctuation" | "emoji" | "find" | "find and replace";
  /** Text content; defaults to "😂". */
  text1?: string;
  /** Text content; defaults to "👊". */
  text2?: string;
  /** Text content; defaults to "😭". */
  text3?: string;
  /** Text content; defaults to "👀". */
  text4?: string;
}
export declare const Keyboard: React.FC<KeyboardProps>;
export default Keyboard;
