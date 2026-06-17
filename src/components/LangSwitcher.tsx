"use client";

import { Languages } from "lucide-react";

import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Cambiar idioma"
      className="
        fixed bottom-6 right-6 z-40
        group
        overflow-hidden
        border border-[#ec397e]
        bg-black
        transition-all duration-300
        hover:scale-[1.04]
        hover:shadow-[0_0_30px_rgba(236,57,126,0.28)]
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      <div className="flex items-center">
        {/* Current */}
        <div
          className={`
            flex items-center gap-2 px-4 py-3
            transition-all duration-300
            ${
              locale === "es"
                ? "bg-[#ec397e] text-white"
                : "bg-white text-black"
            }
          `}
        >
          <Languages className="h-4 w-4" />

          <span className="text-xs font-black tracking-[0.18em] uppercase">
            ES
          </span>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-[#ec397e]/30" />

        {/* Next */}
        <div
          className={`
            flex items-center px-4 py-3
            transition-all duration-300
            ${
              locale === "en"
                ? "bg-[#ec397e] text-white"
                : "bg-white text-black"
            }
          `}
        >
          <span className="text-xs font-black tracking-[0.18em] uppercase">
            EN
          </span>
        </div>
      </div>

      {isPending && (
        <div className="absolute inset-0 bg-[#ec397e]/10 animate-pulse" />
      )}
    </button>
  );
}