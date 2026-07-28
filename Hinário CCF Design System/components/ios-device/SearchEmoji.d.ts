import * as React from 'react';
export interface SearchEmojiProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "Search Emoji". */
  text2?: string;
  /** Text content; defaults to "Genmoji". */
  text3?: string;
}
export declare const SearchEmoji: React.FC<SearchEmojiProps>;
export default SearchEmoji;
