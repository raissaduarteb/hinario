import { FieldFind } from './FieldFind.jsx';
import { LiquidGlassRegularSmall } from './LiquidGlassRegularSmall.jsx';
import { Next } from './Next.jsx';
import { Previous } from './Previous.jsx';
import { Symbol } from './Symbol.jsx';

// figma node: 34:2055 _Accessory Bar - iPhone - Find (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AccessoryBarIPhoneFind(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 11px 10px 11px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 84,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "6px 14px 6px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 84,
              height: 48,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(1.750, 1)", transformOrigin: "0 0" }}
              mode={"dark"}
              state={"default"}
            />
          </div>
          <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Previous mode={"dark"} enabled={true} />}</div>
          <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Next mode={"dark"} enabled={true} />}</div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 230,
              height: 48,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(4.792, 1)", transformOrigin: "0 0" }}
              mode={"dark"}
              state={"default"}
            />
          </div>
          <FieldFind
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"dark"}
            state={"text entered"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: 48,
          }}>{props.icon3 ?? <LiquidGlassRegularSmall mode={"dark"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 28,
            height: 22,
            flexShrink: 0,
          }}>{props.icon4 ?? <Symbol mode={"dark"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 11px 10px 11px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 84,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "6px 14px 6px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 84,
              height: 48,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(1.750, 1)", transformOrigin: "0 0" }}
              mode={"light"}
              state={"default"}
            />
          </div>
          <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Previous mode={"light"} enabled={true} />}</div>
          <div style={{
              position: "relative",
              width: 22,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Next mode={"light"} enabled={true} />}</div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 230,
              height: 48,
            }}>
            <LiquidGlassRegularSmall
              style={{ transform: "scale(4.792, 1)", transformOrigin: "0 0" }}
              mode={"light"}
              state={"default"}
            />
          </div>
          <FieldFind
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"light"}
            state={"text entered"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 48,
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: 48,
          }}>{props.icon3 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 28,
            height: 22,
            flexShrink: 0,
          }}>{props.icon4 ?? <Symbol mode={"light"} />}</div>
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
export default AccessoryBarIPhoneFind;
