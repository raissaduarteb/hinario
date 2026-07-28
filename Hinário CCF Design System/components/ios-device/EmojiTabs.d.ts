import * as React from 'react';
export interface EmojiTabsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀐫". */
  text1?: string;
  /** Text content; defaults to "􀛭". */
  text2?: string;
  /** Text content; defaults to "􀋉". */
  text3?: string;
}
export declare const EmojiTabs: React.FC<EmojiTabsProps>;
export default EmojiTabs;
