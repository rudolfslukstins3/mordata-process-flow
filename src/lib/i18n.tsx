import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "lv" | "en";

type Dict = Record<string, string>;

const lv: Dict = {
  "nav.services": "Pakalpojumi",
  "nav.how": "Kā strādājam",
  "nav.examples": "Piemēri",
  "nav.about": "Par mums",
  "nav.tech": "Tehnoloģijas",
  "nav.contact": "Kontakti",
  "nav.cta": "Pieteikt konsultāciju",

  "hero.badge": "Biznesa procesu automatizācija",
  "hero.title": "Automatizējam Jūsu uzņēmuma ikdienas procesus",
  "hero.subtitle":
    "Mordata palīdz uzņēmumiem automatizēt dokumentu apriti, e-pastus, WhatsApp komunikāciju, atskaites un citus ikdienas procesus, samazinot manuālu darbu un ietaupot laiku.",
  "hero.cta1": "Pieteikt konsultāciju",
  "hero.cta2": "Apskatīt pakalpojumus",
  "hero.stat1": "Stundas ietaupītas nedēļā",
  "hero.stat2": "Mazāk manuālo kļūdu",
  "hero.stat3": "Ātrāka dokumentu apstrāde",

  "problems.eyebrow": "Problēmas, ko risinām",
  "problems.title": "Vai Jūsu komanda tērē laiku rutīnas darbiem?",
  "problems.subtitle":
    "Lielākā daļa uzņēmumu joprojām veic ikdienas darbus manuāli — tas ir lēni, dārgi un rada kļūdas.",
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
  "services.subtitle":
    "Mēs analizējam, projektējam un ieviešam automatizāciju, kas reāli strādā Jūsu uzņēmuma vidē.",
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
  "ex.subtitle":
    "Šie ir tikai daži piemēri no daudzajiem procesiem, ko varam padarīt automātiskus.",
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
  "about.p1":
    "Mordata palīdz maziem un vidējiem uzņēmumiem optimizēt darba plūsmas, automatizēt atkārtojošus procesus un uzlabot ikdienas darba efektivitāti.",
  "about.p2":
    "Mēs sakārtojam datus, uzlabojam atskaites un savienojam sistēmas, lai Jūsu komanda var koncentrēties uz svarīgo — uzņēmuma izaugsmi.",
  "about.v1.t": "Praktiska pieeja",
  "about.v1.d": "Risinājumi, kas strādā reālajā darba vidē.",
  "about.v2.t": "Biznesa vērtība",
  "about.v2.d": "Katrs projekts mērīts laika un izmaksu ietaupījumā.",
  "about.v3.t": "Ilgtermiņa partnerība",
  "about.v3.d": "Uzturam un attīstām risinājumus kopā ar Jums.",

  "tech.eyebrow": "Tehnoloģijas",
  "tech.title": "Strādājam ar uzticamām enterprise tehnoloģijām",
  "tech.subtitle":
    "Izvēlamies tehnoloģijas, kas vislabāk atbilst Jūsu uzņēmuma vajadzībām un sistēmām.",

  "contact.eyebrow": "Kontakti",
  "contact.title": "Sazinieties ar mums",
  "contact.subtitle":
    "Parunāsim par to, kā automatizācija var uzlabot Jūsu uzņēmuma ikdienas darbu.",
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

  "footer.tagline":
    "Mordata palīdz uzņēmumiem automatizēt ikdienas procesus un samazināt manuālu darbu.",
  "footer.nav": "Navigācija",
  "footer.contact": "Kontakti",
  "footer.rights": "Visas tiesības aizsargātas.",
};

const en: Dict = {
  "nav.services": "Services",
  "nav.how": "How we work",
  "nav.examples": "Examples",
  "nav.about": "About",
  "nav.tech": "Technologies",
  "nav.contact": "Contact",
  "nav.cta": "Book a consultation",

  "hero.badge": "Business process automation",
  "hero.title": "We automate your company's everyday processes",
  "hero.subtitle":
    "Mordata helps businesses automate document flows, emails, WhatsApp communication, reports and other daily processes — reducing manual work and saving time.",
  "hero.cta1": "Book a consultation",
  "hero.cta2": "Explore services",
  "hero.stat1": "Hours saved per week",
  "hero.stat2": "Fewer manual errors",
  "hero.stat3": "Faster document processing",

  "problems.eyebrow": "Problems we solve",
  "problems.title": "Is your team wasting time on routine work?",
  "problems.subtitle":
    "Most companies still handle daily tasks manually — it's slow, costly and prone to errors.",
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
  "services.subtitle":
    "We analyze, design and implement automation that truly works in your environment.",
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
  "ex.subtitle":
    "These are just a few examples among many processes we can fully automate.",
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
  "about.p1":
    "Mordata helps small and medium businesses optimize workflows, automate repetitive work and improve day-to-day operational efficiency.",
  "about.p2":
    "We organize data, improve reporting and connect systems so your team can focus on what matters — growing the business.",
  "about.v1.t": "Practical approach",
  "about.v1.d": "Solutions that work in real-world operations.",
  "about.v2.t": "Business value",
  "about.v2.d": "Every project measured in time and cost savings.",
  "about.v3.t": "Long-term partnership",
  "about.v3.d": "We maintain and evolve solutions alongside you.",

  "tech.eyebrow": "Technologies",
  "tech.title": "We work with reliable enterprise technologies",
  "tech.subtitle":
    "We choose the technologies that best fit your company's needs and systems.",

  "contact.eyebrow": "Contact",
  "contact.title": "Get in touch",
  "contact.subtitle":
    "Let's talk about how automation can improve your company's everyday work.",
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

  "footer.tagline":
    "Mordata helps businesses automate everyday processes and reduce manual work.",
  "footer.nav": "Navigation",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
};

const dicts: Record<Lang, Dict> = { lv, en };

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lv");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("mordata-lang") as Lang | null;
    if (saved === "lv" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mordata-lang", l);
      document.documentElement.lang = l;
    }
  };

  const t = (key: string) => dicts[lang][key] ?? dicts.lv[key] ?? key;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
