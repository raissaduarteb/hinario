// figma node: 6:531 Indicator (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Indicator(_p = {}) {
  const props = { ..._p, type: _p.type ?? "camera" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(52,199,89)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(255,149,0)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Type=Camera
    "type=camera": __body0,
    // figma: Type=None
    "type=none": __body1,
    // figma: Type=Microphone
    "type=microphone": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Indicator;
