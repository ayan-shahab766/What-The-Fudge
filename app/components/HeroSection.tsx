"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#2C1810",
    }}>

      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-15%", right: "-8%",
          width: 500, height: 500, borderRadius: "50%",
          background: "rgba(139,69,19,0.2)", filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "-15%", left: "-8%",
          width: 420, height: 420, borderRadius: "50%",
          background: "rgba(210,105,30,0.15)", filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating emojis */}
      {([
        { emoji: "🍪", left: "8%",  top: "18%" },
        { emoji: "🍫", left: "26%", top: "12%" },
        { emoji: "🧁", left: "50%", top: "10%" },
        { emoji: "🎂", left: "72%", top: "16%" },
        { emoji: "🍮", left: "88%", top: "22%" },
      ] as { emoji: string; left: string; top: string }[]).map(({ emoji, left, top }, i) => (
        <motion.span
          key={emoji}
          style={{ position: "absolute", left, top, fontSize: "2rem", userSelect: "none", pointerEvents: "none", zIndex: 5 }}
          animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem", maxWidth: "56rem", margin: "0 auto" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#DEB887",
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            marginBottom: "1.25rem",
          }}
        >
          Artisan Bakery &amp; Dessert Shop
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 11vw, 9rem)",
            color: "#F5DEB3",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          What The
          <br />
          <span style={{ color: "#D2691E", fontStyle: "italic" }}>Fudge</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            color: "#D2B48C",
            fontSize: "1.125rem",
            fontWeight: 300,
            marginBottom: "2.5rem",
            maxWidth: "28rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Fresh baked desserts made with love.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}
        >
          <Link
            href="/menu"
            style={{
              backgroundColor: "#D2691E",
              color: "white",
              padding: "0.9rem 2.5rem",
              borderRadius: "9999px",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 0 0px rgba(210,105,30,0)",
              transition: "background-color 0.2s, box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#E07820";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(210,105,30,0.6)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#D2691E";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0px rgba(210,105,30,0)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            View Menu
          </Link>

          <a
            href="#about"
            style={{
              border: "1px solid rgba(222,184,135,0.5)",
              color: "#DEB887",
              padding: "0.9rem 2rem",
              borderRadius: "9999px",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "#DEB887";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(222,184,135,0.1)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(222,184,135,0.5)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem" }}
        >
          <span style={{ color: "#8B6347", fontSize: "0.625rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, #8B4513, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}