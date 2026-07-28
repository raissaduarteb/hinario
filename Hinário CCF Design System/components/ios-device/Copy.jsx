// figma node: 583:1427 Copy
export function Copy(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={26.667} height={26.667} viewBox="0 0 26.667 26.667" fill="none" style={{
        position: "absolute",
        left: 2.667,
        top: 2.667,
        width: 26.667,
        height: 26.667,
      }}>
        <path d={"M 12 9.333 L 24 9.333 M 9.333 12 C 9.333 10.527 10.527 9.333 12 9.333 M 9.333 24 L 9.333 12 M 12 26.667 C 10.527 26.667 9.333 25.473 9.333 24 M 24 26.667 L 12 26.667 M 26.667 24 C 26.667 25.473 25.473 26.667 24 26.667 M 26.667 12 L 26.667 24 M 24 9.333 C 25.473 9.333 26.667 10.527 26.667 12 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 4 17.333 L 2.667 17.333 C 1.959 17.333 1.281 17.052 0.781 16.552 C 0.281 16.052 0 15.374 0 14.667 L 0 2.667 C 0 1.959 0.281 1.281 0.781 0.781 C 1.281 0.281 1.959 0 2.667 0 L 14.667 0 C 15.374 0 16.052 0.281 16.552 0.781 C 17.052 1.281 17.333 1.959 17.333 2.667 L 17.333 4 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Copy;
