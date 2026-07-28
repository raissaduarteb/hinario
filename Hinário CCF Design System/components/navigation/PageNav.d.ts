import * as React from "react";

/** Previous / next page arrows for the lyrics reader. */
export interface PageNavProps extends React.HTMLAttributes<HTMLDivElement> {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}
export declare function PageNav(props: PageNavProps): JSX.Element;
export default PageNav;
