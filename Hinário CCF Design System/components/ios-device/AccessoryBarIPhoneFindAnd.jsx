import { FieldBG } from './FieldBG.jsx';
import { FieldFind } from './FieldFind.jsx';
import { FieldReplace } from './FieldReplace.jsx';
import { ReplaceButton } from './ReplaceButton.jsx';

// figma node: 34:1578 _Accessory Bar - iPhone - Find and Replace (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AccessoryBarIPhoneFindAnd(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 101,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 0,
        width: 378,
        height: 101,
        borderRadius: 27,
      }}>
        <div style={{
          position: "absolute",
          left: -26,
          top: -26,
          width: 430,
          height: 153,
          opacity: 0.67,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 430,
            height: 153,
            clipPath: "inset(-50px 0px 0px -50px)",
          }}>
            <svg width={378} height={101} viewBox="0 0 378 101" fill="none" style={{
              position: "absolute",
              left: 26,
              top: 28,
              width: 378,
              height: 101,
              borderRadius: 27,
              backdropFilter: "blur(40px)",
              color: "rgba(255,255,255,0.05)",
            }}>
              <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 334.8 0 C 349.921 0 357.482 0 363.258 2.943 C 368.338 5.531 372.469 9.662 375.057 14.742 C 378 20.518 378 28.079 378 43.2 L 378 57.8 C 378 72.921 378 80.482 375.057 86.258 C 372.469 91.338 368.338 95.469 363.258 98.057 C 357.482 101 349.921 101 334.8 101 L 43.2 101 C 28.079 101 20.518 101 14.742 98.057 C 9.662 95.469 5.531 91.338 2.943 86.258 C 0 80.482 0 72.921 0 57.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <svg width={378} height={101} viewBox="0 0 378 101" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 378,
          height: 101,
          opacity: 0.67,
          borderRadius: 27,
        }}>
          <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 334.8 0 C 349.921 0 357.482 0 363.258 2.943 C 368.338 5.531 372.469 9.662 375.057 14.742 C 378 20.518 378 28.079 378 43.2 L 378 57.8 C 378 72.921 378 80.482 375.057 86.258 C 372.469 91.338 368.338 95.469 363.258 98.057 C 357.482 101 349.921 101 334.8 101 L 43.2 101 C 28.079 101 20.518 101 14.742 98.057 C 9.662 95.469 5.531 91.338 2.943 86.258 C 0 80.482 0 72.921 0 57.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={378} height={101} viewBox="0 0 378 101" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 378,
          height: 101,
          borderRadius: 296,
          color: "rgba(0,0,0,0.2)",
        }}>
          <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 334.8 0 C 349.921 0 357.482 0 363.258 2.943 C 368.338 5.531 372.469 9.662 375.057 14.742 C 378 20.518 378 28.079 378 43.2 L 378 57.8 C 378 72.921 378 80.482 375.057 86.258 C 372.469 91.338 368.338 95.469 363.258 98.057 C 357.482 101 349.921 101 334.8 101 L 43.2 101 C 28.079 101 20.518 101 14.742 98.057 C 9.662 95.469 5.531 91.338 2.943 86.258 C 0 80.482 0 72.921 0 57.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 62,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
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
            }}>􀆇</span>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 22,
              height: 36,
              fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "rgb(255,255,255)",
            }}>􀆈</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"dark"}
          />
          <FieldFind
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"dark"}
            state={"text entered"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(0,145,255)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Done"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ReplaceButton mode={"dark"} state={"disabled"} />}</div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"dark"}
          />
          <FieldReplace
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"dark"}
            state={"default"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 101,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 0,
        width: 378,
        height: 101,
        borderRadius: 27,
      }}>
        <div style={{
          position: "absolute",
          left: -26,
          top: -26,
          width: 430,
          height: 153,
          opacity: 0.67,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 430,
            height: 153,
            clipPath: "inset(-50px 0px 0px -50px)",
          }}>
            <svg width={378} height={101} viewBox="0 0 378 101" fill="none" style={{
              position: "absolute",
              left: 26,
              top: 28,
              width: 378,
              height: 101,
              borderRadius: 27,
              backdropFilter: "blur(40px)",
              color: "rgba(0,0,0,0.04)",
            }}>
              <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 334.8 0 C 349.921 0 357.482 0 363.258 2.943 C 368.338 5.531 372.469 9.662 375.057 14.742 C 378 20.518 378 28.079 378 43.2 L 378 57.8 C 378 72.921 378 80.482 375.057 86.258 C 372.469 91.338 368.338 95.469 363.258 98.057 C 357.482 101 349.921 101 334.8 101 L 43.2 101 C 28.079 101 20.518 101 14.742 98.057 C 9.662 95.469 5.531 91.338 2.943 86.258 C 0 80.482 0 72.921 0 57.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <svg width={378} height={101} viewBox="0 0 378 101" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 378,
          height: 101,
          borderRadius: 27,
        }}>
          <path d={"M 0 43.2 C 0 28.079 0 20.518 2.943 14.742 C 5.531 9.662 9.662 5.531 14.742 2.943 C 20.518 0 28.079 0 43.2 0 L 334.8 0 C 349.921 0 357.482 0 363.258 2.943 C 368.338 5.531 372.469 9.662 375.057 14.742 C 378 20.518 378 28.079 378 43.2 L 378 57.8 C 378 72.921 378 80.482 375.057 86.258 C 372.469 91.338 368.338 95.469 363.258 98.057 C 357.482 101 349.921 101 334.8 101 L 43.2 101 C 28.079 101 20.518 101 14.742 98.057 C 9.662 95.469 5.531 91.338 2.943 86.258 C 0 80.482 0 72.921 0 57.8 L 0 43.2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 62,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
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
            }}>􀆇</span>
          </div>
          <div style={{
            position: "relative",
            width: 22,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
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
            }}>􀆈</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"light"}
          />
          <FieldFind
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            mode={"light"}
            state={"text entered"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--colors-blue)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Done"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", height: 22, flexShrink: 0 }}>{props.icon3 ?? <ReplaceButton mode={"light"} state={"disabled"} />}</div>
        <div style={{
          position: "relative",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 7px 0px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <FieldBG
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 233,
              height: 36,
            }}
            mode={"light"}
          />
          <FieldReplace
            style={{
              position: "relative",
              height: 22,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
        </div>
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
export default AccessoryBarIPhoneFindAnd;
