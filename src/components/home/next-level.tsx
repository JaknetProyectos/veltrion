"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useTranslations } from "next-intl";

export function NextLevel() {
  const t = useTranslations("nextLevel");

  const ITEMS = [
    {
      title: t("items.0.title"),
      body: t("items.0.body"),
    },
    {
      title: t("items.1.title"),
      body: t("items.1.body"),
    },
    {
      title: t("items.2.title"),
      body: t("items.2.body"),
    },
  ];

  return (
    <section className="bg-[#ee3b80] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Left content */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.9rem]">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
            {t.rich("description", {
              strong: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
            })}
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {ITEMS.map((item, i) => (
            <Accordion.Item
              key={item.title}
              value={`item-${i}`}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-lg font-bold text-white">
                    {item.title}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-data-[state=open]:bg-white group-data-[state=open]:text-[#ee3b80]">
                    <ArrowRight className="h-5 w-5 group-data-[state=open]:hidden" />
                    <ArrowUpRight className="hidden h-5 w-5 group-data-[state=open]:block" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="px-6 pb-6 pr-14 text-[15px] leading-relaxed text-white/75">
                  {item.body}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}