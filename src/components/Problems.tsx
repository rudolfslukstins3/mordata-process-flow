import { useI18n } from "@/lib/i18n";
import { X, Check } from "lucide-react";

export function Problems() {
  const { t } = useI18n();
  const before = Array.from({ length: 10 }, (_, i) => `p.b${i + 1}`);
  const after = Array.from({ length: 10 }, (_, i) => `p.a${i + 1}`);

  return (
    <section id="problems" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t("problems.eyebrow")} title={t("problems.title")} subtitle={t("problems.subtitle")} />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <X size={18} />
              </div>
              <h3 className="font-display text-xl font-semibold">{t("problems.before")}</h3>
            </div>
            <ul className="space-y-3">
              {before.map((k) => (
                <li key={k} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/50" />
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-card/40 p-8 backdrop-blur shadow-glow">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={18} />
                </div>
                <h3 className="font-display text-xl font-semibold text-gradient">{t("problems.after")}</h3>
              </div>
              <ul className="space-y-3">
                {after.map((k) => (
                  <li key={k} className="flex items-start gap-3 text-sm">
                    <Check size={14} className="mt-1 shrink-0 text-accent" />
                    <span className="text-foreground/90">{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent backdrop-blur">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
