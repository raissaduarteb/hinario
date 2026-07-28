import { KeysIPhone } from './KeysIPhone.jsx';
import { KeysIPhoneSpace } from './KeysIPhoneSpace.jsx';

// figma node: 34:1732 _Keyboard - iPhone Layouts (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function KeyboardIPhoneLayouts(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "letters - lowercase" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"["} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"]"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"{"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"}"} mode={"dark"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          punctuation={"#"}
          mode={"dark"}
          type={"punctuation"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"%"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"^"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          punctuation={"*"}
          letter={"*"}
          mode={"dark"}
          type={"punctuation"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"+"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"="}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
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
          mode={"dark"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"\\"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"|"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"~"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"<"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={">"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"€"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"£"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"¥"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"·"}
          mode={"dark"}
          type={"uppercase"}
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
            mode={"dark"}
            type={"123"}
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
            letter={"."}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"dark"}
            type={"uppercase"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"1"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"2"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"3"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"4"} mode={"dark"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"5"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"6"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"7"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"8"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"9"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"0"}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
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
          letter={"-"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"/"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          character={":"}
          mode={"dark"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={";"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"("}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={")"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"$"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"&"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"@"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"“"}
          mode={"dark"}
          type={"uppercase"}
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
            mode={"dark"}
            type={"#+"}
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
            letter={"."}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"dark"}
            type={"uppercase"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"W"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"E"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"R"} mode={"dark"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"T"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"Y"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"U"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"I"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"O"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"P"}
          mode={"dark"}
          type={"uppercase"}
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
          letter={"A"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"S"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"D"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"F"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"G"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"H"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"J"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"K"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"L"}
          mode={"dark"}
          type={"uppercase"}
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
            letter={"􀆞"}
            mode={"dark"}
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
            letter={"Z"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"X"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"C"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"V"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"B"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"N"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"M"}
            mode={"dark"}
            type={"uppercase"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
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
        gap: 6.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone mode={"dark"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"w"} mode={"dark"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"e"} mode={"dark"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"r"} mode={"dark"} type={"lowercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"t"}
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
          mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"["} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"]"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"{"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"}"} mode={"light"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          punctuation={"#"}
          mode={"light"}
          type={"punctuation"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"%"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"^"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"*"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"+"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"="}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
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
          mode={"light"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"\\"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"|"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"~"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"<"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={">"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"€"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"£"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"¥"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"·"}
          mode={"light"}
          type={"uppercase"}
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
            mode={"light"}
            type={"123"}
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
            letter={"."}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"light"}
            type={"uppercase"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"1"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"2"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"3"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"4"} mode={"light"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"5"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"6"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"7"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"8"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"9"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"0"}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
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
          letter={"-"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"/"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          character={":"}
          mode={"light"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={";"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"("}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={")"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"$"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"&"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"@"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"“"}
          mode={"light"}
          type={"uppercase"}
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
            mode={"light"}
            type={"#+"}
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
            letter={"."}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"light"}
            type={"uppercase"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"W"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"E"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"R"} mode={"light"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"T"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"Y"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"U"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"I"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"O"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"P"}
          mode={"light"}
          type={"uppercase"}
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
          letter={"A"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"S"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"D"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"F"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"G"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"H"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"J"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"K"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"L"}
          mode={"light"}
          type={"uppercase"}
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
            letter={"􀆞"}
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
            letter={"Z"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"X"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"C"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"V"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"B"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"N"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 42,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"M"}
            mode={"light"}
            type={"uppercase"}
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 6.500px 0px 6.500px",
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
        gap: 6.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"q"} mode={"light"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"w"} mode={"light"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"e"} mode={"light"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"r"} mode={"light"} type={"lowercase"} />}</div>
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
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.883, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Type=Characters
    "mode=dark|type=characters": __body0,
    // figma: Mode=Dark, Type=Numbers
    "mode=dark|type=numbers": __body1,
    // figma: Mode=Dark, Type=Letters - Uppercase
    "mode=dark|type=letters - uppercase": __body2,
    // figma: Mode=Dark, Type=Letters - Lowercase
    "mode=dark|type=letters - lowercase": __body3,
    // figma: Mode= Light, Type=Characters
    "mode=light|type=characters": __body4,
    // figma: Mode= Light, Type=Numbers
    "mode=light|type=numbers": __body5,
    // figma: Mode= Light, Type=Letters - Uppercase
    "mode=light|type=letters - uppercase": __body6,
    // figma: Mode= Light, Type=Letters - Lowercase
    "mode=light|type=letters - lowercase": __body7,
  };
  return (__impls[__vkey(props)] ?? __body7)();
}
export default KeyboardIPhoneLayouts;
