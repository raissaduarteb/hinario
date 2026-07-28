// figma node: 51:7012 text_fields
export function TextFields(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--schemes-on-surface)",
      ...props.style,
    }}>
      <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 4,
        width: 20,
        height: 16,
      }}>
        <path d={"M 5 16 L 5 3 L 0 3 L 0 0 L 13 0 L 13 3 L 8 3 L 8 16 L 5 16 Z M 14 16 L 14 8 L 11 8 L 11 5 L 20 5 L 20 8 L 17 8 L 17 16 L 14 16 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default TextFields;
