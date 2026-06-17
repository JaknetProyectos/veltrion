"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  AlertCircle,
  Loader2,
  DollarSign,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

export default function CustomProductPage() {
  const t = useTranslations("customPlan");

  const router = useRouter();

  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");

  const [totalPrice, setTotalPrice] = useState<number | "">("");

  const [isAdding, setIsAdding] = useState(false);

  const [error, setError] = useState("");

  const subtotal = Number(totalPrice) || 0;
  const taxes = subtotal * 0.16;
  const total = subtotal + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const finalPrice = Number(totalPrice) || 0;

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();

    addItem(
      {
        icon: "/logo.png",
        name: `Custom - ${folioUpper}`,
        price: finalPrice,
        slug: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
      },
      1
    );

    setTimeout(() => {
      setIsAdding(false);

      router.push("/carrito");
    }, 1000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0f12] text-slate-100 selection:bg-[#ed3b80] selection:text-[#0b0f12]">
      <Header />

      <main className="relative pb-28 pt-[120px]">
        {/* Background */}
        <div className="pointer-events-none absolute right-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-[#005e50]/15 blur-[160px]" />

        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[560px] w-[560px] rounded-full bg-[#ed3b80]/5 blur-[150px]" />

        {/* HERO */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-10">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[#005e50]/40 bg-[#005e50]/15 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#ed3b80] backdrop-blur-xl">
              {t("hero.badge")}
            </span>

            <h1 className="mt-8 max-w-3xl font-poppins text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>

            <div className="mt-2">
              <h2 className="font-poppins text-3xl font-black tracking-tight text-white">
                {t("authorized.title")}
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-slate-400">
                {t("authorized.description")}
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="relative z-10 mx-20 max-w-7xl px-6">
          <div className="flex w-full overflow-hidden rounded-[3rem] border border-slate-800/80 bg-slate-900/30 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl">

            {/* RIGHT PANEL */}
            <div className="p-8 w-full sm:p-12 lg:p-16 xl:p-20">
              <div className="w-full">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#005e50]">
                    {t("form.badge")}
                  </p>

                  <h2 className="mt-5 font-poppins text-3xl font-black tracking-tight text-white md:text-4xl">
                    {t("form.title")}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-14 space-y-8">
                  {/* ERROR */}
                  {error && (
                    <div className="flex items-start gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400 animate-shake">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                      <span>{error}</span>
                    </div>
                  )}

                  {/* QUOTE */}
                  <div className="space-y-3">
                    <label
                      htmlFor="quoteNumber"
                      className="block text-[11px] font-black uppercase tracking-[0.25em] text-slate-500"
                    >
                      {t("form.quoteLabel")}
                    </label>

                    <input
                      id="quoteNumber"
                      type="text"
                      required
                      placeholder={t("form.quotePlaceholder")}
                      value={quoteNumber}
                      onChange={(e) => setQuoteNumber(e.target.value)}
                      className="h-16 w-full rounded-[1.4rem] border border-slate-800 bg-[#0b0f12]/70 px-6 text-sm font-mono uppercase tracking-[0.25em] text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                    />
                  </div>

                  {/* AMOUNT */}
                  <div className="space-y-3">
                    <label
                      htmlFor="totalPrice"
                      className="block text-[11px] font-black uppercase tracking-[0.25em] text-slate-500"
                    >
                      {t("form.amountLabel")}
                    </label>

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6 text-[#005e50]">
                        <DollarSign className="h-5 w-5" />
                      </div>

                      <input
                        id="totalPrice"
                        type="number"
                        required
                        step="0.01"
                        min="0.01"
                        placeholder={t("form.amountPlaceholder")}
                        value={totalPrice}
                        onChange={(e) =>
                          setTotalPrice(
                            e.target.value !== ""
                              ? Number(e.target.value)
                              : ""
                          )
                        }
                        className="h-16 w-full rounded-[1.4rem] border border-slate-800 bg-[#0b0f12]/70 pl-14 pr-20 text-base font-bold text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                      />

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
                        <span className="text-[11px] font-black tracking-[0.25em] text-slate-500">
                          MXN
                        </span>
                      </div>
                    </div>

                    <p className="pl-1 text-[11px] leading-relaxed text-slate-500">
                      {t("form.taxNote")}
                    </p>
                  </div>

                  {/* TOTAL CARD */}
                  <div className="rounded-[2rem] border border-slate-800 bg-[#0b0f12]/60 p-7 backdrop-blur-xl">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>{t("tax.subtotal")}</span>

                        <span className="font-mono font-bold text-white">
                          ${formatPrice(subtotal)} MXN
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>{t("tax.taxes")}</span>

                        <span className="font-mono font-bold text-white">
                          ${formatPrice(taxes)} MXN
                        </span>
                      </div>

                      <div className="border-t border-slate-800 pt-5">
                        <div className="flex items-end justify-between">
                          <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            {t("tax.total")}
                          </span>

                          <span className="font-poppins text-3xl font-black tracking-tight text-white">
                            ${formatPrice(total)} MXN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isAdding}
                      className={`group flex h-16 w-full items-center justify-center gap-3 rounded-[1.4rem] text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${isAdding
                          ? "cursor-not-allowed bg-slate-800 text-slate-500"
                          : "bg-[#ed3b80] text-[#0b0f12] hover:-translate-y-1 hover:bg-[#d684a4] hover:shadow-[0_20px_50px_-20px_rgba(205,239,36,0.55)]"
                        }`}
                    >
                      {isAdding ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />

                          <span>{t("buttons.adding")}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("buttons.addToCart")}</span>

                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}