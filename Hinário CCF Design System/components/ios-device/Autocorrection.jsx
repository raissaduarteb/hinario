// figma node: 34:1623 _Autocorrection (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Autocorrection(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", option1: _p.option1 ?? "“The”", option2: _p.option2 ?? "the", option3: _p.option3 ?? "to" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 22px 0px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4.599999904632568,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 55.333,
          height: 28,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(255,255,255)",
        }}>{props.option1}</span>
      </div>
      <div style={{
        position: "relative",
        height: 25,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 1,
          opacity: 0.1,
          backgroundColor: "rgb(51,51,51)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4.599999904632568,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 55.333,
          height: 28,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(255,255,255)",
        }}>{props.option2}</span>
      </div>
      <div style={{
        position: "relative",
        height: 25,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 1,
          opacity: 0.1,
          backgroundColor: "rgb(51,51,51)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4.599999904632568,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 55.333,
          height: 28,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(255,255,255)",
        }}>{props.option3}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 22px 0px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4.599999904632568,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 55.333,
          height: 28,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-vibrant-primary)",
        }}>{props.option1}</span>
      </div>
      <div style={{
        position: "relative",
        height: 25,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 1,
          opacity: 0.1,
          backgroundColor: "var(--fills-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4.599999904632568,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 55.333,
          height: 28,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-vibrant-primary)",
        }}>{props.option2}</span>
      </div>
      <div style={{
        position: "relative",
        height: 25,
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 1,
          opacity: 0.1,
          backgroundColor: "var(--fills-vibrant-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4.599999904632568,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 55.333,
          height: 28,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-vibrant-primary)",
        }}>{props.option3}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Autocorrection;
