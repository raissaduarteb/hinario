// figma node: 34:2025 Liquid Glass - Regular - Small (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function LiquidGlassRegularSmall(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: 1000,
        filter: "drop-shadow(0px 0px 2px rgba(0,0,0,0.1)) drop-shadow(0px 1px 8px rgba(0,0,0,0.12))",
      }}>
        <path d={"M 0 24 C 0 10.745 10.745 0 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -26,
        top: -26,
        width: 100,
        height: 100,
        opacity: 0.67,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          clipPath: "inset(-50px 0px 0px -50px)",
        }}>
          <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
            position: "absolute",
            left: 26,
            top: 28,
            width: 48,
            height: 48,
            borderRadius: 1000,
            backdropFilter: "blur(40px)",
            color: "rgba(255,255,255,0.05)",
          }}>
            <path d={"M 0 24 C 0 10.745 10.745 0 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        opacity: 0.67,
        borderRadius: 1000,
      }}>
        <path d={"M 0 24 C 0 10.745 10.745 0 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: 296,
        color: "rgba(0,0,0,0.2)",
      }}>
        <path d={"M 0 24 C 0 10.745 10.745 0 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -26,
        top: -26,
        width: 100,
        height: 100,
        opacity: 0.67,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          clipPath: "inset(-50px 0px 0px -50px)",
        }}>
          <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
            position: "absolute",
            left: 26,
            top: 28,
            width: 48,
            height: 48,
            borderRadius: 1000,
            backdropFilter: "blur(40px)",
            color: "rgba(0,0,0,0.04)",
          }}>
            <path d={"M 0 24 C 0 10.745 10.745 0 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: 296,
      }}>
        <path d={"M 0 24 C 0 10.745 10.745 0 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Primary
    "mode=dark|state=primary": __body0,
    // figma: Mode=Dark, State=Default
    "mode=dark|state=default": __body1,
    // figma: Mode=Light, State=Primary
    "mode=light|state=primary": __body0,
    // figma: Mode=Light, State=Default
    "mode=light|state=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default LiquidGlassRegularSmall;
