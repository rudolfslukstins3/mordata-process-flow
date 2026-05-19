import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Problems";
import {
  Workflow, FileText, Receipt, MessageCircle, Mail, BarChart3, LayoutDashboard,
  FileSpreadsheet, Database, Network, GitBranch, Boxes, Truck, Users,
  ShoppingCart, ClipboardList, Search,
} from "lucide-react";

const services = [
  { key: "s1", Icon: Workflow },
  { key: "s2", Icon: FileText },
  { key: "s3", Icon: Receipt },
  { key: "s4", Icon: MessageCircle },
  { key: "s5", Icon: Mail },
  { key: "s6", Icon: BarChart3 },
  { key: "s7", Icon: LayoutDashboard },
  { key: "s8", Icon: FileSpreadsheet },
  { key: "s9", Icon: Database },
  { key: "s10", Icon: Network },
  { key: "s11", Icon: GitBranch },
  { key: "s12", Icon: Boxes },
  { key: "s13", Icon: Truck },
  { key: "s14", Icon: Users },
  { key: "s15", Icon: ShoppingCart },
  { key: "s16", Icon: ClipboardList },
  { key: "s17", Icon: Search },
];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, Icon }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card/60 hover:shadow-cyan"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition group-hover:bg-primary/30" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-accent transition group-hover:bg-brand group-hover:text-primary-foreground">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{t(`${key}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`${key}.d`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
