const NS = window.HinRioCCFDesignSystem_9cc2ad;
const { StatusBar, AppHeader, SearchBar, SegmentedControl, KeypadTile, PrimaryButton,
  BottomNav, SongListItem, LyricsHeader, LyricsView, PageNav, ReaderControls, SelectionRow, Icon } = NS;
const DATA = window.HINARIO_DATA;

function Screen({ theme, children }) {
  return (
    <div data-theme={theme === "escuro" ? "dark" : "light"}
      style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        background: "var(--surface-app)", color: "var(--text-primary)", overflow: "hidden" }}>
      {children}
    </div>
  );
}
const bodyStyle = { flex: 1, overflowY: "auto", padding: "56px 24px 0" };

/* ── Home ── */
function HomeScreen({ go, tab, setTab, book, setBook, showHarpa }) {
  const [buf, setBuf] = React.useState("");
  const rows = [["C", "H", "S"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
  return (
    <>
      <div style={bodyStyle}>
        <AppHeader />
        <div style={{ padding: "8px 0 20px" }}>
          <SearchBar value={buf} onFocus={() => go("search")} onChange={setBuf} />
        </div>
        {showHarpa && (
          <div style={{ maxWidth: 240, margin: "0 auto 24px" }}>
            <SegmentedControl value={book} onChange={setBook} />
          </div>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 68px)", gap: 22, justifyContent: "center", marginTop: 12 }}>
          {rows.flat().map((k) => (
            <KeypadTile key={k} onClick={() => setBuf(buf + k)}>{k}</KeypadTile>
          ))}
          <div style={{ gridColumn: "2", display: "flex", justifyContent: "center" }}>
            <KeypadTile onClick={() => setBuf(buf + "0")}>0</KeypadTile>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "26px 0 20px" }}>
          <PrimaryButton onClick={() => go("search")}>Buscar</PrimaryButton>
        </div>
      </div>
      <BottomNav active={tab} onChange={setTab} />
    </>
  );
}

/* ── Search ── */
function SearchScreen({ go, tab, setTab, openHymn }) {
  const [q, setQ] = React.useState("Esta");
  const results = DATA.results;
  return (
    <>
      <div style={bodyStyle}>
        <AppHeader />
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0 16px" }}>
          <button onClick={() => go("home")} aria-label="Voltar"
            style={{ background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--text-primary)", display: "flex" }}>
            <Icon name="ChevronLeftSize24" size={22} />
          </button>
          <div style={{ flex: 1 }}><SearchBar value={q} onChange={setQ} /></div>
        </div>
        <div>
          {results.map((r, i) => (
            <SongListItem key={i} {...r} query={q} divider={i < results.length - 1}
              onClick={() => openHymn(r.id)} />
          ))}
        </div>
      </div>
      <BottomNav active={tab} onChange={setTab} />
    </>
  );
}

/* ── Reader ── */
function ReaderScreen({ go, tab, setTab, hymnId, theme, setTheme, fontScale, setFontScale }) {
  const [showControls, setShowControls] = React.useState(false);
  const h = DATA.hymns[hymnId] || DATA.hymns["001"];
  return (
    <>
      <div style={bodyStyle}>
        <AppHeader onMenu={() => setShowControls((s) => !s)} />
        <div style={{ padding: "4px 0 12px" }}>
          <LyricsHeader number={h.number} title={h.title} onBack={() => go("search")} />
        </div>
        <LyricsView verses={h.verses} scale={fontScale} />
        <div style={{ padding: "28px 0 12px" }}>
          <PageNav prevDisabled onNext={() => {}} />
        </div>
      </div>
      {showControls && (
        <ReaderControls theme={theme} onThemeChange={setTheme} fontScale={fontScale} onFontScaleChange={setFontScale} />
      )}
      <BottomNav active={showControls ? "ajustes" : tab}
        onChange={(k) => { if (k === "ajustes") setShowControls((s) => !s); else { setShowControls(false); setTab(k); } }} />
    </>
  );
}

/* ── Selections ── */
function SelectionsScreen({ tab, setTab, openHymn }) {
  const [open, setOpen] = React.useState(1);
  return (
    <>
      <div style={bodyStyle}>
        <AppHeader />
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0 12px" }}>
          <button onClick={() => setTab("home")} aria-label="Voltar"
            style={{ background: "none", border: "none", padding: 4, cursor: "pointer", color: "var(--text-primary)", display: "flex" }}>
            <Icon name="ChevronLeftSize24" size={22} />
          </button>
          <h1 style={{ flex: 1, textAlign: "center", margin: 0, paddingRight: 30,
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase",
            color: "var(--text-primary)" }}>Seleções de Hinos</h1>
        </div>
        <div>
          {DATA.selections.map((s, i) => (
            <SelectionRow key={i} title={s.title} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)}>
              {s.hymns.map((hy, j) => (
                <SongListItem key={j} {...hy} divider={j < s.hymns.length - 1} onClick={() => openHymn(hy.id)} />
              ))}
              {s.hymns.length === 0 && (
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", padding: "4px 0 12px" }}>
                  Nenhum hino adicionado.
                </div>
              )}
            </SelectionRow>
          ))}
        </div>
      </div>
      <BottomNav active={tab} onChange={setTab} />
    </>
  );
}

/* ── App shell ── */
function App() {
  const [screen, setScreen] = React.useState("home");
  const [tab, setTab] = React.useState("home");
  const [book, setBook] = React.useState("Hinário");
  const [hymnId, setHymnId] = React.useState("001");
  const [theme, setTheme] = React.useState("claro");
  const [fontScale, setFontScale] = React.useState(1);

  const go = (s) => setScreen(s);
  const openHymn = (id) => { setHymnId(id); setScreen("reader"); };
  const onTab = (k) => {
    setTab(k);
    if (k === "home") setScreen("home");
    else if (k === "selecao") setScreen("selections");
    else if (k === "ajustes") { setScreen("reader"); }
  };
  const statusTone = (screen === "reader" && theme === "escuro") ? "light" : "dark";

  return (
    <div className="phone" data-theme={theme === "escuro" ? "dark" : "light"}>
      <div className="notch" />
      <div style={{ position: "absolute", top: 8, left: 0, right: 0, zIndex: 5 }}>
        <StatusBar tone={statusTone} />
      </div>
      <div className="viewport">
        <Screen theme={theme}>
          {screen === "home" && <HomeScreen go={go} tab={tab} setTab={onTab} book={book} setBook={setBook} showHarpa={book !== null} />}
          {screen === "search" && <SearchScreen go={go} tab={tab} setTab={onTab} openHymn={openHymn} />}
          {screen === "reader" && <ReaderScreen go={go} tab={tab} setTab={onTab} hymnId={hymnId}
            theme={theme} setTheme={setTheme} fontScale={fontScale} setFontScale={setFontScale} />}
          {screen === "selections" && <SelectionsScreen tab={tab} setTab={onTab} openHymn={openHymn} />}
        </Screen>
      </div>
      <div className="home-indicator" />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
