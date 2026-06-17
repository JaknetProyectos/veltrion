import { Link } from "@/i18n/routing";
import { MessagesSquare } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { FAQS_ENGLISH, FAQS_SPANISH } from "@/data/faqs";

export function FaqSection() {
  const t = useTranslations("faqSection");
  const locale = useLocale()
  const FAQS = locale == "es" ? FAQS_SPANISH: FAQS_ENGLISH;

  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-[#ee3b80]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
          <span className="text-[#ee3b80]">
            {t("title.highlight")}
          </span>{" "}
          {t("title.text")}
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/65">
          {t("description")}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Doubts card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 shadow-[0_24px_60px_-34px_rgba(0,0,0,0.7)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ee3b80]/10 text-[#ee3b80]">
                <MessagesSquare className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-black text-white">
                {t("card.title")}
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                {t("card.description")}
              </p>

              <Button
                asChild
                className="mt-7 h-12 rounded-full bg-[#ee3b80] px-7 text-sm font-semibold text-white hover:bg-[#d92f70]"
              >
                <Link href="/contacto">
                  {t("card.contactButton")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Accordion */}
          <Accordion
            type="single"
            collapsible
            defaultValue={FAQS[0].id}
            className="rounded-[2rem] border border-white/10 bg-black/70 px-6 backdrop-blur-sm sm:px-8"
          >
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-semibold text-white hover:text-[#ee3b80]">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-white/65">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}