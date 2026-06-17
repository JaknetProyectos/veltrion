"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { CheckCircle2 } from "lucide-react";

import { useTranslations } from "next-intl";

import { useContact } from "@/hooks/useContact";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const t = useTranslations("contactForm");

  const [accepted, setAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  const { sendContactForm, isLoading } = useContact();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!accepted || isLoading) return;

    const formData = new FormData(e.currentTarget);

    const data = {
      nombre: formData.get("nombre") as string,
      apellido: formData.get("apellido") as string,
      email: formData.get("email") as string,
      asunto: formData.get("asunto") as string,
      mensaje: formData.get("mensaje") as string,
    };

    const result = await sendContactForm(data);

    if (result.success) {
      setSent(true);
      e.currentTarget.reset();
      setAccepted(false);
    } else {
      console.error(result.error);
    }
  }

  return (
    <div className="rounded-[1.75rem] border border-border/70 bg-white p-7 shadow-[0_40px_90px_-50px_hsl(var(--brand-blue)/0.7)] sm:p-9">
      <h2 className="font-display text-2xl font-bold text-navy">
        {t("title")}
      </h2>

      {sent ? (
        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-brand-section/60 px-6 py-12 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </span>

          <h3 className="font-display text-xl font-bold text-navy">
            {t("success.title")}
          </h3>

          <p className="max-w-sm text-sm text-muted-foreground">
            {t("success.description")}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="nombre"
              placeholder={t("fields.name")}
              required
              aria-label={t("fields.name")}
            />

            <Input
              name="apellido"
              placeholder={t("fields.lastname")}
              required
              aria-label={t("fields.lastname")}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="email"
              type="email"
              placeholder={t("fields.email")}
              required
              aria-label={t("fields.email")}
            />

            <Input
              name="asunto"
              placeholder={t("fields.subject")}
              required
              aria-label={t("fields.subject")}
            />
          </div>

          <Textarea
            name="mensaje"
            placeholder={t("fields.message")}
            required
            aria-label={t("fields.message")}
          />

          <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex max-w-md cursor-pointer items-start gap-3 text-sm text-muted-foreground">
              <Checkbox
                checked={accepted}
                onCheckedChange={(v) => setAccepted(Boolean(v))}
                className="mt-0.5"
              />

              <span>
                {t("terms.prefix")}{" "}
                <Link
                  href="/terminos-y-condiciones"
                  className="font-medium text-primary hover:underline"
                >
                  {t("terms.link")}
                </Link>{" "}
                {t("terms.suffix")}
              </span>
            </label>

            <Button
              type="submit"
              variant="navy"
              disabled={!accepted || isLoading}
              className="shrink-0 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? t("buttons.sending") : t("buttons.submit")}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}