const NS = window.HinRioCCFDesignSystem_9cc2ad;
const { StatusBar, KeypadTile, SongListItem, SongBadge, LyricsView, PrimaryButton, SegmentedControl, Icon } = NS;
const DATA = window.HINARIO_DATA;

/* Small local set so the reader arrows can page through hymns. */
const READER = [
  { number: "001", ref: "L1", title: "Esta Paz", verses: DATA.hymns["001"].verses },
  { number: "006", ref: "H6", title: "Sua Fidelidade", verses: [
    { text: "Grandes são as tuas misericórdias,\nÓ meu Deus, Senhor, ó Pai celestial;" },
    { text: "Tua fidelidade é grande, imutável,\nComo o teu amor por mim.", emphasis: true },
    { text: "Nada faltará ao que em ti espera,\nCada novo dia vejo o teu cuidar;" },
  ] },
  { number: "018", ref: "H18", title: "Sua Justiça", verses: [
    { text: "Firmado na tua justiça,\nAo trono me chego, Senhor;" },
    { text: "Não temo, pois tu me sustentas,\nSó olho o teu grande amor.", emphasis: true },
  ] },
];

/* ── 1. Bottom nav — floating rounded bar with active pill ── */
function FloatingNav({ active, onChange }) {
  const items = [["home", "Home", "NavHome"], ["selecao", "Seleção", "NavMusic"], ["ajustes", "Ajustes", "NavGear"]];
  return (
    <nav style={{ position: "absolute", left: 16, right: 16, bottom: 20, height: 64, zIndex: 20,
      display: "flex", alignItems: "center", justifyContent: "space-around",
      background: "var(--surface-card)", borderRadius: 22, padding: "0 10px",
      boxShadow: "0 8px 28px rgba(0,0,0,.16), 0 1px 0 rgba(0,0,0,.02)" }}>
      {items.map(([key, label, icon]) => {
        const on = key === active;
        return (
          <button key={key} onClick={() => onChange(key)} style={{
            display: "flex", alignItems: "center", gap: 8, border: "none", cursor: "pointer",
            padding: on ? "9px 16px" : "9px 12px", borderRadius: 16,
            background: on ? "var(--peach)" : "transparent", transition: "background .18s ease" }}>
            <Icon name={icon} size={22} style={{ color: on ? "var(--brand)" : "var(--c5)" }} />
            {on && <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, color: "var(--brand)" }}>{label}</span>}
          </button>
        );
      })}
    </nav>
  );
}

