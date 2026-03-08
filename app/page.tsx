import prisma from "@/lib/prisma";
import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import DessertCard from "@/app/components/DessertCard";
import AnimatedSection from "@/app/components/AnimatedSection";

export default async function Home() {
  const featured = await prisma.dessert.findMany({ take: 3 });

  return (
    <main>
      {/* ── Hero (full viewport, manages its own top padding) ── */}
      <HeroSection />

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-16 md:py-20 px-6 bg-[#FFF8F0]">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-[#D2691E] text-xs font-semibold uppercase tracking-[0.35em] mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#3D1C02] mb-5 leading-snug">
            Baked with soul,<br className="hidden sm:block" /> served with love.
          </h2>
          <p className="text-[#6B4226] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            What The Fudge was born in a tiny kitchen overflowing with butter, sugar, and big
            dreams. Every bite is a little act of love — crafted from scratch using recipes passed
            down through generations and a whole lot of chocolate. We believe dessert isn&apos;t
            just something you eat at the end of a meal. It&apos;s the whole point.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 mt-10">
            {(
              [
                ["100%", "Real Butter"],
                ["Zero", "Shortcuts"],
                ["All", "Heart"],
              ] as [string, string][]
            ).map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-[#8B4513] font-bold">
                  {val}
                </div>
                <div className="text-[#A0725A] text-xs mt-1 tracking-wide uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Ornament divider ───────────────────────────────────── */}
      <div className="flex items-center gap-4 px-8 max-w-5xl mx-auto">
        <div className="h-px flex-1 bg-[#DEB887]/35" />
        <span className="text-[#DEB887]/70 text-lg">✦</span>
        <div className="h-px flex-1 bg-[#DEB887]/35" />
      </div>

      {/* ── Featured desserts ─────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <AnimatedSection className="text-center mb-10">
            <p className="text-[#D2691E] text-xs font-semibold uppercase tracking-[0.35em] mb-2">
              Fan Favorites
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#3D1C02]">
              Today&apos;s Picks
            </h2>
          </AnimatedSection>

          {featured.length === 0 ? (
            <p className="text-center text-[#8B6347] py-12">
              No desserts yet — check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featured.map((d) => (
                <DessertCard key={d.id} {...d} />
              ))}
            </div>
          )}

          {/* View all link */}
          {featured.length > 0 && (
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-[#8B4513] hover:text-[#D2691E]
                           font-semibold text-sm tracking-wide transition-colors group"
              >
                See everything on the menu
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA banner ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-[#2C1810] text-center relative overflow-hidden">
        {/* Static decorative dots — no Math.random (causes hydration errors) */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #F5DEB3 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#DEB887] text-xs font-semibold uppercase tracking-[0.35em] mb-3">
            The Full Collection
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#F5DEB3] mb-4 leading-tight">
            Ready to indulge?
          </h2>
          <p className="text-[#D2B48C] text-base md:text-lg mb-8 leading-relaxed">
            From silky mousses to fudgy brownies — there&apos;s something for every sweet tooth.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-[#D2691E] hover:bg-[#E07820] text-white
                       px-9 py-3.5 rounded-full text-base font-semibold tracking-wide
                       transition-all duration-200 hover:scale-105
                       hover:shadow-[0_0_28px_rgba(210,105,30,0.45)]"
          >
            View Full Menu →
          </Link>
        </div>
      </section>
    </main>
  );
}