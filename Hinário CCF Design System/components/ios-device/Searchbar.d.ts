import * as React from 'react';
export interface SearchbarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Pesquise por número ou letras...". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Searchbar: React.FC<SearchbarProps>;
export default Searchbar;
