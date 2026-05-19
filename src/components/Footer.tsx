import { useI18n } from "@/lib/i18n";
import { Linkedin, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", key: "nav.services" },
  { href: "#how", key: "nav.how" },
  { href: "#examples", key: "nav.examples" },
  { href: "#about", key: "nav.about" },
  { href: "#tech", key: "nav.tech" },
  { href: "#contact", key: "nav.contact" },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-surface/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-display text-base font-bold text-primary-foreground">
                M
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">Mordata</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted-foreground transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-foreground/80 transition hover:text-accent">
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@mor-data.com" className="flex items-center gap-2 text-foreground/80 hover:text-accent">
                  <Mail size={14} /> info@mor-data.com
                </a>
              </li>
              <li>
                <a href="tel:+37122320007" className="flex items-center gap-2 text-foreground/80 hover:text-accent">
                  <Phone size={14} /> +371 22320007
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <Linkedin size={14} /> Mordata Solutions
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {year} Mordata. {t("footer.rights")}</span>
          <span className="font-mono uppercase tracking-wider">info@mor-data.com</span>
        </div>
      </div>
    </footer>
  );
}
