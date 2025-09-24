import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { setLang } from "../slices/languageSlice";

const texts = {
  en: {
    academy: "Rikkei Academy",
    toggleBtn: "Switch Language",
    vi: "Vietnamese",
    en: "English",
  },
  vi: {
    academy: "Học viện Rikkei",
    toggleBtn: "Đổi ngôn ngữ",
    vi: "Tiếng Việt",
    en: "Tiếng Anh",
  },
};

function LanguageSwitcher() {
  const lang = useAppSelector((s) => s.language.value);
  const dispatch = useAppDispatch();
  const t = texts[lang];

  const box: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: 8,
    display: "inline-block",
  };
  const item: React.CSSProperties = { padding: "4px 8px", cursor: "pointer" };
  const active: React.CSSProperties = { ...item, background: "#e5e7eb" };

  return (
    <div>
      <div style={box}>
        <div
          style={lang === "vi" ? active : item}
          onClick={() => dispatch(setLang("vi"))}
        >
          Vietnamese{lang === "vi" ? " ✓" : ""}
        </div>
        <div
          style={lang === "en" ? active : item}
          onClick={() => dispatch(setLang("en"))}
        >
          English{lang === "en" ? " ✓" : ""}
        </div>
      </div>
      <h3 style={{ marginTop: 12 }}>{t.academy}</h3>
    </div>
  );
}

export default LanguageSwitcher;
