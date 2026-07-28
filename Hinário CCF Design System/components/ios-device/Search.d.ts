import * as React from 'react';
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}
export declare const Search: React.FC<SearchProps>;
export default Search;
