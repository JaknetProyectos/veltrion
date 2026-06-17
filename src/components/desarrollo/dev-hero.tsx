"use client";

import { useTranslations } from "next-intl";
import {
  Headset,
  Lock,
  ShieldCheck,
} from "lucide-react";

const BADGES = [
  {
    icon: Lock,
    key: "securePayment",
  },
  {
    icon: ShieldCheck,
    key: "guarantee",
  },
  {
    icon: Headset,
    key: "support",
  },
];

export function DevHero() {
  const t = useTranslations("devHero");

  return (
    <section className="relative overflow-hidden bg-[#050816] pt-40 pb-24 lg:pt-52 lg:pb-32">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
        <div className="absolute right-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      {/* grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* heading */}
          <h1 className="animate-fade-up mt-8 font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            {t("title")}
            <span className="block bg-gradient-to-r from-[#ed3b80] via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              {t("highlight")}
            </span>
          </h1>

          {/* description */}
          <p
            className="animate-fade-up mx-auto mt-8 max-w-3xl text-[17px] leading-9 text-slate-400 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            {t.rich("description", {
              strong: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
            })}
          </p>

          {/* badges */}
          <div
            className="animate-fade-up mt-20 grid gap-5 md:grid-cols-3"
            style={{ animationDelay: "260ms" }}
          >
            {BADGES.map((badge) => (
              <div
                key={badge.key}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ed3b80]/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ed3b80]/10 text-[#ed3b80] shadow-lg shadow-[#ed3b80]/10">
                  <badge.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-base font-bold text-white">
                  {t(`badges.${badge.key}.label`)}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {t(`badges.${badge.key}.description`)}
                </p>
              </div>
            ))}
          </div>

          {/* bottom note */}
          <div className="mx-auto mt-20 max-w-4xl border-t border-white/10 pt-8">
            <p className="text-[15px] leading-8 text-slate-500 sm:text-base">
              {t("bottomNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}