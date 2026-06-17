"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { processEtominPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/price";

const VALID_COUPONS = [
  { code: "VELTRION10", discount: 0.1 },
  { code: "VELTRION15", discount: 0.15 },
  { code: "VELTRION20", discount: 0.2 },
];

type Step = 1 | 2 | 3;

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2.25rem] border border-white/10 bg-white/[0.03] shadow-[0_28px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ee3b80]/10 text-[#ee3b80]">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/85">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#ee3b80] focus:ring-2 focus:ring-[#ee3b80]/20 ${
          mono ? "font-mono tracking-[0.22em]" : ""
        } ${inputClassName}`}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [couponError, setCouponError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const discountAmount = appliedCoupon ? total * appliedCoupon.discount : 0;
  const totalWithDiscount = total - discountAmount;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;
  const locale = useLocale()

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    setCouponError("");

    const found = VALID_COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (found) {
      setAppliedCoupon(found);
      setCouponInput("");
      return;
    }

    setCouponError(t("financial.couponInvalid"));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: appliedCoupon
          ? `${t("metadata.couponApplied")}: ${appliedCoupon.code}`
          : t("metadata.standardSale"),
      },
    };

    try {
      const response = await processEtominPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        try {
          await fetch(`/${locale ?? "es"}/api/checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
            }),
          });
        } catch (emailError) {
          console.error("⚠️ Falló el despacho de correos informativos:", emailError);
        }

        clearCart();
        setStep(3);
      } else {
        setErrorMessage(response.error || t("errors.declined"));
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-black text-white selection:bg-[#ee3b80] selection:text-white">
        <Header />
        <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#ee3b80]/15 blur-[140px]" />
          <section className="relative w-full max-w-2xl">
            <CardShell className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ee3b80]/60 to-transparent" />
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-[#ee3b80]/20 bg-[#ee3b80]/10 text-[#ee3b80]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <h1 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                  {t("success.title")}
                </h1>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                  {t("success.description")}
                </p>

                <div className="mt-10 w-full rounded-[2rem] border border-white/10 bg-black/40 p-6 text-left">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-white/55">{t("success.paidAmount")}</span>
                    <span className="text-lg font-black text-[#ee3b80]">
                      {formatPrice(grandTotal, "MXN", true)}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                    <span className="text-white/55">{t("success.transactionStatus")}</span>
                    <span className="rounded-full border border-[#ee3b80]/20 bg-[#ee3b80]/10 px-3 py-1 text-[11px] font-bold text-[#ffb7cf]">
                      {t("success.approved")}
                    </span>
                  </div>
                </div>

                <Link href="/desarrollo" className="mt-8 w-full">
                  <Button className="h-14 w-full rounded-full bg-[#ee3b80] text-sm font-bold text-white hover:bg-[#d92f70]">
                    {t("success.backToCatalog")}
                  </Button>
                </Link>
              </div>
            </CardShell>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-[#ee3b80] selection:text-white">
      <Header />

      {/* Progress header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/45">
            <Link href="/" className="transition hover:text-white">
              {t("breadcrumb.home")}
            </Link>
            <span className="text-white/20">/</span>
            <span className={step === 1 ? "font-bold text-[#ee3b80]" : "text-white/30"}>
              {t("breadcrumb.summary")}
            </span>
            <span className="text-white/20">/</span>
            <span className={step === 2 ? "font-bold text-[#ee3b80]" : "text-white/30"}>
              {t("breadcrumb.shippingPayment")}
            </span>
          </nav>

          <div className="flex items-center gap-4">
            <div
              className={`h-3 w-3 rounded-full transition-colors ${
                step >= 1 ? "bg-[#ee3b80]" : "bg-white/10"
              }`}
            />
            <div
              className={`h-0.5 w-16 rounded-full transition-colors ${
                step >= 2 ? "bg-[#ee3b80]" : "bg-white/10"
              }`}
            />
            <div
              className={`h-3 w-3 rounded-full transition-colors ${
                step >= 2 ? "bg-[#ee3b80]" : "bg-white/10"
              }`}
            />
          </div>
        </div>
      </div>

      <main className="relative py-10 md:py-16">
        <div className="pointer-events-none absolute right-0 top-0 h-[540px] w-[540px] rounded-full bg-[#ee3b80]/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {items.length === 0 ? (
            <CardShell className="mx-auto max-w-xl p-10 text-center sm:p-14">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/10 bg-black text-[#ee3b80]">
                <ShoppingBag className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-white">
                {t("empty.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                {t("empty.description")}
              </p>
              <Link href="/desarrollo" className="mt-8 inline-flex">
                <Button className="h-12 rounded-full bg-[#ee3b80] px-8 text-sm font-bold text-white hover:bg-[#d92f70]">
                  {t("empty.goToStore")}
                </Button>
              </Link>
            </CardShell>
          ) : (
            <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
              {/* Main content */}
              <div className="space-y-7">
                {errorMessage && (
                  <div className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-semibold text-red-300">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <CardShell className="flex items-center justify-between gap-4 px-6 py-5 sm:px-8">
                      <div>
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                          {t("order.title")}
                        </h2>
                        <p className="mt-2 text-sm text-white/45">
                          Revisa tus productos antes de continuar.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={clearCart}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-4 py-2.5 text-xs font-bold text-red-300 transition hover:border-red-400/30 hover:text-red-200"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        {t("order.clear")}
                      </button>
                    </CardShell>

                    <div className="space-y-4">
                      {items.map((item) => (
                        <CardShell
                          key={item.product.slug}
                          className="flex gap-5 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ee3b80]/25 sm:p-7"
                        >
                          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black p-3 sm:h-28 sm:w-28">
                            <Image
                              src={item.product.icon}
                              alt={item.product.name}
                              fill
                              className="object-contain p-3"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0">
                                <span className="inline-flex rounded-full border border-[#ee3b80]/20 bg-[#ee3b80]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb7cf]">
                                  {item.product.slug}
                                </span>
                                <h3 className="mt-3 line-clamp-1 text-base font-bold text-white sm:text-lg">
                                  {item.product.name}
                                </h3>
                              </div>

                              <button
                                type="button"
                                onClick={() => removeItem(item.product.slug)}
                                className="rounded-full p-2 text-white/30 transition hover:bg-white/5 hover:text-red-400"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <div className="inline-flex items-center rounded-2xl border border-white/10 bg-black p-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.product.slug, item.quantity - 1)
                                  }
                                  className="rounded-xl p-2.5 text-white/55 transition hover:bg-white/5 hover:text-white"
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <span className="w-10 text-center text-sm font-bold text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.product.slug, item.quantity + 1)
                                  }
                                  className="rounded-xl p-2.5 text-white/55 transition hover:bg-white/5 hover:text-white"
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>

                              <span className="text-xl font-black tracking-[-0.02em] text-white">
                                {formatPrice(
                                  item.product.price * item.quantity,
                                  "MXN",
                                  true
                                )}
                              </span>
                            </div>
                          </div>
                        </CardShell>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <form
                    id="etomin-payment-form"
                    onSubmit={handleCheckoutSubmit}
                    className="space-y-7"
                  >
                    <CardShell className="space-y-6 p-6 sm:p-8 lg:p-9">
                      <SectionTitle icon={User} title={t("form.buyerTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <Field
                          label={t("form.firstName")}
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.lastName")}
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.email")}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.phone")}
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.company")}
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="sm:col-span-2"
                        />
                      </div>
                    </CardShell>

                    <CardShell className="space-y-6 p-6 sm:p-8 lg:p-9">
                      <SectionTitle icon={MapPin} title={t("form.addressTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <Field
                          label={t("form.streetAddress")}
                          name="direccion"
                          value={formData.direccion}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.streetAddressPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.neighborhood")}
                          name="direccion2"
                          value={formData.direccion2}
                          onChange={handleInputChange}
                          placeholder={t("form.neighborhoodPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.city")}
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.state")}
                          name="estado"
                          value={formData.estado}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.statePlaceholder")}
                        />
                        <Field
                          label={t("form.postalCode")}
                          name="cp"
                          value={formData.cp}
                          onChange={handleInputChange}
                          required
                        />
                        <div>
                          <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
                            {t("form.country")}
                          </label>
                          <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleInputChange}
                            className="w-full appearance-none rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-[#ee3b80] focus:ring-2 focus:ring-[#ee3b80]/20"
                          >
                            <option value="MX" className="bg-black text-white">
                              {t("form.mexico")}
                            </option>
                          </select>
                        </div>
                      </div>
                    </CardShell>

                    <CardShell className="space-y-6 p-6 sm:p-8 lg:p-9">
                      <SectionTitle icon={CreditCard} title={t("form.paymentTitle")} />
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                        <Field
                          label={t("form.cardNumber")}
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          maxLength={16}
                          placeholder={t("form.cardNumberPlaceholder")}
                          className="sm:col-span-3"
                          mono
                        />
                        <Field
                          label={t("form.cardHolderName")}
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.cardHolderPlaceholder")}
                          className="sm:col-span-3"
                        />
                        <Field
                          label={t("form.expiryMonth")}
                          name="cardMonth"
                          value={formData.cardMonth}
                          onChange={handleInputChange}
                          required
                          maxLength={2}
                          placeholder={t("form.expiryMonthPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.expiryYear")}
                          name="cardYear"
                          value={formData.cardYear}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.expiryYearPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.cvv")}
                          name="cardCvv"
                          type="password"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.cvvPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                      </div>
                    </CardShell>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28">
                <CardShell className="space-y-7 p-6 sm:p-7 lg:p-8">
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-[0.22em] text-white/80">
                      {t("financial.title")}
                    </h2>
                    <p className="mt-2 text-sm text-white/45">
                      Resumen claro, sin ruido.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src="/etomin.png"
                      alt={t("images.securePaymentAlt")}
                      width={150}
                      height={20}
                      className="object-contain brightness-200"
                    />
                  </div>

                  {step === 1 && (
                    <div className="space-y-3 border-b border-white/10 pb-6">
                      {!appliedCoupon ? (
                        <form onSubmit={handleApplyCoupon} className="flex gap-3">
                          <input
                            type="text"
                            placeholder={t("financial.couponPlaceholder")}
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#ee3b80] focus:ring-2 focus:ring-[#ee3b80]/20"
                          />
                          <button
                            type="submit"
                            className="rounded-2xl bg-[#ee3b80] px-5 text-xs font-bold text-white transition hover:bg-[#d92f70]"
                          >
                            {t("financial.applyCoupon")}
                          </button>
                        </form>
                      ) : (
                        <div className="flex items-center justify-between rounded-2xl border border-[#ee3b80]/20 bg-[#ee3b80]/10 p-4">
                          <div className="text-xs font-semibold text-[#ffb7cf]">
                            {t("financial.appliedCoupon", {
                              code: appliedCoupon.code,
                              discount: appliedCoupon.discount * 100,
                            })}
                          </div>
                          <button
                            type="button"
                            onClick={() => setAppliedCoupon(null)}
                            className="text-[11px] font-bold text-red-300 transition hover:underline"
                          >
                            {t("financial.remove")}
                          </button>
                        </div>
                      )}

                      {couponError && (
                        <p className="pl-1 text-[11px] font-semibold text-red-400">
                          ⚠️ {couponError}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="space-y-4 border-b border-white/10 pb-6 text-sm">
                    <div className="flex items-center justify-between text-white/60">
                      <span>{t("financial.subtotal")}</span>
                      <span className="font-bold text-white">
                        {formatPrice(total, "MXN", true)}
                      </span>
                    </div>

                    {appliedCoupon && (
                      <div className="flex items-center justify-between text-[#ee3b80]">
                        <span>{t("financial.discount")}</span>
                        <span className="font-bold">
                          -{formatPrice(discountAmount, "MXN", true)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-end justify-between gap-4">
                      <span className="text-sm font-bold text-white/70">
                        {t("financial.netTotal")}
                      </span>
                      <span className="text-3xl font-black tracking-[-0.04em] text-white">
                        {formatPrice(grandTotal, "MXN", true)}
                      </span>
                    </div>
                    <p className="text-right text-[11px] text-white/35">
                      {t("financial.tax", {
                        tax: formatPrice(iva, "MXN", true),
                      })}
                    </p>
                  </div>

                  {step === 1 ? (
                    <Button
                      onClick={() => setStep(2)}
                      className="h-14 w-full rounded-full bg-[#ee3b80] text-xs font-bold text-white transition-all duration-300 hover:bg-[#d92f70]"
                    >
                      {t("actions.proceedToPayment")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        type="submit"
                        form="etomin-payment-form"
                        disabled={isProcessing}
                        className={`h-14 w-full rounded-full text-xs font-bold tracking-[0.18em] transition-all duration-300 ${
                          isProcessing
                            ? "cursor-wait bg-white/10 text-white/35"
                            : "bg-[#ee3b80] text-white hover:bg-[#d92f70]"
                        }`}
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>{t("actions.processing")}</span>
                          </div>
                        ) : (
                          t("actions.payAmount", {
                            amount: formatPrice(grandTotal, "MXN", true),
                          })
                        )}
                      </Button>

                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() => setStep(1)}
                        className="flex w-full items-center justify-center gap-1 py-1 text-xs font-bold text-white/45 transition hover:text-white"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        {t("actions.backToCart")}
                      </button>
                    </div>
                  )}

                  <div className="border-t border-white/10 pt-6 text-center">
                    <p className="px-2 text-[10px] font-medium leading-relaxed text-white/40">
                      {t("security.note")}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Image
                        src="/secure-payment.png"
                        alt={t("images.securePaymentAlt")}
                        width={100}
                        height={20}
                        className="object-contain invert brightness-0"
                      />
                    </div>
                  </div>
                </CardShell>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}