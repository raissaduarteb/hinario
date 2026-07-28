// figma node: 583:1436 music_note
export function MusicNote(_p = {}) {
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
      <svg width={12} height={18} viewBox="0 0 12 18" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 3,
        width: 12,
        height: 18,
      }}>
        <path d={"M 4 18 C 2.9 18 1.958 17.608 1.175 16.825 C 0.392 16.042 0 15.1 0 14 C 0 12.9 0.392 11.958 1.175 11.175 C 1.958 10.392 2.9 10 4 10 C 4.383 10 4.733 10.05 5.05 10.15 C 5.383 10.233 5.7 10.367 6 10.55 L 6 0 L 12 0 L 12 4 L 8 4 L 8 14 C 8 15.1 7.608 16.042 6.825 16.825 C 6.042 17.608 5.1 18 4 18 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default MusicNote;
