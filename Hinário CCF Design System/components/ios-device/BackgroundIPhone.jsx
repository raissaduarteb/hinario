// figma node: 34:1311 _Background - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function BackgroundIPhone(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      borderRadius: 27,
      background: "linear-gradient(rgba(255,255,255,0.17),rgba(255,255,255,0.17)), linear-gradient(rgba(242,242,242,0.2),rgba(242,242,242,0.2)), linear-gradient(rgba(24,24,26,0.5),rgba(24,24,26,0.5))",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      overflow: "hidden",
      borderRadius: 27,
      background: "linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), linear-gradient(rgba(51,51,51,0.2),rgba(51,51,51,0.2)), linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default BackgroundIPhone;
