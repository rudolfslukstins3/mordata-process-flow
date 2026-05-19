import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Problems";

const techs = [
  "Power BI",
  "n8n",
  "Microsoft Power Platform",
  "WhatsApp",
  "Google Workspace",
  "Excel Automation",
  "APIs",
  "Cloud Systems",
  "Business Integrations",
];

export function Technologies() {
  const { t } = useI18n();
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("tech.eyebrow")}
          title={t("tech.title")}
          subtitle={t("tech.subtitle")}
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {techs.map((name, i) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 px-6 py-8 text-center backdrop-blur transition hover:border-accent/40 hover:shadow-cyan"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="font-display text-lg font-semibold transition group-hover:text-gradient">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
