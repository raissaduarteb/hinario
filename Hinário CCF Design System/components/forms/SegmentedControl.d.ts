import * as React from "react";

/**
 * Two-option segmented toggle (Hinário / Harpa).
 */
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options?: string[];
  value?: string;
  onChange?: (option: string) => void;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
export default SegmentedControl;
