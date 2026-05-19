import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { X, Menu, Sparkles, ArrowRight, FileText, MessageSquare, Mail, Database, Zap, Check, Workflow, Receipt, MessageCircle, BarChart3, LayoutDashboard, FileSpreadsheet, Network, GitBranch, Boxes, Truck, Users, ShoppingCart, ClipboardList, Search, Target, TrendingUp, Handshake, Phone, Linkedin, Send } from "lucide-react";
const lv = {
  "nav.services": "Pakalpojumi",
  "nav.how": "Kā strādājam",
  "nav.examples": "Piemēri",
  "nav.about": "Par mums",
  "nav.tech": "Tehnoloģijas",
  "nav.contact": "Kontakti",
  "nav.cta": "Pieteikt konsultāciju",
  "hero.badge": "Biznesa procesu automatizācija",
  "hero.title": "Automatizējam Jūsu uzņēmuma ikdienas procesus",
  "hero.subtitle": "Mordata palīdz uzņēmumiem automatizēt dokumentu apriti, e-pastus, WhatsApp komunikāciju, atskaites un citus ikdienas procesus, samazinot manuālu darbu un ietaupot laiku.",
  "hero.cta1": "Pieteikt konsultāciju",
  "hero.cta2": "Apskatīt pakalpojumus",
  "hero.stat1": "Stundas ietaupītas nedēļā",
  "hero.stat2": "Mazāk manuālo kļūdu",
  "hero.stat3": "Ātrāka dokumentu apstrāde",
  "problems.eyebrow": "Problēmas, ko risinām",
  "problems.title": "Vai Jūsu komanda tērē laiku rutīnas darbiem?",
  "problems.subtitle": "Lielākā daļa uzņēmumu joprojām veic ikdienas darbus manuāli — tas ir lēni, dārgi un rada kļūdas.",
  "problems.before": "Bez automatizācijas",
  "problems.after": "Ar Mordata",
  "p.b1": "Manuāla datu ievade",
  "p.b2": "Darbs Excel failos",
  "p.b3": "Manuāla rēķinu apstrāde",
  "p.b4": "Daudz atkārtojošu uzdevumu",
  "p.b5": "Nesakārtoti dati",
  "p.b6": "Ilga dokumentu apstrāde",
  "p.b7": "Daudz manuālu e-pastu",
  "p.b8": "Sarežģīta informācijas aprite",
  "p.b9": "Grūti pārskatīt uzņēmuma datus",
  "p.b10": "Darbinieki tērē laiku rutīnai",
  "p.a1": "Automatizēti procesi",
  "p.a2": "Samazināts manuālais darbs",
  "p.a3": "Savienotas sistēmas",
  "p.a4": "Automatizēta dokumentu plūsma",
  "p.a5": "Automatizētas atskaites",
  "p.a6": "Automatizēta klientu komunikācija",
  "p.a7": "Automatizētas WhatsApp ziņas",
  "p.a8": "Automatizēta e-pastu apstrāde",
  "p.a9": "Automatizēta datu ievade",
  "p.a10": "Sakārtota informācijas plūsma",
  "services.eyebrow": "Mūsu pakalpojumi",
  "services.title": "Risinājumi, kas atbrīvo Jūsu komandas laiku",
  "services.subtitle": "Mēs analizējam, projektējam un ieviešam automatizāciju, kas reāli strādā Jūsu uzņēmuma vidē.",
  "s1.t": "Biznesa procesu automatizācija",
  "s1.d": "Pārveidojam manuālus procesus efektīvos digitālos workflow.",
  "s2.t": "Dokumentu apstrādes automatizācija",
  "s2.d": "Automātiska dokumentu saņemšana, atpazīšana un sakārtošana.",
  "s3.t": "Rēķinu automatizācija",
  "s3.d": "Automātiska rēķinu apstrāde, saglabāšana un ievietošana sistēmās.",
  "s4.t": "WhatsApp automatizācija",
  "s4.d": "Automatizēta klientu komunikācija WhatsApp kanālā.",
  "s5.t": "E-pastu automatizācija",
  "s5.d": "Automātiska e-pastu apstrāde, atbildes un sadalīšana.",
  "s6.t": "Automatizētas atskaites",
  "s6.d": "Reāllaika atskaites, kas tiek ģenerētas bez manuāla darba.",
  "s7.t": "Dashboardu izveide",
  "s7.d": "Pārskatāmi vadības paneļi ar uzņēmuma galvenajiem rādītājiem.",
  "s8.t": "Excel procesu automatizācija",
  "s8.d": "Automatizējam darbu ar Excel failiem un datu pārnesi.",
  "s9.t": "Datu apkopošana un apstrāde",
  "s9.d": "Apvienojam datus no dažādiem avotiem vienotā struktūrā.",
  "s10.t": "Sistēmu integrācijas",
  "s10.d": "Savienojam Jūsu sistēmas, lai informācija plūst automātiski.",
  "s11.t": "Workflow optimizācija",
  "s11.d": "Pārskatām un uzlabojam esošos procesus efektivitātei.",
  "s12.t": "Noliktavas procesu automatizācija",
  "s12.d": "Automatizēta noliktavas datu apkopošana un kontrole.",
  "s13.t": "Loģistikas procesu automatizācija",
  "s13.d": "Loģistikas datu apkopošana, atskaites un paziņojumi.",
  "s14.t": "Klientu komunikācijas automatizācija",
  "s14.d": "Automātiski paziņojumi, atgādinājumi un atbildes klientiem.",
  "s15.t": "Pasūtījumu apstrādes automatizācija",
  "s15.d": "Ātrāka un precīzāka pasūtījumu plūsma bez manuāla darba.",
  "s16.t": "Vadības atskaišu automatizācija",
  "s16.d": "Automātiski sagatavotas atskaites vadības lēmumu pieņemšanai.",
  "s17.t": "Procesu analīze un konsultācijas",
  "s17.d": "Identificējam, kuros procesos automatizācija dos vislielāko vērtību.",
  "how.eyebrow": "Kā strādājam",
  "how.title": "Vienkāršs process. Reāli rezultāti.",
  "how.s1.t": "Izprotam uzņēmuma procesus",
  "how.s1.d": "Iepazīstamies ar Jūsu komandu un esošajiem procesiem.",
  "how.s2.t": "Atrodam automatizācijas iespējas",
  "how.s2.d": "Identificējam jomas ar lielāko ietekmi un atdevi.",
  "how.s3.t": "Izveidojam risinājumu",
  "how.s3.d": "Projektējam un ieviešam automatizāciju Jūsu vidē.",
  "how.s4.t": "Uzlabojam un uzturam procesus",
  "how.s4.d": "Pielāgojam, mērogojam un nodrošinām nepārtrauktu darbību.",
  "ex.eyebrow": "Reāli piemēri",
  "ex.title": "Ko mēs varam automatizēt Jūsu uzņēmumā",
  "ex.subtitle": "Šie ir tikai daži piemēri no daudzajiem procesiem, ko varam padarīt automātiskus.",
  "ex.1": "Automātiska rēķinu saņemšana un apstrāde",
  "ex.2": "Dokumentu saglabāšana un sakārtošana",
  "ex.3": "Datu ievietošana Excel vai sistēmās",
  "ex.4": "WhatsApp klientu komunikācijas automatizācija",
  "ex.5": "Automātiskas e-pastu atbildes",
  "ex.6": "Automātiskas vadības atskaites",
  "ex.7": "PDF dokumentu apstrāde",
  "ex.8": "Noliktavas datu automatizācija",
  "ex.9": "Loģistikas datu apkopošana",
  "ex.10": "Pasūtījumu apstrādes automatizācija",
  "ex.11": "Automātiski paziņojumi klientiem",
  "ex.12": "Integrācijas starp sistēmām",
  "ex.benefits": "Ko Jūs iegūstat",
  "ex.b1": "Mazāk kļūdu",
  "ex.b2": "Ātrāki procesi",
  "ex.b3": "Mazāk manuāla darba",
  "ex.b4": "Ietaupīts laiks",
  "ex.b5": "Pārskatāmāki dati",
  "ex.b6": "Efektīvāks uzņēmuma darbs",
  "about.eyebrow": "Par Mordata",
  "about.title": "Praktiska automatizācija reāliem uzņēmumiem",
  "about.p1": "Mordata palīdz maziem un vidējiem uzņēmumiem optimizēt darba plūsmas, automatizēt atkārtojošus procesus un uzlabot ikdienas darba efektivitāti.",
  "about.p2": "Mēs sakārtojam datus, uzlabojam atskaites un savienojam sistēmas, lai Jūsu komanda var koncentrēties uz svarīgo — uzņēmuma izaugsmi.",
  "about.v1.t": "Praktiska pieeja",
  "about.v1.d": "Risinājumi, kas strādā reālajā darba vidē.",
  "about.v2.t": "Biznesa vērtība",
  "about.v2.d": "Katrs projekts mērīts laika un izmaksu ietaupījumā.",
  "about.v3.t": "Ilgtermiņa partnerība",
  "about.v3.d": "Uzturam un attīstām risinājumus kopā ar Jums.",
  "tech.eyebrow": "Tehnoloģijas",
  "tech.title": "Strādājam ar uzticamām enterprise tehnoloģijām",
  "tech.subtitle": "Izvēlamies tehnoloģijas, kas vislabāk atbilst Jūsu uzņēmuma vajadzībām un sistēmām.",
  "contact.eyebrow": "Kontakti",
  "contact.title": "Sazinieties ar mums",
  "contact.subtitle": "Parunāsim par to, kā automatizācija var uzlabot Jūsu uzņēmuma ikdienas darbu.",
  "contact.email": "E-pasts",
  "contact.phone": "Telefons",
  "contact.linkedin": "LinkedIn",
  "form.name": "Vārds",
  "form.company": "Uzņēmums",
  "form.email": "E-pasts",
  "form.phone": "Telefons",
  "form.message": "Ziņojums",
  "form.submit": "Pieteikt konsultāciju",
  "form.success": "Paldies! Mēs ar Jums sazināsimies tuvākajā laikā.",
  "form.sending": "Nosūta...",
  "footer.tagline": "Mordata palīdz uzņēmumiem automatizēt ikdienas procesus un samazināt manuālu darbu.",
  "footer.nav": "Navigācija",
  "footer.contact": "Kontakti",
  "footer.rights": "Visas tiesības aizsargātas."
};
const en = {
  "nav.services": "Services",
  "nav.how": "How we work",
  "nav.examples": "Examples",
  "nav.about": "About",
  "nav.tech": "Technologies",
  "nav.contact": "Contact",
  "nav.cta": "Book a consultation",
  "hero.badge": "Business process automation",
  "hero.title": "We automate your company's everyday processes",
  "hero.subtitle": "Mordata helps businesses automate document flows, emails, WhatsApp communication, reports and other daily processes — reducing manual work and saving time.",
  "hero.cta1": "Book a consultation",
  "hero.cta2": "Explore services",
  "hero.stat1": "Hours saved per week",
  "hero.stat2": "Fewer manual errors",
  "hero.stat3": "Faster document processing",
  "problems.eyebrow": "Problems we solve",
  "problems.title": "Is your team wasting time on routine work?",
  "problems.subtitle": "Most companies still handle daily tasks manually — it's slow, costly and prone to errors.",
  "problems.before": "Without automation",
  "problems.after": "With Mordata",
  "p.b1": "Manual data entry",
  "p.b2": "Work in Excel files",
  "p.b3": "Manual invoice handling",
  "p.b4": "Many repetitive tasks",
  "p.b5": "Disorganized data",
  "p.b6": "Slow document processing",
  "p.b7": "Lots of manual emails",
  "p.b8": "Complex information flow",
  "p.b9": "Hard to review company data",
  "p.b10": "Employees lose time on routine",
  "p.a1": "Automated processes",
  "p.a2": "Reduced manual work",
  "p.a3": "Connected systems",
  "p.a4": "Automated document flow",
  "p.a5": "Automated reports",
  "p.a6": "Automated customer communication",
  "p.a7": "Automated WhatsApp messages",
  "p.a8": "Automated email handling",
  "p.a9": "Automated data entry",
  "p.a10": "Organized information flow",
  "services.eyebrow": "Our services",
  "services.title": "Solutions that free your team's time",
  "services.subtitle": "We analyze, design and implement automation that truly works in your environment.",
  "s1.t": "Business process automation",
  "s1.d": "We turn manual processes into efficient digital workflows.",
  "s2.t": "Document processing automation",
  "s2.d": "Automatic document intake, recognition and organization.",
  "s3.t": "Invoice automation",
  "s3.d": "Automatic invoice processing, storage and entry into systems.",
  "s4.t": "WhatsApp automation",
  "s4.d": "Automated customer communication on WhatsApp.",
  "s5.t": "Email automation",
  "s5.d": "Automatic email handling, replies and routing.",
  "s6.t": "Automated reports",
  "s6.d": "Real-time reports generated without manual work.",
  "s7.t": "Dashboards",
  "s7.d": "Clear management dashboards with your key metrics.",
  "s8.t": "Excel process automation",
  "s8.d": "Automating Excel-based work and data transfer.",
  "s9.t": "Data aggregation & processing",
  "s9.d": "We unify data from various sources into a single structure.",
  "s10.t": "System integrations",
  "s10.d": "We connect your systems so information flows automatically.",
  "s11.t": "Workflow optimization",
  "s11.d": "We review and improve existing processes for efficiency.",
  "s12.t": "Warehouse process automation",
  "s12.d": "Automated warehouse data collection and control.",
  "s13.t": "Logistics process automation",
  "s13.d": "Logistics data aggregation, reporting and notifications.",
  "s14.t": "Customer communication automation",
  "s14.d": "Automatic notifications, reminders and replies for clients.",
  "s15.t": "Order processing automation",
  "s15.d": "Faster, more accurate order flow without manual work.",
  "s16.t": "Management report automation",
  "s16.d": "Automatically prepared reports for management decisions.",
  "s17.t": "Process analysis & consulting",
  "s17.d": "We identify where automation delivers the biggest impact.",
  "how.eyebrow": "How we work",
  "how.title": "A simple process. Real results.",
  "how.s1.t": "Understand your processes",
  "how.s1.d": "We get to know your team and current workflows.",
  "how.s2.t": "Identify automation opportunities",
  "how.s2.d": "We find the areas with the highest impact and ROI.",
  "how.s3.t": "Build the solution",
  "how.s3.d": "We design and implement automation in your environment.",
  "how.s4.t": "Improve and maintain",
  "how.s4.d": "We adapt, scale and ensure continuous operation.",
  "ex.eyebrow": "Real examples",
  "ex.title": "What we can automate in your business",
  "ex.subtitle": "These are just a few examples among many processes we can fully automate.",
  "ex.1": "Automatic invoice intake and processing",
  "ex.2": "Document storage and organization",
  "ex.3": "Data entry into Excel or systems",
  "ex.4": "WhatsApp customer communication automation",
  "ex.5": "Automatic email replies",
  "ex.6": "Automatic management reports",
  "ex.7": "PDF document processing",
  "ex.8": "Warehouse data automation",
  "ex.9": "Logistics data aggregation",
  "ex.10": "Order processing automation",
  "ex.11": "Automatic client notifications",
  "ex.12": "Integrations between systems",
  "ex.benefits": "What you gain",
  "ex.b1": "Fewer errors",
  "ex.b2": "Faster processes",
  "ex.b3": "Less manual work",
  "ex.b4": "Saved time",
  "ex.b5": "Clearer data",
  "ex.b6": "A more efficient business",
  "about.eyebrow": "About Mordata",
  "about.title": "Practical automation for real businesses",
  "about.p1": "Mordata helps small and medium businesses optimize workflows, automate repetitive work and improve day-to-day operational efficiency.",
  "about.p2": "We organize data, improve reporting and connect systems so your team can focus on what matters — growing the business.",
  "about.v1.t": "Practical approach",
  "about.v1.d": "Solutions that work in real-world operations.",
  "about.v2.t": "Business value",
  "about.v2.d": "Every project measured in time and cost savings.",
  "about.v3.t": "Long-term partnership",
  "about.v3.d": "We maintain and evolve solutions alongside you.",
  "tech.eyebrow": "Technologies",
  "tech.title": "We work with reliable enterprise technologies",
  "tech.subtitle": "We choose the technologies that best fit your company's needs and systems.",
  "contact.eyebrow": "Contact",
  "contact.title": "Get in touch",
  "contact.subtitle": "Let's talk about how automation can improve your company's everyday work.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.linkedin": "LinkedIn",
  "form.name": "Name",
  "form.company": "Company",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.message": "Message",
  "form.submit": "Book a consultation",
  "form.success": "Thank you! We will be in touch shortly.",
  "form.sending": "Sending...",
  "footer.tagline": "Mordata helps businesses automate everyday processes and reduce manual work.",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved."
};
const dicts = { lv, en };
const Ctx = createContext(null);
function I18nProvider({ children }) {
  const [lang, setLangState] = useState("lv");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("mordata-lang");
    if (saved === "lv" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mordata-lang", l);
      document.documentElement.lang = l;
    }
  };
  const t = (key) => dicts[lang][key] ?? dicts.lv[key] ?? key;
  return /* @__PURE__ */ jsx(Ctx.Provider, { value: { lang, setLang, t }, children });
}
function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
function LangSwitcher() {
  const { lang, setLang } = useI18n();
  const opts = ["lv", "en"];
  return /* @__PURE__ */ jsx("div", { className: "inline-flex items-center rounded-full border border-border/60 bg-white/5 p-0.5 text-xs font-medium backdrop-blur", children: opts.map((o) => /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setLang(o),
      className: `rounded-full px-3 py-1 uppercase tracking-wider transition ${lang === o ? "bg-brand text-primary-foreground shadow-cyan" : "text-muted-foreground hover:text-foreground"}`,
      "aria-pressed": lang === o,
      children: o
    },
    o
  )) });
}
const links = [
  { href: "#services", key: "nav.services" },
  { href: "#how", key: "nav.how" },
  { href: "#examples", key: "nav.examples" },
  { href: "#about", key: "nav.about" },
  { href: "#tech", key: "nav.tech" },
  { href: "#contact", key: "nav.contact" }
];
function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "group flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "relative h-8 w-8 overflow-hidden rounded-lg bg-brand shadow-cyan", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center font-display text-base font-bold text-primary-foreground", children: "M" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-semibold tracking-tight", children: "Mordata" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-8 lg:flex", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground transition hover:text-foreground",
              children: t(l.key)
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(LangSwitcher, {}),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-cyan transition hover:opacity-90 md:inline-flex",
                children: t("nav.cta")
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "rounded-md p-2 lg:hidden",
                onClick: () => setOpen((o) => !o),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "rounded-md px-2 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
              children: t(l.key)
            },
            l.href
          )),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-full bg-brand px-5 py-2 text-center text-sm font-medium text-primary-foreground",
              children: t("nav.cta")
            }
          )
        ] }) })
      ]
    }
  );
}
function Hero() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-44 lg:pb-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute right-[10%] top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "text-accent" }),
          t("hero.badge")
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: t("hero.title") }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg", children: t("hero.subtitle") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#contact",
              className: "group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95",
              children: [
                t("hero.cta1"),
                /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "transition group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#services",
              className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white/10",
              children: t("hero.cta2")
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid max-w-lg grid-cols-3 gap-6", children: [
          { v: "20+", l: t("hero.stat1") },
          { v: "90%", l: t("hero.stat2") },
          { v: "10×", l: t("hero.stat3") }
        ].map((s) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-semibold text-gradient-brand", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsx(HeroVisual, {})
    ] }) })
  ] });
}
function HeroVisual() {
  return /* @__PURE__ */ jsx("div", { className: "relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:200ms]", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-8 rounded-full border border-border/60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-20 rounded-full border border-border/40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-32 rounded-full border border-border/30" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-5 shadow-glow", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx("div", { className: "h-2 w-2 animate-pulse-glow rounded-full bg-accent" }),
        "Mordata Engine"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-2", children: [60, 85, 40].map((w, i) => /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full rounded-full bg-brand",
          style: { width: `${w}%` }
        }
      ) }) }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-3 gap-1.5", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-6 rounded bg-white/5",
          style: { animation: `pulse-glow ${2 + i * 0.3}s ease-in-out ${i * 0.1}s infinite` }
        },
        i
      )) })
    ] }) }),
    [
      { Icon: FileText, top: "8%", left: "12%", delay: "0s" },
      { Icon: MessageSquare, top: "12%", right: "8%", delay: "0.5s" },
      { Icon: Mail, bottom: "18%", left: "6%", delay: "1s" },
      { Icon: Database, bottom: "10%", right: "14%", delay: "1.5s" },
      { Icon: Zap, top: "50%", right: "-2%", delay: "2s" }
    ].map(({ Icon, delay, ...pos }, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute animate-float",
        style: { ...pos, animationDelay: delay },
        children: /* @__PURE__ */ jsx("div", { className: "glass flex h-12 w-12 items-center justify-center rounded-xl shadow-elegant", children: /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-accent" }) })
      },
      i
    )),
    /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 h-full w-full", viewBox: "0 0 400 400", fill: "none", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "flowG", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.22 264)", stopOpacity: "0" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "oklch(0.78 0.13 230)", stopOpacity: "0.6" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.55 0.22 264)", stopOpacity: "0" })
      ] }) }),
      [
        "M80 80 Q200 140 200 200",
        "M320 80 Q200 140 200 200",
        "M60 320 Q200 260 200 200",
        "M340 320 Q200 260 200 200"
      ].map((d, i) => /* @__PURE__ */ jsx(
        "path",
        {
          d,
          stroke: "url(#flowG)",
          strokeWidth: "1.5",
          strokeDasharray: "4 6",
          style: { animation: `flow 3s linear ${i * 0.4}s infinite` }
        },
        i
      ))
    ] })
  ] }) });
}
function Problems() {
  const { t } = useI18n();
  const before = Array.from({ length: 10 }, (_, i) => `p.b${i + 1}`);
  const after = Array.from({ length: 10 }, (_, i) => `p.a${i + 1}`);
  return /* @__PURE__ */ jsx("section", { id: "problems", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: t("problems.eyebrow"), title: t("problems.title"), subtitle: t("problems.subtitle") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card/40 p-8 backdrop-blur", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15 text-destructive", children: /* @__PURE__ */ jsx(X, { size: 18 }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: t("problems.before") })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: before.map((k) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/50" }),
          t(k)
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-accent/20 bg-card/40 p-8 backdrop-blur shadow-glow", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Check, { size: 18 }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-gradient", children: t("problems.after") })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: after.map((k) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Check, { size: 14, className: "mt-1 shrink-0 text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: t(k) })
          ] }, k)) })
        ] })
      ] })
    ] })
  ] }) });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true
}) {
  return /* @__PURE__ */ jsxs("div", { className: `max-w-3xl ${center ? "mx-auto text-center" : ""}`, children: [
    /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent backdrop-blur", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: title }) }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground md:text-lg", children: subtitle })
  ] });
}
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
  { key: "s17", Icon: Search }
];
function Services() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "relative py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: t("services.eyebrow"),
          title: t("services.title"),
          subtitle: t("services.subtitle")
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: services.map(({ key, Icon }) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card/60 hover:shadow-cyan",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition group-hover:bg-primary/30" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-accent transition group-hover:bg-brand group-hover:text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: t(`${key}.t`) }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t(`${key}.d`) })
            ] })
          ]
        },
        key
      )) })
    ] })
  ] });
}
function HowItWorks() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4];
  return /* @__PURE__ */ jsx("section", { id: "how", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: t("how.eyebrow"), title: t("how.title") }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 lg:grid-cols-4", children: steps.map((n) => /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand font-display text-2xl font-semibold text-primary-foreground shadow-glow transition group-hover:scale-110", children: n.toString().padStart(2, "0") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: t(`how.s${n}.t`) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t(`how.s${n}.d`) })
        ] })
      ] }, n)) })
    ] })
  ] }) });
}
function Examples() {
  const { t } = useI18n();
  const items = Array.from({ length: 12 }, (_, i) => `ex.${i + 1}`);
  const benefits = Array.from({ length: 6 }, (_, i) => `ex.b${i + 1}`);
  return /* @__PURE__ */ jsxs("section", { id: "examples", className: "relative py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: t("ex.eyebrow"),
          title: t("ex.title"),
          subtitle: t("ex.subtitle")
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: items.map((k, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-4 backdrop-blur transition hover:border-accent/40 hover:bg-card/60",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-xs font-mono text-accent", children: (i + 1).toString().padStart(2, "0") }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/90", children: t(k) }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "ml-auto text-muted-foreground opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" })
          ]
        },
        k
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-3xl border border-accent/20 bg-card/40 p-8 backdrop-blur shadow-elegant", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 18, className: "text-accent" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: t("ex.benefits") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: benefits.map((k) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: t(k) })
        ] }, k)) })
      ] })
    ] })
  ] });
}
function About() {
  const { t } = useI18n();
  const values = [
    { Icon: Target, k: "v1" },
    { Icon: TrendingUp, k: "v2" },
    { Icon: Handshake, k: "v3" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid items-start gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: t("about.eyebrow"),
          title: t("about.title"),
          center: false
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg", children: t("about.p1") }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg", children: t("about.p2") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: values.map(({ Icon, k }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group flex gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-accent/40 hover:bg-card/60",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-accent transition group-hover:bg-brand group-hover:text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: t(`about.${k}.t`) }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t(`about.${k}.d`) })
          ] })
        ]
      },
      k
    )) })
  ] }) }) });
}
const techs = [
  "Power BI",
  "n8n",
  "Microsoft Power Platform",
  "WhatsApp",
  "Google Workspace",
  "Excel Automation",
  "APIs",
  "Cloud Systems",
  "Business Integrations"
];
function Technologies() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxs("section", { id: "tech", className: "relative py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: t("tech.eyebrow"),
          title: t("tech.title"),
          subtitle: t("tech.subtitle")
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3", children: techs.map((name, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative overflow-hidden rounded-2xl border border-border bg-card/40 px-6 py-8 text-center backdrop-blur transition hover:border-accent/40 hover:shadow-cyan",
          style: { animationDelay: `${i * 60}ms` },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-semibold transition group-hover:text-gradient", children: name })
          ]
        },
        name
      )) })
    ] })
  ] });
}
const EMAIL = "info@mor-data.com";
const PHONE = "+371 22320007";
function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Mordata — Pieteikums konsultācijai: ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Vārds: ${form.name}
Uzņēmums: ${form.company}
E-pasts: ${form.email}
Telefons: ${form.phone}

