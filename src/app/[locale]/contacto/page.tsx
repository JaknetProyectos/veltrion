"use client";

import type { Metadata } from "next";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FaqSection } from "@/components/site/faq-section";
import { ContactForm } from "@/components/contacto/contact-form";
import { Reveal } from "@/components/site/reveal";
import { useLocale, useTranslations } from "next-intl";
import { CONTACT_SPANISH } from "@/data/contact";

export default function ContactoPage() {
  const t = useTranslations("contactPage");
  const locale = useLocale()
  const CONTACT = locale == "es" ? CONTACT_SPANISH : CONTACT_SPANISH;


  const INFO = [
    {
      icon: Phone,
      title: t("info.phone.title"),
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
      description: t("info.phone.description"),
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      description: t("info.email.description"),
    },
    {
      icon: MapPin,
      title: t("info.location.title"),
      value: CONTACT.address,
      href: undefined,
      description: t("info.location.description"),
    },
  ];

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#050816]">
        {/* HERO */}
        <section className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-52">
          {/* background */}
          <div className="absolute inset-0 bg-[#050816]" />

          <div className="pointer-events-none absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />

          {/* grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* LEFT SIDE */}
              <div>
                <h1 className="animate-fade-up mt-8 font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  {t("hero.title.line1")}
                  <span className="block bg-gradient-to-r from-[#ed3b80] via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                    {t("hero.title.highlight")}
                  </span>
                </h1>

                <p
                  className="animate-fade-up mt-8 max-w-xl text-[17px] leading-9 text-slate-400"
                  style={{ animationDelay: "120ms" }}
                >
                  {t("hero.description")}
                </p>
              </div>

              {/* FORM */}
              <div className="relative">
                <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-b from-[#ed3b80]/30 via-transparent to-cyan-400/20 blur-xl" />

                <Reveal className="relative">
                  <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_120px_-40px_rgba(237,59,128,0.35)] backdrop-blur-2xl sm:p-6 lg:p-8">
                    <ContactForm />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1022] to-[#050816]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                {t("contactSection.title")}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-400 sm:text-base">
                {t("contactSection.description")}
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {INFO.map((item, i) => {
                const Inner = (
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ed3b80]/30 hover:bg-white/[0.06]">
                    {/* glow */}
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#ed3b80]/10 blur-3xl transition-all duration-300 group-hover:bg-[#ed3b80]/20" />

                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ed3b80]/10 text-[#ed3b80] shadow-lg shadow-[#ed3b80]/10">
                        <item.icon className="h-7 w-7" />
                      </div>

                      <div className="mt-8">
                        <h3 className="text-2xl font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-base font-medium leading-7 text-slate-200">
                          {item.value}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-500">
                          {item.description}
                        </p>

                        {item.href && (
                          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ed3b80]">
                            {t("contactSection.contactButton")}
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <Reveal key={item.title} delay={i * 100}>
                    {item.href ? (
                      <a href={item.href} className="block h-full">
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      <Footer />
    </>
  );
}