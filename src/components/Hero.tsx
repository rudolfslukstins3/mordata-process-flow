import { useI18n } from "@/lib/i18n";
import { ArrowRight, Sparkles, Zap, FileText, MessageSquare, Database, Mail } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute right-[10%] top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles size={14} className="text-accent" />
              {t("hero.badge")}
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-gradient">{t("hero.title")}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95"
              >
                {t("hero.cta1")}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white/10"
              >
                {t("hero.cta2")}
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: "20+", l: t("hero.stat1") },
                { v: "90%", l: t("hero.stat2") },
                { v: "10×", l: t("hero.stat3") },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-semibold text-gradient-brand">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:200ms]">
      <div className="relative aspect-square">
        {/* Orbits */}
        <div className="absolute inset-8 rounded-full border border-border/60" />
        <div className="absolute inset-20 rounded-full border border-border/40" />
        <div className="absolute inset-32 rounded-full border border-border/30" />

        {/* Central card */}
        <div className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2">
          <div className="glass-strong rounded-2xl p-5 shadow-glow">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 animate-pulse-glow rounded-full bg-accent" />
              Mordata Engine
            </div>
            <div className="mt-3 space-y-2">
              {[60, 85, 40].map((w, i) => (
                <div key={i} className="space-y-1">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-6 rounded bg-white/5"
                  style={{ animation: `pulse-glow ${2 + i * 0.3}s ease-in-out ${i * 0.1}s infinite` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating tech bubbles */}
        {[
          { Icon: FileText, top: "8%", left: "12%", delay: "0s" },
          { Icon: MessageSquare, top: "12%", right: "8%", delay: "0.5s" },
          { Icon: Mail, bottom: "18%", left: "6%", delay: "1s" },
          { Icon: Database, bottom: "10%", right: "14%", delay: "1.5s" },
          { Icon: Zap, top: "50%", right: "-2%", delay: "2s" },
        ].map(({ Icon, delay, ...pos }, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{ ...pos, animationDelay: delay } as React.CSSProperties}
          >
            <div className="glass flex h-12 w-12 items-center justify-center rounded-xl shadow-elegant">
              <Icon size={20} className="text-accent" />
            </div>
          </div>
        ))}

        {/* Flow lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <linearGradient id="flowG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.22 264)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.78 0.13 230)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.55 0.22 264)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[
            "M80 80 Q200 140 200 200",
            "M320 80 Q200 140 200 200",
            "M60 320 Q200 260 200 200",
            "M340 320 Q200 260 200 200",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="url(#flowG)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              style={{ animation: `flow 3s linear ${i * 0.4}s infinite` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
