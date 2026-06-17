import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-black pt-36 pb-28 lg:pt-44 lg:pb-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(238,59,128,0.18),transparent_38%)]" />

      {/* Bottom pink gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#ee3b80] via-[#ee3b80]/40 to-transparent" />

      {/* Decorative blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ee3b80]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <h1 className="mt-7 animate-fade-up text-[2.9rem] font-black leading-[1] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.4rem]">
            {t("title.line1")}
            <br />
            {t("title.line2")}
            <span className="block text-[#ee3b80]">
              {t("title.highlight")}
            </span>
          </h1>

          {/* Description */}
          <p
            className="mx-auto mt-7 max-w-2xl animate-fade-up text-base leading-relaxed text-white/70 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            {t("description")}
          </p>

          {/* Actions */}
          <div
            className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Link href="/contacto">
              <Button className="h-12 rounded-full bg-[#ee3b80] px-7 text-sm font-semibold text-white hover:bg-[#d92f70]">
                {t("contactButton")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}