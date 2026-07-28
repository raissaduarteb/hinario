import { KeysIPhone } from './KeysIPhone.jsx';

// figma node: 34:1713 _Keys - iPhone - Space (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "config=" + __venc(p.config);

export function KeysIPhoneSpace(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", config: _p.config ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 199,
      borderRadius: 4.599999904632568,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <KeysIPhone
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        letter={" "}
        mode={"light"}
        type={"lowercase"}
      />
      <div style={{
          position: "relative",
          width: 42,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <KeysIPhone mode={"dark"} type={"punctuation"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 199,
      borderRadius: 4.599999904632568,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <KeysIPhone
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        letter={" "}
        mode={"light"}
        type={"lowercase"}
      />
      <div style={{
          position: "relative",
          width: 42,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <KeysIPhone character={"@"} mode={"dark"} type={"special charaters (not capitalized)"} />}</div>
      <div style={{
          position: "relative",
          width: 42,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <KeysIPhone mode={"dark"} type={"punctuation"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 199,
      borderRadius: 8.5,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <KeysIPhone
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        letter={" "}
        mode={"light"}
        type={"lowercase"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 199,
      borderRadius: 4.599999904632568,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <KeysIPhone
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        letter={" "}
        mode={"light"}
        type={"lowercase"}
      />
      <div style={{
          position: "relative",
          width: 42,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <KeysIPhone mode={"light"} type={"punctuation"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 199,
      borderRadius: 4.599999904632568,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <KeysIPhone
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        letter={" "}
        mode={"light"}
        type={"lowercase"}
      />
      <div style={{
          position: "relative",
          width: 42,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <KeysIPhone character={"@"} mode={"light"} type={"special charaters (not capitalized)"} />}</div>
      <div style={{
          position: "relative",
          width: 42,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <KeysIPhone mode={"light"} type={"punctuation"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Config=URL
    "mode=dark|config=url": __body0,
    // figma: Mode=Dark, Config=Email
    "mode=dark|config=email": __body1,
    // figma: Mode=Dark, Config=Default
    "mode=dark|config=default": __body2,
    // figma: Mode=Light, Config=URL
    "mode=light|config=url": __body3,
    // figma: Mode=Light, Config=Email
    "mode=light|config=email": __body4,
    // figma: Mode=Light, Config=Default
    "mode=light|config=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default KeysIPhoneSpace;
