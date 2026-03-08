"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Scroll-aware background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
  style={{
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    backgroundColor: scrolled ? "rgba(44,24,16,0.98)" : "rgba(44,24,16,0.85)",
    backdropFilter: "blur(8px)",
    borderBottom: scrolled ? "1px solid rgba(139,69,19,0.2)" : "1px solid transparent",
    transition: "all 0.3s",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    
    {/* Logo */}
    <Link href="/">
      <Image src="/Logo.jpg" alt="What The Fudge" width={60} height={40} priority style={{ objectFit: "contain" }} />
    </Link>

    {/* Center nav */}
    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      {NAV_LINKS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link key={href} href={href} style={{
            color: active ? "#F5DEB3" : "#D2B48C",
            fontSize: "0.8rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
            padding: "0.5rem 0",
            borderBottom: active ? "2px solid #D2691E" : "2px solid transparent",
            transition: "color 0.2s",
          }}>
            {label}
          </Link>
        );
      })}
    </div>

    {/* Right - Cart */}
    <Link href="/cart" style={{ position: "relative", color: "#F5DEB3", display: "flex", alignItems: "center", padding: "0.5rem" }}>
      <ShoppingCart size={20} strokeWidth={2} />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              position: "absolute", top: "-4px", right: "-4px",
              backgroundColor: "#D2691E", color: "white",
              fontSize: "10px", fontWeight: 700,
              width: "18px", height: "18px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {totalItems > 9 ? "9+" : totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  </div>
</nav>
      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            {/* Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[#2C1810] border-b border-[#8B4513]/30 shadow-xl"
            >
              <div className="flex flex-col px-6 py-5 gap-1">
                {NAV_LINKS.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-colors ${
                        active
                          ? "bg-[#3D1C02] text-[#F5DEB3]"
                          : "text-[#D2B48C] hover:text-[#F5DEB3] hover:bg-[#3D1C02]/60"
                      }`}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D2691E] mr-3" />
                      )}
                      {label}
                    </Link>
                  );
                })}

                <Link
                  href="/cart"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-colors mt-1 ${
                    pathname === "/cart"
                      ? "bg-[#D2691E] text-white"
                      : "text-[#D2B48C] hover:text-[#F5DEB3] hover:bg-[#3D1C02]/60"
                  }`}
                >
                  <ShoppingCart size={16} />
                  Cart
                  {totalItems > 0 && (
                    <span className="ml-auto bg-[#D2691E] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
