import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  const t = useTranslations("ctaSection");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-[#ee3b80] py-24 lg:py-32">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ee3b80]/25 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
          {t("title.line1")}
          <br />
          {t("title.line2")}{" "}
          <span className="text-[#ffd2e3]">
            {t("title.highlight")}
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
          {t("description")}
        </p>

        <p className="mt-3 text-[15px] text-white/70 sm:text-base">
          {t("bottomText")}{" "}
          <span className="font-semibold text-white">
            Veltrion
          </span>
          .
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white"
          >
            <Link href="/desarrollo">
              {t("startButton")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}