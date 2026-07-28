import * as React from 'react';
export interface FieldFindProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "typing" | "focused" | "text entered";
  total?: string;
  searchText?: string;
  current?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀆈". */
  text2?: string;
  /** Text content; defaults to "of". */
  text3?: string;
  /** Text content; defaults to "􀁡". */
  text4?: string;
}
export declare const FieldFind: React.FC<FieldFindProps>;
export default FieldFind;
