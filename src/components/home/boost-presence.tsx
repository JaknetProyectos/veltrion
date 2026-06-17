import { Check } from "lucide-react";

import { useTranslations } from "next-intl";

import { ASSETS } from "@/data/assets";
import { Reveal } from "@/components/site/reveal";

export function BoostPresence() {
  const t = useTranslations("boostPresence");

  const CARDS = [
    t("cards.customDevelopment"),
    t("cards.continuousOptimization"),
  ];

  return (
    <section className="bg-gradient-to-b from-[#ee3b80] to-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#ee3b80]/30 blur-3xl" />

              <img
                src={ASSETS.imgPerson}
                alt={t("personImageAlt")}
                className="aspect-[5/4] w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_30px_80px_-35px_rgba(0,0,0,0.7)]"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal className="order-1 lg:order-2" delay={120}>
            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.9rem]">
              {t("title.line1")}{" "}
              <span className="text-[#ff9bc2]">
                {t("title.highlight1")}
              </span>{" "}
              {t("title.line2")}{" "}
              <span className="text-[#ff9bc2]">
                {t("title.highlight2")}
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/75">
              {t.rich("description", {
                strong: (chunks) => (
                  <span className="font-semibold text-white">{chunks}</span>
                ),
              })}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CARDS.map((card) => (
                <div
                  key={card}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm transition-all hover:border-[#ee3b80]/60 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ee3b80]/15 text-[#ff8fbb]">
                    <Check className="h-5 w-5" />
                  </span>

                  <span className="text-[15px] font-bold text-white">
                    {card}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Wide photo */}
        <Reveal className="mt-12 lg:mt-16" delay={80}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#ee3b80]/20 blur-3xl" />

            <img
              src={ASSETS.imgTeam}
              alt={t("teamImageAlt")}
              className="h-[280px] w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_30px_80px_-35px_rgba(0,0,0,0.75)] sm:h-[360px] lg:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}