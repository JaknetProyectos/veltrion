"use client";

import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Plan } from "@/data/main";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

export function PricingCard({ plan }: { plan: Plan }) {
  const t = useTranslations("pricingCard");

  const { addItem } = useCart();

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden border transition-all duration-300",
        "bg-black border-white/10",
        "hover:-translate-y-1 hover:border-[#ec397e]/40",
        "hover:shadow-[0_20px_60px_rgba(236,57,126,0.18)]",
        plan.popular &&
          "border-[#ec397e] shadow-[0_24px_70px_rgba(236,57,126,0.22)]"
      )}
    >
      {/* TOP BAR */}
      <div className="h-1 w-full bg-[#ec397e]" />

      {/* POPULAR */}
      {plan.popular && (
        <div className="absolute right-0 top-0 bg-[#ec397e] px-4 py-2">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
            {t("popular")}
          </span>
        </div>
      )}

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-7">
        {/* HEADER */}
        <div className="border-b border-white/10 pb-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ec397e]">
            Veltrion
          </p>

          <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
            {plan.name}
          </h3>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-black leading-none text-white">
              ${formatPrice(plan.price)}
            </span>
          </div>

          <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
            {plan.unit}
          </p>
        </div>

        {/* FEATURES */}
        <ul className="flex-1 py-6">
          {plan.features.map((feature, i) => (
            <li
              key={feature}
              className={cn(
                "flex items-start border-white/10 py-4 text-sm leading-relaxed text-zinc-300",
                i !== 0 && "border-t"
              )}
            >
              <span className="mr-3 mt-[7px] h-[6px] w-[6px] shrink-0 bg-[#ec397e]" />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          onClick={() => {
            addItem(
              {
                icon: "/logo.png",
                name: plan.name,
                price: plan.price,
                slug: plan.name,
              },
              1
            );
          }}
          size="lg"
          className="
            mt-2
            h-14
            w-full
            border border-[#ec397e]
            bg-[#ec397e]
            text-sm
            font-black
            uppercase
            tracking-[0.16em]
            text-white
            transition-all duration-300
            hover:bg-black
            hover:text-[#ec397e]
          "
        >
          <ShoppingCart className="h-4 w-4" />

          {t("buy")}
        </Button>
      </div>
    </div>
  );
}