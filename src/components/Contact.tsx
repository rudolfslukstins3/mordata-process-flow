import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Problems";
import { Mail, Phone, Linkedin, Check, Send } from "lucide-react";

const EMAIL = "info@mor-data.com";
const PHONE = "+371 22320007";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Mordata — Pieteikums konsultācijai: ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Vārds: ${form.name}\nUzņēmums: ${form.company}\nE-pasts: ${form.email}\nTelefons: ${form.phone}\n\nZiņojums:\n${form.message}`
    );
    // Open user's mail client to send to info@mor-data.com
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <ContactCard
              Icon={Mail}
              label={t("contact.email")}
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactCard
              Icon={Phone}
              label={t("contact.phone")}
              value={PHONE}
              href={`tel:${PHONE.replace(/\s/g, "")}`}
            />
            <ContactCard
              Icon={Linkedin}
              label={t("contact.linkedin")}
              value="Mordata Solutions"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur shadow-elegant">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            {sent ? (
              <div className="relative flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={28} />
                </div>
                <p className="max-w-sm text-lg font-medium text-foreground">{t("form.success")}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="relative grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("form.name")} value={form.name} onChange={update("name")} required />
                  <Field label={t("form.company")} value={form.company} onChange={update("company")} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("form.email")} type="email" value={form.email} onChange={update("email")} required />
                  <Field label={t("form.phone")} value={form.phone} onChange={update("phone")} />
                </div>
                <Field
                  label={t("form.message")}
                  value={form.message}
                  onChange={update("message")}
                  textarea
                  required
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-95 disabled:opacity-60"
                >
                  {sending ? t("form.sending") : t("form.submit")}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  Icon, label, value, href,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-accent/40 hover:bg-card/60"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-accent transition group-hover:bg-brand group-hover:text-primary-foreground">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 truncate font-medium">{value}</div>
      </div>
    </Wrapper>
  );
}

function Field({
  label, value, onChange, type = "text", required, textarea,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-accent focus:bg-white/10";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea value={value} onChange={onChange} required={required} rows={5} className={cls} maxLength={2000} />
      ) : (
        <input value={value} onChange={onChange} type={type} required={required} className={cls} maxLength={200} />
      )}
    </label>
  );
}
