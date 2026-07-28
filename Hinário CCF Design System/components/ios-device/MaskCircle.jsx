// figma node: 34:1440 _Mask - Circle
export function MaskCircle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      height: 200,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 76,
        top: 76,
        width: 48,
        height: 48,
        borderRadius: 1000,
        backgroundColor: "rgb(0,0,0)",
      }} />
    </div>
  );
}
export default MaskCircle;
