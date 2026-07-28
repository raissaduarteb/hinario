// figma node: 34:1214 Frame 1
export function Frame1(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 106,
      height: 42,
      borderRadius: 12,
      backgroundColor: "rgb(233,78,26)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(250,250,250)",
        flexShrink: 0,
      }}>{props.text1 ?? "Buscar"}</span>
    </div>
  );
}
export default Frame1;
