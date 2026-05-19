import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Problems";

export function HowItWorks() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4];
  return (
    <section id="how" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t("how.eyebrow")} title={t("how.title")} />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((n) => (
              <div key={n} className="group relative">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand font-display text-2xl font-semibold text-primary-foreground shadow-glow transition group-hover:scale-110">
                  {n.toString().padStart(2, "0")}
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-lg font-semibold">{t(`how.s${n}.t`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`how.s${n}.d`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