/* ── Bottom nav alternative — vertical side rail ── */
function SideRail({ active, onChange }) {
  const items = [["home", "Home", "NavHome"], ["selecao", "Seleção", "NavMusic"], ["ajustes", "Ajustes", "NavGear"]];
  return (
    <nav style={{ position: "absolute", left: 12, top: 84, bottom: 20, width: 64, zIndex: 20,
      display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "14px 0",
      background: "var(--surface-card)", borderRadius: 24, boxShadow: "0 8px 28px rgba(0,0,0,.14)" }}>
      {items.map(([key, label, icon]) => {
        const on = key === active;
        return (
          <button key={key} onClick={() => onChange(key)} title={label} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: 52, padding: "10px 0",
            border: "none", cursor: "pointer", borderRadius: 16,
            background: on ? "var(--peach)" : "transparent", transition: "background .18s ease" }}>
            <Icon name={icon} size={22} style={{ color: on ? "var(--brand)" : "var(--c5)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 10, color: on ? "var(--brand)" : "var(--c5)" }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

/* ── 2. Expanding search — icon that opens the field ── */
function BrandBar({ searchOpen, setSearchOpen, query, setQuery }) {
  const ref = React.useRef(null);
  React.useEffect(() => { if (searchOpen && ref.current) ref.current.focus(); }, [searchOpen]);
  return (
    <div style={{ position: "relative", height: 48, display: "flex", alignItems: "center", justifyContent: "center", margin: "4px 0 6px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 2, opacity: searchOpen ? 0 : 1, transition: "opacity .15s ease" }}>
        <img src="../../assets/brand/mark-orange.png" alt="" style={{ height: 34, width: 22, objectFit: "contain" }} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-primary)" }}>Hinário</span>
      </div>
      <button onClick={() => setSearchOpen(true)} aria-label="Pesquisar" style={{
        position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
        width: 44, height: 44, borderRadius: "50%", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--surface-card)", boxShadow: "var(--shadow-search)",
        opacity: searchOpen ? 0 : 1, transition: "opacity .15s ease", pointerEvents: searchOpen ? "none" : "auto" }}>
        <Icon name="SearchSize20" size={18} style={{ color: "var(--text-secondary)" }} />
      </button>
      {/* expanded field */}
      <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)",
        display: "flex", alignItems: "center", gap: 10, height: 46, padding: "0 8px 0 16px",
        borderRadius: 23, background: "var(--surface-card)", boxShadow: "var(--shadow-search)",
        transformOrigin: "right center",
        transform: searchOpen ? "translateY(-50%) scaleX(1)" : "translateY(-50%) scaleX(0)",
        opacity: searchOpen ? 1 : 0, transition: "transform .28s cubic-bezier(.2,.8,.2,1), opacity .18s ease" }}>
        <Icon name="SearchSize20" size={18} style={{ color: "var(--text-placeholder)", flexShrink: 0 }} />
        <input ref={ref} value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquise por número ou letras…" style={{ flex: 1, minWidth: 0, border: "none", outline: "none",
          background: "transparent", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-body)" }} />
        <button onClick={() => { setQuery(""); setSearchOpen(false); }} aria-label="Fechar" style={{
          width: 36, height: 36, borderRadius: "50%", border: "none", cursor: "pointer", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-sunken)" }}>
          <Icon name="Close" size={16} style={{ color: "var(--text-secondary)" }} />
        </button>
      </div>
    </div>
  );
}

/* ── Home ── */
function HomeScreen({ nav, openHymn }) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [book, setBook] = React.useState("Hinário");
  const searching = searchOpen && query.trim().length > 0;
  const rows = ["C", "H", "S", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div style={{ ...nav.pad, paddingTop: 52 }}>
      <BrandBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} query={query} setQuery={setQuery} />
      {searching ? (
        <div style={{ marginTop: 8 }}>
          {DATA.results.map((r, i) => (
            <SongListItem key={i} {...r} query={query} divider={i < DATA.results.length - 1} onClick={() => openHymn(0)} />
          ))}
        </div>
      ) : (
        <>
          <div style={{ maxWidth: 240, margin: "10px auto 22px" }}>
            <SegmentedControl value={book} onChange={setBook} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 68px)", gap: 20, justifyContent: "center" }}>
            {rows.map((k) => <KeypadTile key={k}>{k}</KeypadTile>)}
            <div style={{ gridColumn: "2", display: "flex", justifyContent: "center" }}><KeypadTile>0</KeypadTile></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: "24px 0 12px" }}>
            <PrimaryButton onClick={() => openHymn(0)}>Buscar</PrimaryButton>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Selections ── */
function SelectionsScreen({ nav, openHymn }) {
  return (
    <div style={{ ...nav.pad, paddingTop: 52 }}>
      <h1 style={{ textAlign: "center", margin: "8px 0 18px", fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 20, textTransform: "uppercase", color: "var(--text-primary)" }}>Seleções de Hinos</h1>
      {DATA.selections.slice(0, 3).map((s, i) => (
        <div key={i} style={{ background: "var(--surface-card)", borderRadius: 16, padding: "14px 16px", marginBottom: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,.08)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "var(--text-body)", marginBottom: s.hymns.length ? 8 : 0 }}>{s.title}</div>
          {s.hymns.map((hy, j) => <SongListItem key={j} {...hy} divider={j < s.hymns.length - 1} onClick={() => openHymn(0)} />)}
        </div>
      ))}
    </div>
  );
}

/* ── 3. Reader — share + arrow-only nav ── */
function ReaderScreen({ nav, index, setIndex, onBack }) {
  const [shared, setShared] = React.useState(false);
  const [dir, setDir] = React.useState(0);
  const h = READER[index];
  const go = (d) => { const n = index + d; if (n < 0 || n >= READER.length) return; setDir(d); setIndex(n); };
  return (
    <div style={{ ...nav.pad, paddingTop: 52, display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
      {/* header: back · badge+title · share */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <button onClick={onBack} aria-label="Voltar" style={{ width: 40, height: 40, borderRadius: "50%", border: "none",
          background: "var(--surface-card)", boxShadow: "0 1px 3px rgba(0,0,0,.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name="ChevronLeftSize24" size={20} style={{ color: "var(--text-primary)" }} />
        </button>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <SongBadge tone="solid">{h.number}</SongBadge>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, textTransform: "uppercase",
            color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.title}</span>
        </div>
        <button onClick={() => { setShared(true); setTimeout(() => setShared(false), 1600); }} aria-label="Compartilhar hino" style={{
          display: "flex", alignItems: "center", gap: 7, height: 40, padding: "0 14px", borderRadius: 20, border: "none", cursor: "pointer",
          background: "var(--brand)", color: "var(--brand-contrast)", flexShrink: 0, boxShadow: "0 3px 10px rgba(233,78,26,.3)" }}>
          <Icon name="Share" size={17} />
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13 }}>Compartilhar</span>
        </button>
      </div>
      {/* lyrics */}
      <div key={index} style={{ flex: 1, overflowY: "auto", animation: `${dir < 0 ? "slideR" : "slideL"} .22s ease` }}>
        <LyricsView verses={h.verses} />
      </div>
      {/* arrow nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 4px 8px" }}>
        <button onClick={() => go(-1)} disabled={index === 0} aria-label="Anterior" style={arrowBtn(false, index === 0)}>
          <Icon name="ChevronLeftSize24" size={24} />
        </button>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>{index + 1} / {READER.length}</span>
        <button onClick={() => go(1)} disabled={index === READER.length - 1} aria-label="Próximo" style={arrowBtn(true, index === READER.length - 1)}>
          <Icon name="ChevronLeftSize24" size={24} style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
      {shared && (
        <div style={{ position: "absolute", left: "50%", bottom: 100, transform: "translateX(-50%)", zIndex: 40,
          background: "var(--c9)", color: "#fff", padding: "10px 18px", borderRadius: 22, fontFamily: "var(--font-body)",
          fontSize: 13, boxShadow: "0 8px 24px rgba(0,0,0,.3)", whiteSpace: "nowrap" }}>
          Compartilhando “{h.number} — {h.title}”…
        </div>
      )}
    </div>
  );
}
function arrowBtn(filled, disabled) {
  return { width: 64, height: 64, borderRadius: "50%", cursor: disabled ? "default" : "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .1s ease, opacity .15s ease",
    opacity: disabled ? 0.3 : 1,
    border: filled ? "none" : "1.5px solid var(--border-brand)",
    background: filled ? "var(--brand)" : "transparent",
    color: filled ? "var(--brand-contrast)" : "var(--brand)",
    boxShadow: filled && !disabled ? "0 6px 16px rgba(233,78,26,.3)" : "none" };
}

/* ── App ── */
function App() {
  const [navStyle, setNavStyle] = React.useState("bottom");
  const [tab, setTab] = React.useState("home");
  const [screen, setScreen] = React.useState("home");
  const [rIndex, setRIndex] = React.useState(0);
  const side = navStyle === "side";
  const nav = { pad: { padding: side ? "0 24px 96px 88px" : "0 24px 96px", height: "100%", overflowY: "auto", boxSizing: "border-box" } };
  const openHymn = (i) => { setRIndex(i); setScreen("reader"); };
  const onTab = (k) => { setTab(k); setScreen(k === "selecao" ? "selections" : k === "ajustes" ? "reader" : "home"); };

  return (
    <div className="stage">
      <div className="toolbar">
        <span>Menu inferior:</span>
        <button className={navStyle === "bottom" ? "on" : ""} onClick={() => setNavStyle("bottom")}>Barra flutuante</button>
        <button className={navStyle === "side" ? "on" : ""} onClick={() => setNavStyle("side")}>Menu lateral</button>
      </div>
      <div className="phone">
        <div className="notch" />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, zIndex: 30 }}><StatusBar tone="dark" /></div>
        <div className="viewport">
          <div style={{ position: "absolute", inset: 0, background: "var(--surface-app)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
            {screen === "home" && <HomeScreen nav={nav} openHymn={openHymn} />}
            {screen === "selections" && <SelectionsScreen nav={nav} openHymn={openHymn} />}
            {screen === "reader" && <ReaderScreen nav={nav} index={rIndex} setIndex={setRIndex} onBack={() => { setScreen("home"); setTab("home"); }} />}
          </div>
          {side ? <SideRail active={tab} onChange={onTab} /> : <FloatingNav active={tab} onChange={onTab} />}
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
