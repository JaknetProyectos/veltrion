import { Link } from "@/i18n/routing";

import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/site/pricing-card";
import { Reveal } from "@/components/site/reveal";
import { HOME_PLANS_ENGLISH, HOME_PLANS_SPANISH } from "@/data/main";

export function Plans() {
  const t = useTranslations("plans");
  const locale = useLocale()
  const HOME_PLANS = locale == "es" ? HOME_PLANS_SPANISH : HOME_PLANS_ENGLISH;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 lg:py-28">
      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#ee3b80]/12 blur-3xl" />

      {/* Border line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ee3b80]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
            {t("title.line1")}{" "}
            <span className="text-[#ee3b80]">
              {t("title.highlight")}
            </span>{" "}
            {t("title.line2")}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            {t.rich("description", {
              strong: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
            })}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full bg-[#ee3b80] px-7 text-sm font-semibold text-white hover:bg-[#d92f70]"
          >
            <Link href="/desarrollo">
              {t("viewAllButton")}
            </Link>
          </Button>
        </div>

        {/* Plans */}
        <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {HOME_PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ee3b80]/40 hover:bg-white/[0.05]">
                <PricingCard plan={plan} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}