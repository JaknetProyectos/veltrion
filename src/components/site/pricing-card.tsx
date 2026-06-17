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
        "group relative flex flex-col rounded-[1.75rem] border bg-white p-6 transition-all duration-300",
        plan.popular
          ? "border-primary/25 shadow-[0_28px_70px_-24px_hsl(var(--brand-blue)/0.55)]"
          : "border-border/70 shadow-[0_20px_55px_-32px_rgba(13,30,55,0.45)] hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_28px_65px_-26px_hsl(var(--brand-blue)/0.4)]"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-5 py-1.5 text-xs font-bold text-navy shadow-[0_8px_20px_-6px_rgba(13,30,55,0.3)] ring-1 ring-border/80">
          {t("popular")}
        </span>
      )}

      {/* Price box */}
      <div className="rounded-2xl bg-brand-chip/60 px-5 py-6">
        <h3 className="font-display text-lg font-bold text-navy">
          {plan.name}
        </h3>

        <p className="mt-3 font-display text-[2.6rem] font-extrabold leading-none text-primary">
          $ {formatPrice(plan.price)}
        </p>

        <p className="mt-4 text-sm font-semibold text-primary/75">
          {plan.unit}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-6 flex-1">
        {plan.features.map((feature, i) => (
          <li
            key={feature}
            className={cn(
              "py-3.5 text-[13.5px] leading-relaxed text-muted-foreground",
              i !== 0 && "border-t border-border/60"
            )}
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
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
          variant="navy"
          size="sm"
          className="px-6 py-2.5"
        >
          <ShoppingCart className="h-4 w-4" />
          {t("buy")}
        </Button>
      </div>
    </div>
  );
}