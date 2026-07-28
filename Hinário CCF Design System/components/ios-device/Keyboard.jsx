import { ABCAndMike } from './ABCAndMike.jsx';
import { AccessoryBarIPhoneFind } from './AccessoryBarIPhoneFind.jsx';
import { AccessoryBarIPhoneFindAnd } from './AccessoryBarIPhoneFindAnd.jsx';
import { AccessoryBarIPhoneToolbar } from './AccessoryBarIPhoneToolbar.jsx';
import { Autocorrection } from './Autocorrection.jsx';
import { EmojiTabs } from './EmojiTabs.jsx';
import { KeysIPhone } from './KeysIPhone.jsx';
import { KeysIPhoneNumeric } from './KeysIPhoneNumeric.jsx';
import { KeysIPhoneSpace } from './KeysIPhoneSpace.jsx';
import { SearchEmoji } from './SearchEmoji.jsx';

// figma node: 34:2156 Keyboard (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Keyboard(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 307,
      borderRadius: "27px 27px 62px 62px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={317} viewBox="0 0 402 317" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 317,
        overflow: "hidden",
        borderRadius: 27,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <path d={"M 0 54 C 0 28.544 0 15.816 7.908 7.908 C 15.816 0 28.544 0 54 0 L 146 0 C 171.456 0 184.184 0 192.092 7.908 C 200 15.816 200 28.544 200 54 L 200 146 C 200 171.456 200 184.184 192.092 192.092 C 184.184 200 171.456 200 146 200 L 54 200 C 28.544 200 15.816 200 7.908 192.092 C 0 184.184 0 171.456 0 146 L 0 54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        height: 291,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "26px 6.750px 26px 6.750px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 47,
          display: "flex",
          flexDirection: "row",
          gap: 6.75,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>1</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}> </span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>2</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>ABC</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>3</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>DEF</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 47,
          display: "flex",
          flexDirection: "row",
          gap: 6.75,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>4</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>GHI</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>5</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>JKL</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>6</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>MNO</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 47,
          display: "flex",
          flexDirection: "row",
          gap: 6.75,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>7</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>PQRS</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>8</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>TUV</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            backgroundColor: "var(--miscellaneous-keyboards-keys)",
            display: "flex",
            flexDirection: "column",
            padding: "3px 0px 4px 0px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>9</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "15px",
              letterSpacing: "2px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>WXYZ</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 47,
          display: "flex",
          flexDirection: "row",
          gap: 6.75,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
          <div style={{
            position: "relative",
            borderRadius: 8.5,
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 125,
              height: 47,
              borderRadius: 8.5,
              backgroundColor: "var(--miscellaneous-keyboards-keys)",
            }} />
            <span style={{
              position: "absolute",
              left: 0,
              top: -9,
              width: 125,
              height: 65,
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 23,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(255,255,255)",
            }}>0</span>
          </div>
          <KeysIPhoneNumeric
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            line1={"􀆛"}
            mode={"light"}
            type={"math"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      borderRadius: "27px 27px 62px 62px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={376} viewBox="0 0 402 376" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 376,
        overflow: "hidden",
        borderRadius: 27,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <path d={"M 0 54 C 0 28.544 0 15.816 7.908 7.908 C 15.816 0 28.544 0 54 0 L 146 0 C 171.456 0 184.184 0 192.092 7.908 C 200 15.816 200 28.544 200 54 L 200 146 C 200 171.456 200 184.184 192.092 192.092 C 184.184 200 171.456 200 146 200 L 54 200 C 28.544 200 15.816 200 7.908 192.092 C 0 184.184 0 171.456 0 146 L 0 54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <SearchEmoji
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 14,
        padding: "0px 10px 0px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "😂"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "👊"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text3 ?? "😭"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text4 ?? "👀"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😩</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😊</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👻</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>💨</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😔</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🦆</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-f464af0f69b74801" style={{
              position: "relative",
              width: 40,
              height: 43,
              flexShrink: 0,
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🐵</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😏</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👊</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👩‍💻</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👍</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>💕</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🙆‍♀️</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😭</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🙃</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😂</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-4aaff5aa591ed603" style={{
              position: "relative",
              width: 35,
              height: 40,
              flexShrink: 0,
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👀</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-8a336fd001b7210f" style={{
              position: "relative",
              width: 40,
              height: 43,
              flexShrink: 0,
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>👁</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-b7accd5ef120b6c9" style={{
              position: "relative",
              width: 39.224,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🏆</span>
          <div style={{
            position: "relative",
            height: 50,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-4067c3c028dc1c3f" style={{
              position: "relative",
              height: 39,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😀</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😃</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😄</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😁</span>
        </div>
        <div style={{
          position: "relative",
          width: 40,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🥹</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😅</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>😂</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "38.500px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>🤣</span>
        </div>
      </div>
      <EmojiTabs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <ABCAndMike
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(34,43,89,0.63)",
      ...props.style,
    }}>
      <AccessoryBarIPhoneFindAnd
        style={{
          position: "relative",
          height: 101,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "11px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={402} height={322} viewBox="0 0 402 322" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 322,
          overflow: "hidden",
          borderRadius: 27,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <path d={"M 0 54 C 0 28.544 0 15.816 7.908 7.908 C 15.816 0 28.544 0 54 0 L 146 0 C 171.456 0 184.184 0 192.092 7.908 C 200 15.816 200 28.544 200 54 L 200 146 C 200 171.456 200 184.184 192.092 192.092 C 184.184 200 171.456 200 146 200 L 54 200 C 28.544 200 15.816 200 7.908 192.092 C 0 184.184 0 171.456 0 146 L 0 54 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "8px 0px 13px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Autocorrection
            style={{
              position: "relative",
              height: 25,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 13,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6.5,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 45,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
                letter={"􀆝"}
                mode={"light"}
                type={"uppercase"}
              />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 6.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 45,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
                letter={"􁂈"}
                mode={"light"}
                type={"uppercase"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92.25,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"default"}
            />
            <div style={{
              position: "relative",
              width: 92.25,
              height: 42,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                borderRadius: 8.5,
                backgroundColor: "var(--colors-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 2,
                width: 92,
                height: 42,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          padding: "12px 39px 12px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={26.920} height={26.920} viewBox="0 0 26.920 26.920" fill="none" style={{
            position: "relative",
            width: 26.92,
            height: 26.92,
            flexShrink: 0,
          }}>
            <path d={"M 13.45 18.39 C 11.34 18.39 9.1 18.09 7.06 17.57 C 6.68 16.99 6.4 16.37 6.27 15.74 C 8.42 16.35 10.92 16.77 13.46 16.77 C 16 16.77 18.5 16.35 20.66 15.74 C 20.51 16.37 20.24 16.99 19.87 17.57 C 17.83 18.08 15.59 18.39 13.46 18.39 L 13.45 18.39 Z M 13.45 22.46 C 17.97 22.46 21.6 19.14 22.1 15.2 C 22.21 14.41 21.69 14.05 20.99 14.25 C 18.45 15 16.07 15.42 13.45 15.42 C 10.83 15.42 8.47 15 5.92 14.25 C 5.22 14.05 4.71 14.41 4.81 15.2 C 5.3 19.14 8.92 22.46 13.45 22.46 Z M 17.35 12.28 C 18.18 12.28 18.92 11.53 18.92 10.47 C 18.92 9.41 18.18 8.65 17.35 8.65 C 16.52 8.65 15.79 9.41 15.79 10.47 C 15.79 11.53 16.52 12.28 17.35 12.28 Z M 9.53 12.28 C 10.37 12.28 11.11 11.53 11.11 10.47 C 11.11 9.41 10.37 8.65 9.53 8.65 C 8.69 8.65 7.99 9.41 7.99 10.47 C 7.99 11.53 8.7 12.28 9.53 12.28 Z M 13.46 24.63 C 7.26 24.63 2.29 19.66 2.29 13.45 C 2.29 7.24 7.25 2.28 13.45 2.28 C 19.65 2.28 24.64 7.25 24.64 13.46 C 24.64 19.67 19.67 24.64 13.46 24.64 L 13.46 24.63 Z M 13.46 26.91 C 20.82 26.91 26.92 20.81 26.92 13.45 C 26.92 6.09 20.82 0 13.45 0 C 6.08 0 0 6.1 0 13.46 C 0 20.82 6.1 26.92 13.46 26.92 L 13.46 26.91 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={18.866} height={28.213} viewBox="0 0 18.866 28.213" fill="none" style={{
            position: "relative",
            width: 18.866,
            height: 28.213,
            flexShrink: 0,
          }}>
            <path d={"M 0 13.935 L 0 11.259 C 0 10.986 0.097 10.753 0.29 10.56 C 0.483 10.367 0.716 10.27 0.989 10.27 C 1.27 10.27 1.507 10.367 1.701 10.56 C 1.894 10.753 1.991 10.986 1.991 11.259 L 1.991 13.856 C 1.991 15.35 2.298 16.66 2.914 17.785 C 3.529 18.91 4.395 19.784 5.511 20.408 C 6.627 21.023 7.937 21.331 9.439 21.331 C 10.942 21.331 12.248 21.023 13.355 20.408 C 14.471 19.784 15.337 18.91 15.952 17.785 C 16.567 16.66 16.875 15.35 16.875 13.856 L 16.875 11.259 C 16.875 10.986 16.972 10.753 17.165 10.56 C 17.358 10.367 17.596 10.27 17.877 10.27 C 18.149 10.27 18.382 10.367 18.576 10.56 C 18.769 10.753 18.866 10.986 18.866 11.259 L 18.866 13.935 C 18.866 15.658 18.51 17.187 17.798 18.523 C 17.095 19.859 16.11 20.931 14.845 21.74 C 13.579 22.54 12.107 23.01 10.428 23.15 L 10.428 26.222 L 15.319 26.222 C 15.601 26.222 15.838 26.319 16.031 26.512 C 16.225 26.706 16.321 26.943 16.321 27.224 C 16.321 27.497 16.225 27.729 16.031 27.923 C 15.838 28.116 15.601 28.213 15.319 28.213 L 3.546 28.213 C 3.265 28.213 3.028 28.116 2.834 27.923 C 2.641 27.729 2.544 27.497 2.544 27.224 C 2.544 26.943 2.641 26.706 2.834 26.512 C 3.028 26.319 3.265 26.222 3.546 26.222 L 8.438 26.222 L 8.438 23.15 C 6.759 23.01 5.287 22.54 4.021 21.74 C 2.755 20.931 1.767 19.859 1.055 18.523 C 0.352 17.187 0 15.658 0 13.935 Z M 4.641 13.46 L 4.641 5.168 C 4.641 4.157 4.843 3.265 5.247 2.492 C 5.651 1.709 6.214 1.099 6.935 0.659 C 7.655 0.22 8.49 0 9.439 0 C 10.38 0 11.21 0.22 11.931 0.659 C 12.652 1.099 13.214 1.709 13.619 2.492 C 14.023 3.265 14.225 4.157 14.225 5.168 L 14.225 13.46 C 14.225 14.471 14.023 15.368 13.619 16.15 C 13.214 16.923 12.652 17.53 11.931 17.969 C 11.21 18.409 10.38 18.628 9.439 18.628 C 8.49 18.628 7.655 18.409 6.935 17.969 C 6.214 17.53 5.651 16.923 5.247 16.15 C 4.843 15.368 4.641 14.471 4.641 13.46 Z M 6.631 13.46 C 6.631 14.436 6.886 15.214 7.396 15.794 C 7.915 16.374 8.596 16.664 9.439 16.664 C 10.283 16.664 10.96 16.374 11.47 15.794 C 11.979 15.214 12.234 14.436 12.234 13.46 L 12.234 5.168 C 12.234 4.192 11.979 3.415 11.47 2.834 C 10.96 2.254 10.283 1.964 9.439 1.964 C 8.596 1.964 7.915 2.254 7.396 2.834 C 6.886 3.415 6.631 4.192 6.631 5.168 L 6.631 13.46 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(34,43,89,0.63)",
      ...props.style,
    }}>
      <AccessoryBarIPhoneFind
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "11px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={402} height={322} viewBox="0 0 402 322" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 322,
          overflow: "hidden",
          borderRadius: 27,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <path d={"M 0 54 C 0 28.544 0 15.816 7.908 7.908 C 15.816 0 28.544 0 54 0 L 146 0 C 171.456 0 184.184 0 192.092 7.908 C 200 15.816 200 28.544 200 54 L 200 146 C 200 171.456 200 184.184 192.092 192.092 C 184.184 200 171.456 200 146 200 L 54 200 C 28.544 200 15.816 200 7.908 192.092 C 0 184.184 0 171.456 0 146 L 0 54 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "8px 0px 13px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Autocorrection
            style={{
              position: "relative",
              height: 25,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 13,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6.5,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 45,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
                letter={"􀆝"}
                mode={"light"}
                type={"uppercase"}
              />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 6.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 45,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
                letter={"􁂈"}
                mode={"light"}
                type={"uppercase"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92.25,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"default"}
            />
            <div style={{
              position: "relative",
              width: 92.25,
              height: 42,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                borderRadius: 8.5,
                backgroundColor: "var(--colors-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 2,
                width: 92,
                height: 42,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          padding: "12px 39px 12px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={26.920} height={26.920} viewBox="0 0 26.920 26.920" fill="none" style={{
            position: "relative",
            width: 26.92,
            height: 26.92,
            flexShrink: 0,
          }}>
            <path d={"M 13.45 18.39 C 11.34 18.39 9.1 18.09 7.06 17.57 C 6.68 16.99 6.4 16.37 6.27 15.74 C 8.42 16.35 10.92 16.77 13.46 16.77 C 16 16.77 18.5 16.35 20.66 15.74 C 20.51 16.37 20.24 16.99 19.87 17.57 C 17.83 18.08 15.59 18.39 13.46 18.39 L 13.45 18.39 Z M 13.45 22.46 C 17.97 22.46 21.6 19.14 22.1 15.2 C 22.21 14.41 21.69 14.05 20.99 14.25 C 18.45 15 16.07 15.42 13.45 15.42 C 10.83 15.42 8.47 15 5.92 14.25 C 5.22 14.05 4.71 14.41 4.81 15.2 C 5.3 19.14 8.92 22.46 13.45 22.46 Z M 17.35 12.28 C 18.18 12.28 18.92 11.53 18.92 10.47 C 18.92 9.41 18.18 8.65 17.35 8.65 C 16.52 8.65 15.79 9.41 15.79 10.47 C 15.79 11.53 16.52 12.28 17.35 12.28 Z M 9.53 12.28 C 10.37 12.28 11.11 11.53 11.11 10.47 C 11.11 9.41 10.37 8.65 9.53 8.65 C 8.69 8.65 7.99 9.41 7.99 10.47 C 7.99 11.53 8.7 12.28 9.53 12.28 Z M 13.46 24.63 C 7.26 24.63 2.29 19.66 2.29 13.45 C 2.29 7.24 7.25 2.28 13.45 2.28 C 19.65 2.28 24.64 7.25 24.64 13.46 C 24.64 19.67 19.67 24.64 13.46 24.64 L 13.46 24.63 Z M 13.46 26.91 C 20.82 26.91 26.92 20.81 26.92 13.45 C 26.92 6.09 20.82 0 13.45 0 C 6.08 0 0 6.1 0 13.46 C 0 20.82 6.1 26.92 13.46 26.92 L 13.46 26.91 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={18.866} height={28.213} viewBox="0 0 18.866 28.213" fill="none" style={{
            position: "relative",
            width: 18.866,
            height: 28.213,
            flexShrink: 0,
          }}>
            <path d={"M 0 13.935 L 0 11.259 C 0 10.986 0.097 10.753 0.29 10.56 C 0.483 10.367 0.716 10.27 0.989 10.27 C 1.27 10.27 1.507 10.367 1.701 10.56 C 1.894 10.753 1.991 10.986 1.991 11.259 L 1.991 13.856 C 1.991 15.35 2.298 16.66 2.914 17.785 C 3.529 18.91 4.395 19.784 5.511 20.408 C 6.627 21.023 7.937 21.331 9.439 21.331 C 10.942 21.331 12.248 21.023 13.355 20.408 C 14.471 19.784 15.337 18.91 15.952 17.785 C 16.567 16.66 16.875 15.35 16.875 13.856 L 16.875 11.259 C 16.875 10.986 16.972 10.753 17.165 10.56 C 17.358 10.367 17.596 10.27 17.877 10.27 C 18.149 10.27 18.382 10.367 18.576 10.56 C 18.769 10.753 18.866 10.986 18.866 11.259 L 18.866 13.935 C 18.866 15.658 18.51 17.187 17.798 18.523 C 17.095 19.859 16.11 20.931 14.845 21.74 C 13.579 22.54 12.107 23.01 10.428 23.15 L 10.428 26.222 L 15.319 26.222 C 15.601 26.222 15.838 26.319 16.031 26.512 C 16.225 26.706 16.321 26.943 16.321 27.224 C 16.321 27.497 16.225 27.729 16.031 27.923 C 15.838 28.116 15.601 28.213 15.319 28.213 L 3.546 28.213 C 3.265 28.213 3.028 28.116 2.834 27.923 C 2.641 27.729 2.544 27.497 2.544 27.224 C 2.544 26.943 2.641 26.706 2.834 26.512 C 3.028 26.319 3.265 26.222 3.546 26.222 L 8.438 26.222 L 8.438 23.15 C 6.759 23.01 5.287 22.54 4.021 21.74 C 2.755 20.931 1.767 19.859 1.055 18.523 C 0.352 17.187 0 15.658 0 13.935 Z M 4.641 13.46 L 4.641 5.168 C 4.641 4.157 4.843 3.265 5.247 2.492 C 5.651 1.709 6.214 1.099 6.935 0.659 C 7.655 0.22 8.49 0 9.439 0 C 10.38 0 11.21 0.22 11.931 0.659 C 12.652 1.099 13.214 1.709 13.619 2.492 C 14.023 3.265 14.225 4.157 14.225 5.168 L 14.225 13.46 C 14.225 14.471 14.023 15.368 13.619 16.15 C 13.214 16.923 12.652 17.53 11.931 17.969 C 11.21 18.409 10.38 18.628 9.439 18.628 C 8.49 18.628 7.655 18.409 6.935 17.969 C 6.214 17.53 5.651 16.923 5.247 16.15 C 4.843 15.368 4.641 14.471 4.641 13.46 Z M 6.631 13.46 C 6.631 14.436 6.886 15.214 7.396 15.794 C 7.915 16.374 8.596 16.664 9.439 16.664 C 10.283 16.664 10.96 16.374 11.47 15.794 C 11.979 15.214 12.234 14.436 12.234 13.46 L 12.234 5.168 C 12.234 4.192 11.979 3.415 11.47 2.834 C 10.96 2.254 10.283 1.964 9.439 1.964 C 8.596 1.964 7.915 2.254 7.396 2.834 C 6.886 3.415 6.631 4.192 6.631 5.168 L 6.631 13.46 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(34,43,89,0.63)",
      ...props.style,
    }}>
      <AccessoryBarIPhoneToolbar
        style={{ position: "relative", height: 48, flexShrink: 0 }}
        mode={"light"}
        type={"6 symbols"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "11px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={402} height={322} viewBox="0 0 402 322" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 322,
          overflow: "hidden",
          borderRadius: 27,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <path d={"M 0 54 C 0 28.544 0 15.816 7.908 7.908 C 15.816 0 28.544 0 54 0 L 146 0 C 171.456 0 184.184 0 192.092 7.908 C 200 15.816 200 28.544 200 54 L 200 146 C 200 171.456 200 184.184 192.092 192.092 C 184.184 200 171.456 200 146 200 L 54 200 C 28.544 200 15.816 200 7.908 192.092 C 0 184.184 0 171.456 0 146 L 0 54 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "8px 0px 13px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Autocorrection
            style={{
              position: "relative",
              height: 25,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 13,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"q"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"w"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"e"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"r"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"t"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"y"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"u"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"i"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"o"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"p"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6.5,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"a"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"s"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"d"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"f"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"g"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"h"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"j"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"k"}
              mode={"light"}
              type={"lowercase"}
            />
            <KeysIPhone
              style={{
                position: "relative",
                height: 42,
                flexGrow: 1,
                width: "auto",
              }}
              letter={"l"}
              mode={"light"}
              type={"lowercase"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14.25,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 45,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
                letter={"􀆝"}
                mode={"light"}
                type={"uppercase"}
              />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 6.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"z"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"x"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"c"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"v"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"b"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"n"}
                mode={"light"}
                type={"lowercase"}
              />
              <KeysIPhone
                style={{
                  position: "relative",
                  height: 42,
                  flexGrow: 1,
                  width: "auto",
                }}
                letter={"m"}
                mode={"light"}
                type={"lowercase"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 45,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
                letter={"􁂈"}
                mode={"light"}
                type={"uppercase"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 92.25,
                height: 42,
                flexShrink: 0,
              }}>
              <KeysIPhone
                style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
                mode={"light"}
                type={"abc"}
              />
            </div>
            <KeysIPhoneSpace
              style={{ position: "relative", flexGrow: 1, width: "auto" }}
              mode={"light"}
              config={"default"}
            />
            <div style={{
              position: "relative",
              width: 92.25,
              height: 42,
              borderRadius: 8.5,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 92,
                height: 42,
                borderRadius: 8.5,
                backgroundColor: "var(--colors-blue)",
              }} />
              <span style={{
                position: "absolute",
                left: 0,
                top: 2,
                width: 92,
                height: 42,
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 19,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "28px",
                color: "rgb(255,255,255)",
              }}>􀅇</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          padding: "12px 39px 12px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={26.920} height={26.920} viewBox="0 0 26.920 26.920" fill="none" style={{
            position: "relative",
            width: 26.92,
            height: 26.92,
            flexShrink: 0,
          }}>
            <path d={"M 13.45 18.39 C 11.34 18.39 9.1 18.09 7.06 17.57 C 6.68 16.99 6.4 16.37 6.27 15.74 C 8.42 16.35 10.92 16.77 13.46 16.77 C 16 16.77 18.5 16.35 20.66 15.74 C 20.51 16.37 20.24 16.99 19.87 17.57 C 17.83 18.08 15.59 18.39 13.46 18.39 L 13.45 18.39 Z M 13.45 22.46 C 17.97 22.46 21.6 19.14 22.1 15.2 C 22.21 14.41 21.69 14.05 20.99 14.25 C 18.45 15 16.07 15.42 13.45 15.42 C 10.83 15.42 8.47 15 5.92 14.25 C 5.22 14.05 4.71 14.41 4.81 15.2 C 5.3 19.14 8.92 22.46 13.45 22.46 Z M 17.35 12.28 C 18.18 12.28 18.92 11.53 18.92 10.47 C 18.92 9.41 18.18 8.65 17.35 8.65 C 16.52 8.65 15.79 9.41 15.79 10.47 C 15.79 11.53 16.52 12.28 17.35 12.28 Z M 9.53 12.28 C 10.37 12.28 11.11 11.53 11.11 10.47 C 11.11 9.41 10.37 8.65 9.53 8.65 C 8.69 8.65 7.99 9.41 7.99 10.47 C 7.99 11.53 8.7 12.28 9.53 12.28 Z M 13.46 24.63 C 7.26 24.63 2.29 19.66 2.29 13.45 C 2.29 7.24 7.25 2.28 13.45 2.28 C 19.65 2.28 24.64 7.25 24.64 13.46 C 24.64 19.67 19.67 24.64 13.46 24.64 L 13.46 24.63 Z M 13.46 26.91 C 20.82 26.91 26.92 20.81 26.92 13.45 C 26.92 6.09 20.82 0 13.45 0 C 6.08 0 0 6.1 0 13.46 C 0 20.82 6.1 26.92 13.46 26.92 L 13.46 26.91 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={18.866} height={28.213} viewBox="0 0 18.866 28.213" fill="none" style={{
            position: "relative",
            width: 18.866,
            height: 28.213,
            flexShrink: 0,
          }}>
            <path d={"M 0 13.935 L 0 11.259 C 0 10.986 0.097 10.753 0.29 10.56 C 0.483 10.367 0.716 10.27 0.989 10.27 C 1.27 10.27 1.507 10.367 1.701 10.56 C 1.894 10.753 1.991 10.986 1.991 11.259 L 1.991 13.856 C 1.991 15.35 2.298 16.66 2.914 17.785 C 3.529 18.91 4.395 19.784 5.511 20.408 C 6.627 21.023 7.937 21.331 9.439 21.331 C 10.942 21.331 12.248 21.023 13.355 20.408 C 14.471 19.784 15.337 18.91 15.952 17.785 C 16.567 16.66 16.875 15.35 16.875 13.856 L 16.875 11.259 C 16.875 10.986 16.972 10.753 17.165 10.56 C 17.358 10.367 17.596 10.27 17.877 10.27 C 18.149 10.27 18.382 10.367 18.576 10.56 C 18.769 10.753 18.866 10.986 18.866 11.259 L 18.866 13.935 C 18.866 15.658 18.51 17.187 17.798 18.523 C 17.095 19.859 16.11 20.931 14.845 21.74 C 13.579 22.54 12.107 23.01 10.428 23.15 L 10.428 26.222 L 15.319 26.222 C 15.601 26.222 15.838 26.319 16.031 26.512 C 16.225 26.706 16.321 26.943 16.321 27.224 C 16.321 27.497 16.225 27.729 16.031 27.923 C 15.838 28.116 15.601 28.213 15.319 28.213 L 3.546 28.213 C 3.265 28.213 3.028 28.116 2.834 27.923 C 2.641 27.729 2.544 27.497 2.544 27.224 C 2.544 26.943 2.641 26.706 2.834 26.512 C 3.028 26.319 3.265 26.222 3.546 26.222 L 8.438 26.222 L 8.438 23.15 C 6.759 23.01 5.287 22.54 4.021 21.74 C 2.755 20.931 1.767 19.859 1.055 18.523 C 0.352 17.187 0 15.658 0 13.935 Z M 4.641 13.46 L 4.641 5.168 C 4.641 4.157 4.843 3.265 5.247 2.492 C 5.651 1.709 6.214 1.099 6.935 0.659 C 7.655 0.22 8.49 0 9.439 0 C 10.38 0 11.21 0.22 11.931 0.659 C 12.652 1.099 13.214 1.709 13.619 2.492 C 14.023 3.265 14.225 4.157 14.225 5.168 L 14.225 13.46 C 14.225 14.471 14.023 15.368 13.619 16.15 C 13.214 16.923 12.652 17.53 11.931 17.969 C 11.21 18.409 10.38 18.628 9.439 18.628 C 8.49 18.628 7.655 18.409 6.935 17.969 C 6.214 17.53 5.651 16.923 5.247 16.15 C 4.843 15.368 4.641 14.471 4.641 13.46 Z M 6.631 13.46 C 6.631 14.436 6.886 15.214 7.396 15.794 C 7.915 16.374 8.596 16.664 9.439 16.664 C 10.283 16.664 10.96 16.374 11.47 15.794 C 11.979 15.214 12.234 14.436 12.234 13.46 L 12.234 5.168 C 12.234 4.192 11.979 3.415 11.47 2.834 C 10.96 2.254 10.283 1.964 9.439 1.964 C 8.596 1.964 7.915 2.254 7.396 2.834 C 6.886 3.415 6.631 4.192 6.631 5.168 L 6.631 13.46 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Numbers and Punctuation
    "type=numbers and punctuation": __body0,
    // figma: Type=Emoji
    "type=emoji": __body1,
    // figma: Type=Find and Replace
    "type=find and replace": __body2,
    // figma: Type=Find
    "type=find": __body3,
    // figma: Type=Default
    "type=default": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Keyboard;
