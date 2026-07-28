import * as React from "react";

/**
 * App top bar with the centered "Hinário" house-mark lockup.
 */
export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Title shown next to the mark. Default "Hinário". */
  title?: string;
  /** Show a back chevron on the left; called on tap. */
  onBack?: () => void;
  /** Show a kebab menu on the right; called on tap. */
  onMenu?: () => void;
}
export declare function AppHeader(props: AppHeaderProps): JSX.Element;
export default AppHeader;
