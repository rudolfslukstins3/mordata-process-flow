import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { LangSwitcher } from "./LangSwitcher";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", key: "nav.services" },
  { href: "#how", key: "nav.how" },
  { href: "#examples", key: "nav.examples" },
  { href: "#about", key: "nav.about" },
  { href: "#tech", key: "nav.tech" },
  { href: "#contact", key: "nav.contact" },
];

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-brand shadow-cyan">
            <div className="absolute inset-0 flex items-center justify-center font-display text-base font-bold text-primary-foreground">
              M
            </div>
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">
            Mordata
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-cyan transition hover:opacity-90 md:inline-flex"
          >
            {t("nav.cta")}
          </a>
          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {t(l.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
