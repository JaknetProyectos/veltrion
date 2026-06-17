import { Link } from "@/i18n/routing";
import Image from "next/image";

import { Mail, MapPin, Phone } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { CONTACT_ENGLISH, CONTACT_SPANISH } from "@/data/contact";
import { FOOTER_LEGAL_ENGLISH, FOOTER_LEGAL_SPANISH, FOOTER_SERVICES_ENGLISH, FOOTER_SERVICES_SPANISH } from "@/data/footer";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale()
  const CONTACT = locale == "es" ? CONTACT_SPANISH : CONTACT_ENGLISH;
  const FOOTER_LEGAL = locale == "es" ? FOOTER_LEGAL_SPANISH : FOOTER_LEGAL_ENGLISH;
  const FOOTER_SERVICES = locale == "es" ?  FOOTER_SERVICES_SPANISH : FOOTER_SERVICES_ENGLISH;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[#ee3b80]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={t("logoAlt")}
                width={48}
                height={48}
              />

              <Image
                src="/title.png"
                alt={t("titleAlt")}
                width={170}
                height={36}
              />
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t("description")}
            </p>

            <div className="mt-7">
              <Image
                src="/cards.png"
                alt={t("paymentMethodsAlt")}
                width={150}
                height={32}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white">
              {t("services")}
            </h4>

            <ul className="mt-5 space-y-3.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#ee3b80]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white">
              {t("contact")}
            </h4>

            <ul className="mt-5 space-y-5 text-sm text-white/60">
              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ee3b80]">
                  <MapPin className="h-4 w-4" />
                </span>

                <span className="leading-relaxed">
                  {CONTACT.address}
                </span>
              </li>

              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ee3b80]">
                  <Mail className="h-4 w-4" />
                </span>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>

              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ee3b80]">
                  <Phone className="h-4 w-4" />
                </span>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {FOOTER_LEGAL.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-[#ee3b80]"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <p>
            © 2026{" "}
            <span className="font-semibold text-white/70">
              Veltrion
            </span>
            . {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}