"use client";

import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";


import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FaqSection } from "@/components/site/faq-section";
import { DevHero } from "@/components/desarrollo/dev-hero";
import { PricingCard } from "@/components/site/pricing-card";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { PLAN_CATEGORIES_ENGLISH, PLAN_CATEGORIES_SPANISH } from "@/data/main";


export default function DesarrolloPage() {
  const t = useTranslations("developmentPage");
  const locale = useLocale()
  const PLAN_CATEGORIES = locale == "es" ? PLAN_CATEGORIES_SPANISH : PLAN_CATEGORIES_ENGLISH;


  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#050816]">
        <DevHero />

        {/* PLANS */}
        {PLAN_CATEGORIES.map((category, idx) => (
          <section
            key={category.id}
            id={category.id}
            className={`relative scroll-mt-32 py-24 lg:py-32 ${idx % 2 === 0
                ? "bg-[#050816]"
                : "bg-gradient-to-b from-[#0a1022] to-[#050816]"
              }`}
          >
            {/* ambient glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className={`absolute ${idx % 2 === 0 ? "-left-32" : "-right-32"
                  } top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]`}
              />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              {/* heading */}
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5 text-[#ed3b80]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    {t("plans.badge")}
                  </span>
                </div>

                <h2 className="mt-7 font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {category.title}
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-400 sm:text-base">
                  {t("plans.description")}
                </p>
              </div>

              {/* cards */}
              <div className="mt-20 grid items-start gap-8 md:grid-cols-3 xl:grid-cols-3">
                {category.plans.map((plan, i) => (
                  <Reveal key={plan.name} delay={i * 100}>
                    <div className="group relative">
                      {/* glow */}
                      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b from-[#ed3b80]/30 via-transparent to-cyan-400/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        <PricingCard plan={plan} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* SPECIALIZED ATTENTION */}
        <section className="relative py-24 lg:py-32">
          {/* background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(237,59,128,0.14),transparent_40%)]" />
          <div className="absolute inset-0 bg-[#050816]" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 shadow-[0_30px_120px_-40px_rgba(237,59,128,0.35)] backdrop-blur-2xl sm:p-14 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ed3b80]/30 bg-[#ed3b80]/10 text-[#ed3b80] shadow-lg shadow-[#ed3b80]/20">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <h2 className="mt-8 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {t("specialized.title.line1")}{" "}
                  <span className="text-[#ed3b80]">
                    {t("specialized.title.highlight")}
                  </span>
                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-slate-400 sm:text-base">
                  {t("specialized.description1")}
                </p>

                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-slate-500 sm:text-base">
                  {t("specialized.description2")}
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/cotizar">
                    <Button
                      size="lg"
                      className="group h-14 rounded-2xl bg-[#ed3b80] px-8 text-sm font-bold text-white shadow-[0_20px_45px_-15px_rgba(237,59,128,0.55)] transition-all duration-300 hover:bg-[#ff4d97]"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {t("specialized.buyPlanButton")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 rounded-2xl border-white/10 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
                    >
                      {t("specialized.contactAdvisorButton")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      <Footer />
    </>
  );
}