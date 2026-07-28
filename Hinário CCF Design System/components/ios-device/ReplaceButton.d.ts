import * as React from 'react';
export interface ReplaceButtonProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  value?: string;
}
export declare const ReplaceButton: React.FC<ReplaceButtonProps>;
export default ReplaceButton;
