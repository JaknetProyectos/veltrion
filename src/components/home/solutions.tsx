import { Link } from "@/i18n/routing";
import { BarChart3, Bug, Smartphone } from "lucide-react";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function Solutions() {
  const t = useTranslations("solutions");

  const SOLUTIONS = [
    {
      icon: Smartphone,
      title: t("items.customDevelopment.title"),
      desc: t("items.customDevelopment.description"),
      offset: false,
    },
    {
      icon: Bug,
      title: t("items.maintenance.title"),
      desc: t("items.maintenance.description"),
      offset: true,
    },
    {
      icon: BarChart3,
      title: t("items.optimization.title"),
      desc: t("items.optimization.description"),
      offset: false,
    },
  ];

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Text column */}
        <div className="lg:sticky lg:top-28 lg:flex lg:h-fit lg:flex-col lg:self-start">
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.9rem]">
            {t("title.line1")}{" "}
            <span className="text-[#ee3b80]">
              {t("title.highlight")}
            </span>{" "}
            {t("title.line2")}
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            {t.rich("description", {
              strong: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
            })}
          </p>

          <div className="mt-10 hidden lg:block">
            <p className="max-w-sm text-[15px] leading-relaxed text-white/55">
              {t("tagline")}
            </p>

            <Button
              asChild
              className="mt-6 h-12 rounded-full bg-[#ee3b80] px-7 text-sm font-semibold text-white hover:bg-[#d92f70]"
            >
              <Link href="/desarrollo">
                {t("developmentButton")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {SOLUTIONS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div
                className={`group flex items-start gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#ee3b80]/40 hover:bg-white/[0.05] ${item.offset ? "lg:ml-12" : "lg:mr-12"
                  }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ee3b80]/10 text-[#ee3b80] transition-all group-hover:bg-[#ee3b80] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </span>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Mobile tagline + button */}
          <div className="pt-2 lg:hidden">
            <p className="text-[15px] leading-relaxed text-white/55">
              {t("tagline")}
            </p>

            <Button
              asChild
              className="mt-6 h-12 rounded-full bg-[#ee3b80] px-7 text-sm font-semibold text-white hover:bg-[#d92f70]"
            >
              <Link href="/desarrollo">
                {t("developmentButton")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}