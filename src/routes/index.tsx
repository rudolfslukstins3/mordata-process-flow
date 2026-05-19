import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Examples } from "@/components/Examples";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mordata — Biznesa procesu automatizācija" },
      {
        name: "description",
        content:
          "Mordata palīdz uzņēmumiem automatizēt dokumentu apriti, e-pastus, WhatsApp komunikāciju, atskaites un ikdienas procesus. Mazāk manuāla darba, vairāk efektivitātes.",
      },
      { property: "og:title", content: "Mordata — Biznesa procesu automatizācija" },
      {
        property: "og:description",
        content:
          "Automatizējam dokumentus, e-pastus, WhatsApp, atskaites un ikdienas procesus uzņēmumiem.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>
          <Hero />
          <Problems />
          <Services />
          <HowItWorks />
          <Examples />
          <About />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
