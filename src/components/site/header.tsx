"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import {
  Code2,
  Headphones,
  Home,
  Menu,
  ShoppingCart,
  X,
} from "lucide-react";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

export function Header() {
  const t = useTranslations("header");

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { itemCount, total } = useCart();

  const NAV_LINKS = [
    {
      label: t("nav.home"),
      href: "/",
      icon: Home,
    },
    {
      label: t("nav.development"),
      href: "/desarrollo",
      icon: Code2,
    },
    {
      label: t("nav.contact"),
      href: "/contacto",
      icon: Headphones,
    },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/logo.png"
            alt={t("logoAlt")}
            className="h-10 w-auto"
          />

          <img
            src="/title.png"
            alt={t("titleAlt")}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-[#ee3b80] text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link href="/carrito">
            <button
              aria-label={t("cart")}
              className="flex items-center gap-3 rounded-full border border-[#ee3b80]/30 bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-all hover:border-[#ee3b80] hover:bg-[#161616]"
            >
              <span className="hidden text-white/70 sm:inline">
                $ {formatPrice(total)} MXN
              </span>

              <span className="relative">
                <ShoppingCart className="h-[18px] w-[18px]" />

                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ee3b80] text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              </span>
            </button>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-white transition-colors hover:border-[#ee3b80] hover:text-[#ee3b80] lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-black transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                  active
                    ? "bg-[#ee3b80] text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}