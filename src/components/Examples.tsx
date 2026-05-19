import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Problems";
import { ArrowRight, Sparkles } from "lucide-react";

export function Examples() {
  const { t } = useI18n();
  const items = Array.from({ length: 12 }, (_, i) => `ex.${i + 1}`);
  const benefits = Array.from({ length: 6 }, (_, i) => `ex.b${i + 1}`);
  return (
    <section id="examples" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("ex.eyebrow")}
          title={t("ex.title")}
          subtitle={t("ex.subtitle")}
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((k, i) => (
            <div
              key={k}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-4 backdrop-blur transition hover:border-accent/40 hover:bg-card/60"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-xs font-mono text-accent">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <span className="text-sm text-foreground/90">{t(k)}</span>
              <ArrowRight size={14} className="ml-auto text-muted-foreground opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-accent/20 bg-card/40 p-8 backdrop-blur shadow-elegant">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-accent" />
            <h3 className="font-display text-xl font-semibold">{t("ex.benefits")}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((k) => (
              <div key={k} className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-foreground/90">{t(k)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