Ziņojums:
${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 600);
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: t("contact.eyebrow"),
          title: t("contact.title"),
          subtitle: t("contact.subtitle")
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            ContactCard,
            {
              Icon: Mail,
              label: t("contact.email"),
              value: EMAIL,
              href: `mailto:${EMAIL}`
            }
          ),
          /* @__PURE__ */ jsx(
            ContactCard,
            {
              Icon: Phone,
              label: t("contact.phone"),
              value: PHONE,
              href: `tel:${PHONE.replace(/\s/g, "")}`
            }
          ),
          /* @__PURE__ */ jsx(
            ContactCard,
            {
              Icon: Linkedin,
              label: t("contact.linkedin"),
              value: "Mordata Solutions"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur shadow-elegant", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" }),
          sent ? /* @__PURE__ */ jsxs("div", { className: "relative flex h-full min-h-[400px] flex-col items-center justify-center text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Check, { size: 28 }) }),
            /* @__PURE__ */ jsx("p", { className: "max-w-sm text-lg font-medium text-foreground", children: t("form.success") })
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "relative grid gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsx(Field, { label: t("form.name"), value: form.name, onChange: update("name"), required: true }),
              /* @__PURE__ */ jsx(Field, { label: t("form.company"), value: form.company, onChange: update("company") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsx(Field, { label: t("form.email"), type: "email", value: form.email, onChange: update("email"), required: true }),
              /* @__PURE__ */ jsx(Field, { label: t("form.phone"), value: form.phone, onChange: update("phone") })
            ] }),
            /* @__PURE__ */ jsx(
              Field,
              {
                label: t("form.message"),
                value: form.message,
                onChange: update("message"),
                textarea: true,
                required: true
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                disabled: sending,
                className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95 disabled:opacity-60",
                children: [
                  sending ? t("form.sending") : t("form.submit"),
                  /* @__PURE__ */ jsx(Send, { size: 16 })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ContactCard({
  Icon,
  label,
  value,
  href
}) {
  const Wrapper = href ? "a" : "div";
  return /* @__PURE__ */ jsxs(
    Wrapper,
    {
      ...href ? { href } : {},
      className: "group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-accent/40 hover:bg-card/60",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-accent transition group-hover:bg-brand group-hover:text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 truncate font-medium", children: value })
        ] })
      ]
    }
  );
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea
}) {
  const cls = "w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-accent focus:bg-white/10";
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxs("span", { className: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "ml-0.5 text-accent", children: "*" })
    ] }),
    textarea ? /* @__PURE__ */ jsx("textarea", { value, onChange, required, rows: 5, className: cls, maxLength: 2e3 }) : /* @__PURE__ */ jsx("input", { value, onChange, type, required, className: cls, maxLength: 200 })
  ] });
}
const navLinks = [
  { href: "#services", key: "nav.services" },
  { href: "#how", key: "nav.how" },
  { href: "#examples", key: "nav.examples" },
  { href: "#about", key: "nav.about" },
  { href: "#tech", key: "nav.tech" },
  { href: "#contact", key: "nav.contact" }
];
function Footer() {
  const { t } = useI18n();
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-border bg-surface/40 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-display text-base font-bold text-primary-foreground", children: "M" }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-semibold tracking-tight", children: "Mordata" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground", children: t("footer.tagline") }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-2", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            "aria-label": "LinkedIn",
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted-foreground transition hover:border-accent/40 hover:text-accent",
            children: /* @__PURE__ */ jsx(Linkedin, { size: 16 })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("footer.nav") }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "text-sm text-foreground/80 transition hover:text-accent", children: t(l.key) }) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("footer.contact") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "mailto:info@mor-data.com", className: "flex items-center gap-2 text-foreground/80 hover:text-accent", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14 }),
            " info@mor-data.com"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "tel:+37122320007", className: "flex items-center gap-2 text-foreground/80 hover:text-accent", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14 }),
            " +371 22320007"
          ] }) }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-foreground/80", children: [
            /* @__PURE__ */ jsx(Linkedin, { size: 14 }),
            " Mordata Solutions"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        year,
        " Mordata. ",
        t("footer.rights")
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-mono uppercase tracking-wider", children: "info@mor-data.com" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Problems, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(Examples, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Technologies, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
export {
  Index as component
};
