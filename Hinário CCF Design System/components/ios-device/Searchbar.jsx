import { Search } from './Search.jsx';

// figma node: 10:954 searchbar
export function Searchbar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 263,
      height: 43,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 263,
        height: 43,
        borderRadius: 20,
        backgroundColor: "rgba(233,233,233,0)",
        boxShadow: "inset 0 0 0 0.500px rgb(223,223,223), 0px 1px 3px 0px rgba(0,0,0,0.22)",
      }} />
      <span style={{
        position: "absolute",
        left: 32.154,
        top: 13,
        width: 230.846,
        height: 17,
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "100%",
        color: "rgb(194,194,194)",
      }}>{props.text1 ?? "Pesquise por número ou letras..."}</span>
      <div style={{
          position: "absolute",
          left: 12,
          top: 13,
          width: 17,
          height: 17,
        }}>{props.icon1 ?? <Search size={"48"} style={{ transform: "scale(0.354, 0.354)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default Searchbar;
