import * as React from "react";

/**
 * Primary brand-orange action button.
 */
export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label. Default "Buscar". */
  children?: React.ReactNode;
  /** Stretch to fill the container width. */
  block?: boolean;
  disabled?: boolean;
}
export declare function PrimaryButton(props: PrimaryButtonProps): JSX.Element;
export default PrimaryButton;
