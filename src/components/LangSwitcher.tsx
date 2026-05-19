import { useI18n, type Lang } from "@/lib/i18n";

export function LangSwitcher() {
  const { lang, setLang } = useI18n();
  const opts: Lang[] = ["lv", "en"];
  return (
    <div className="inline-flex items-center rounded-full border border-border/60 bg-white/5 p-0.5 text-xs font-medium backdrop-blur">
      {opts.map((o) => (
        <button
          key={o}
          onClick={() => setLang(o)}
          className={`rounded-full px-3 py-1 uppercase tracking-wider transition ${
            lang === o
              ? "bg-brand text-primary-foreground shadow-cyan"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={lang === o}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
