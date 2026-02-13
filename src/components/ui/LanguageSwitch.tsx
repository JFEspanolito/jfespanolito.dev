import { useState } from "react";

type Lang = "es" | "en";

interface LanguageSwitchProps {
  initialLang?: Lang;
}

export default function LanguageSwitch({ initialLang = "es" }: LanguageSwitchProps) {
  const [lang, setLang] = useState<Lang>(initialLang);

  const setLanguage = (next: Lang) => {
    if (next === lang) return;
    setLang(next);
    localStorage.setItem("lang", next);
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.location.assign(url.toString());
  };

  return (
    <div className="inline-flex items-center p-1 rounded-full border border-[var(--color-blue)]/40 bg-[var(--color-card-bg)]/80 shadow-[0_0_12px_rgba(99,102,241,0.15)] mr-6">
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={lang === "es"}
        className={`px-3 py-1.5 text-[11px] font-semibold rounded-full transition-all ${
          lang === "es" ? "bg-[var(--color-blue)] text-white" : "text-[var(--color-slate-blue)] hover:text-[var(--text-use)]"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1.5 text-[11px] font-semibold rounded-full transition-all ${
          lang === "en" ? "bg-[var(--color-blue)] text-white" : "text-[var(--color-slate-blue)] hover:text-[var(--text-use)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
