import * as React from "react";

/**
 * Bottom tab bar for the Hinário app (Home / Seleção / Ajustes).
 */
export interface NavTab {
  key: string;
  label: string;
  /** Icon name from the Icon set (e.g. "NavHome"). */
  icon: string;
}
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Key of the active tab. */
  active?: string;
  /** Called with the tapped tab key. */
  onChange?: (key: string) => void;
  /** Override the default three tabs. */
  tabs?: NavTab[];
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
export default BottomNav;
