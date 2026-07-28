import * as React from 'react';
export type IconName =
  | "ChevronLeftSize16"
  | "ChevronLeftSize20"
  | "ChevronLeftSize24"
  | "ChevronLeftSize32"
  | "ChevronLeftSize40"
  | "ChevronLeftSize48"
  | "MusicNote"
  | "SearchSize16"
  | "SearchSize20"
  | "SearchSize24"
  | "SearchSize32"
  | "SearchSize40"
  | "SearchSize48"
  | "SunSize16"
  | "SunSize20"
  | "SunSize24"
  | "SunSize32"
  | "SunSize40"
  | "SunSize48"
  | "TextFields"
  | "NavHome"
  | "NavMusic"
  | "NavGear"
  | "Share"
  | "Close"
  | "Menu";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
