import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "What The Fudge | Artisan Desserts",
    template: "%s | What The Fudge",
  },
  description:
    "Handcrafted desserts baked fresh daily. Fudge, brownies, tarts and more — made with real butter and a whole lot of love.",
  keywords: ["desserts", "bakery", "artisan", "fudge", "chocolate", "cakes"],
  openGraph: {
    title: "What The Fudge",
    description: "Fresh baked desserts made with love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      {/*
        NO pt-16 on body — the hero manages its own top padding.
        Each inner page adds its own pt-20 to clear the fixed navbar.
      */}
      <body className="font-body bg-[#FDF6EC] text-[#3D1C02] antialiased">
        <CartProvider>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}