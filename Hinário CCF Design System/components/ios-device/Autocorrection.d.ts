import * as React from 'react';
export interface AutocorrectionProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  option1?: string;
  option2?: string;
  option3?: string;
}
export declare const Autocorrection: React.FC<AutocorrectionProps>;
export default Autocorrection;
