import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Problems";
import { Target, TrendingUp, Handshake } from "lucide-react";

export function About() {
  const { t } = useI18n();
  const values = [
    { Icon: Target, k: "v1" },
    { Icon: TrendingUp, k: "v2" },
    { Icon: Handshake, k: "v3" },
  ];
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              center={false}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("about.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("about.p2")}
            </p>
          </div>

          <div className="space-y-4">
            {values.map(({ Icon, k }) => (
              <div
                key={k}
                className="group flex gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-accent/40 hover:bg-card/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-accent transition group-hover:bg-brand group-hover:text-primary-foreground">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{t(`about.${k}.t`)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(`about.${k}.d`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
