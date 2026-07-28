import * as React from 'react';
export interface FieldReplaceProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  state?: "default" | "typing" | "focused" | "text entered";
  replaceText?: string;
  /** Text content; defaults to "􀈊". */
  text1?: string;
  /** Text content; defaults to "􀁡". */
  text2?: string;
}
export declare const FieldReplace: React.FC<FieldReplaceProps>;
export default FieldReplace;
