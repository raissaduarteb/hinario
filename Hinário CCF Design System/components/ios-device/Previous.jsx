// figma node: 34:1444 _Previous (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "enabled=" + __venc(p.enabled);

export function Previous(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", enabled: _p.enabled ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 1,
        top: -7,
        width: 22,
        height: 36,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-tertiary)",
      }}>{props.text1 ?? "􀆇"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 1,
        top: -7,
        width: 22,
        height: 36,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.text1 ?? "􀆇"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, Enabled=False
    "mode=light|enabled=false": __body0,
    // figma: Mode=Dark, Enabled=False
    "mode=dark|enabled=false": __body0,
    // figma: Mode=Light, Enabled=True
    "mode=light|enabled=true": __body1,
    // figma: Mode=Dark, Enabled=True
    "mode=dark|enabled=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Previous;
