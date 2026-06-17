import "./globals.css";

import type { Metadata } from "next";
import ClientBody from "./[locale]/ClientBody";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veltrion",
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
      </head>
      <body
        suppressHydrationWarning
        className="antialiased font-body bg-[#0b0f12]"
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}