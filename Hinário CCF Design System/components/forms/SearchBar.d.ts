import * as React from "react";

/**
 * Rounded search field with leading magnifier.
 */
export interface SearchBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
}
export declare function SearchBar(props: SearchBarProps): JSX.Element;
export default SearchBar;
