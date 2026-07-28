// figma node: 6:614 Battery / Dark (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status) + '|' + "level=" + __venc(p.level);

export function BatteryDark(_p = {}) {
  const props = { ..._p, status: _p.status ?? "normal", level: _p.level ?? "10" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 0,
        width: 8,
        height: 12,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0.438 7.077 L 3.582 7.077 L 1.938 11.32 C 1.701 11.932 2.345 12.251 2.763 11.76 L 7.845 5.706 C 7.948 5.585 8 5.463 8 5.332 C 8 5.099 7.814 4.927 7.562 4.927 L 4.418 4.927 L 6.057 0.679 C 6.294 0.072 5.649 -0.252 5.237 0.239 L 0.149 6.293 C 0.046 6.419 0 6.536 0 6.667 C 0 6.905 0.186 7.077 0.438 7.077 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={23} height={12} viewBox="0 0 23 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 23,
        height: 12,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 11.291 1 L 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 8.99 11 C 8.874 11.323 8.856 11.678 8.95 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 L 12.132 0 L 11.291 1 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 12.707 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 15.004 1 C 15.121 0.676 15.139 0.321 15.045 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 11.867 12 L 12.707 11 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
        position: "absolute",
        left: 24,
        top: 4,
        width: 1,
        height: 4,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 19,
        height: 8,
        overflow: "hidden",
      }}>
        <svg width={19.000} height={8} viewBox="0 0 19.000 8" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 19,
          height: 8,
          color: "rgb(52,199,89)",
        }}>
          <path d={"M 5.379 3.655 L 8.451 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 7.377 8 L 8.123 6.077 L 6.438 6.077 C 5.7 6.077 5 5.522 5 4.667 C 5 4.255 5.162 3.922 5.374 3.661 L 5.379 3.655 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 11.875 1.927 L 12.619 0 L 18 0 C 18.552 0 19 0.448 19 1 L 19 7 C 19 7.552 18.552 8 18 8 L 11.546 8 L 14.61 4.351 C 14.825 4.097 15 3.756 15 3.332 C 15 2.474 14.291 1.927 13.562 1.927 L 11.875 1.927 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 12,
      position: "relative",
      color: "rgba(235,235,245,0.3)",
      ...props.style,
    }}>
      <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
        position: "absolute",
        left: 24,
        top: 4,
        width: 1,
        height: 4,
      }}>
        <path d={"M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={23} height={12} viewBox="0 0 23 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 23,
        height: 12,
      }}>
        <path d={"M 3 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 Z M 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 3 1 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 19,
        height: 8,
        borderRadius: 1,
        backgroundColor: "rgb(255,255,255)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 0,
        width: 8,
        height: 12,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0.438 7.077 L 3.582 7.077 L 1.938 11.32 C 1.701 11.932 2.345 12.251 2.763 11.76 L 7.845 5.706 C 7.948 5.585 8 5.463 8 5.332 C 8 5.099 7.814 4.927 7.562 4.927 L 4.418 4.927 L 6.057 0.679 C 6.294 0.072 5.649 -0.252 5.237 0.239 L 0.149 6.293 C 0.046 6.419 0 6.536 0 6.667 C 0 6.905 0.186 7.077 0.438 7.077 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={23} height={12} viewBox="0 0 23 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 23,
        height: 12,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 11.291 1 L 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 8.99 11 C 8.874 11.323 8.856 11.678 8.95 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 L 12.132 0 L 11.291 1 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 12.707 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 15.004 1 C 15.121 0.676 15.139 0.321 15.045 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 11.867 12 L 12.707 11 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
        position: "absolute",
        left: 24,
        top: 4,
        width: 1,
        height: 4,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 8.451,
        height: 8,
        overflow: "hidden",
      }}>
        <svg width={8.451} height={8} viewBox="0 0 8.451 8" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 8.451,
          height: 8,
          color: "rgb(52,199,89)",
        }}>
          <path d={"M 8.451 0 L 5.379 3.655 L 5.374 3.661 C 5.162 3.922 5 4.255 5 4.667 C 5 5.522 5.7 6.077 6.438 6.077 L 8.123 6.077 L 7.377 8 L 1 8 C 0.448 8 0 7.552 0 7 L 0 1 C 0 0.448 0.448 0 1 0 L 8.451 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
        position: "absolute",
        left: 24,
        top: 4,
        width: 1,
        height: 4,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={23} height={12} viewBox="0 0 23 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 23,
        height: 12,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 3 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 Z M 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 3 1 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={9} height={8} viewBox="0 0 9 8" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 9,
        height: 8,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 9 0 L 0.9 0 C 0.403 0 0 0.448 0 1 L 0 7 C 0 7.552 0.403 8 0.9 8 L 9 8 L 9 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 0,
        width: 8,
        height: 12,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0.438 7.077 L 3.582 7.077 L 1.938 11.32 C 1.701 11.932 2.345 12.251 2.763 11.76 L 7.845 5.706 C 7.948 5.585 8 5.463 8 5.332 C 8 5.099 7.814 4.927 7.562 4.927 L 4.418 4.927 L 6.057 0.679 C 6.294 0.072 5.649 -0.252 5.237 0.239 L 0.149 6.293 C 0.046 6.419 0 6.536 0 6.667 C 0 6.905 0.186 7.077 0.438 7.077 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={23} height={12} viewBox="0 0 23 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 23,
        height: 12,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 11.291 1 L 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 8.99 11 C 8.874 11.323 8.856 11.678 8.95 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 L 12.132 0 L 11.291 1 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 12.707 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 15.004 1 C 15.121 0.676 15.139 0.321 15.045 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 11.867 12 L 12.707 11 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
        position: "absolute",
        left: 24,
        top: 4,
        width: 1,
        height: 4,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 3,
        height: 8,
        overflow: "hidden",
      }}>
        <svg width={3} height={8} viewBox="0 0 3 8" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 3,
          height: 8,
          color: "rgb(50,215,75)",
        }}>
          <path d={"M 3 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 3 8 L 3 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
        position: "absolute",
        left: 24,
        top: 4,
        width: 1,
        height: 4,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 0 0 C 0.552 0 1 0.448 1 1 L 1 3 C 1 3.552 0.552 4 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={3} height={8} viewBox="0 0 3 8" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 3,
        height: 8,
        color: "rgb(255,59,48)",
      }}>
        <path d={"M 3 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 3 8 L 3 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={23} height={12} viewBox="0 0 23 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 23,
        height: 12,
        color: "rgba(235,235,245,0.3)",
      }}>
        <path d={"M 3 0 L 20 0 C 21.657 0 23 1.343 23 3 L 23 9 C 23 10.657 21.657 12 20 12 L 3 12 C 1.343 12 0 10.657 0 9 L 0 3 C 0 1.343 1.343 0 3 0 Z M 3 1 C 1.895 1 1 1.895 1 3 L 1 9 C 1 10.105 1.895 11 3 11 L 20 11 C 21.105 11 22 10.105 22 9 L 22 3 C 22 1.895 21.105 1 20 1 L 3 1 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Status=Charging, Level=100
    "status=charging|level=100": __body0,
    // figma: Status=Normal, Level=100
    "status=normal|level=100": __body1,
    // figma: Status=Charging, Level=50
    "status=charging|level=50": __body2,
    // figma: Status=Normal, Level=50
    "status=normal|level=50": __body3,
    // figma: Status=Charging, Level=10
    "status=charging|level=10": __body4,
    // figma: Status=Normal, Level=10
    "status=normal|level=10": __body5,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default BatteryDark;
