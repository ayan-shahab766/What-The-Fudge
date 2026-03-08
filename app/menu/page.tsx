import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import DessertCard from "@/app/components/DessertCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse our full menu of handcrafted desserts.",
};

export const revalidate = 60;

export default async function MenuPage() {
  const desserts = await prisma.dessert.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#FDF6EC]">

      {/* ── Page header ── */}
      <section className="bg-[#2C1810] pt-28 pb-14 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #F5DEB3 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#D2691E] text-xs font-semibold uppercase tracking-[0.35em] mb-3">
            Every craving covered
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#F5DEB3] mb-3 leading-tight">
            Our Full Menu
          </h1>
          <p className="text-[#D2B48C] text-base">
            {desserts.length > 0
              ? `${desserts.length} handcrafted treat${desserts.length !== 1 ? "s" : ""} — made fresh daily.`
              : "Made fresh daily, just for you."}
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">

          {desserts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-6xl mb-5">🍪</span>
              <h2 className="font-display text-2xl text-[#3D1C02] mb-2">
                The kitchen is warming up
              </h2>
              <p className="text-[#8B6347] text-base max-w-xs mb-7">
                Nothing on the menu yet — add your first dessert from the admin panel.
              </p>
              <Link
                href="/admin"
                className="bg-[#8B4513] hover:bg-[#A0522D] text-[#F5DEB3]
                           px-6 py-2.5 rounded-full font-semibold text-sm
                           transition-all hover:scale-105"
              >
                Go to Admin →
              </Link>
            </div>
          ) : (
            <>
              <p className="text-[#A0725A] text-sm mb-6 text-right">
                Showing{" "}
                <span className="font-semibold text-[#8B4513]">{desserts.length}</span>{" "}
                item{desserts.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {desserts.map((d) => (
                  <DessertCard key={d.id} {...d} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      {desserts.length > 0 && (
        <section className="bg-[#FFF8F0] border-t border-[#DEB887]/30 py-12 px-6 text-center">
          <p className="text-[#8B6347] text-sm mb-1">Can&apos;t decide?</p>
          <h2 className="font-display text-2xl text-[#3D1C02] mb-5">
            Just get one of everything. 🍫
          </h2>
          <Link
            href="/cart"
            className="inline-block bg-[#D2691E] hover:bg-[#E07820] text-white
                       px-8 py-3 rounded-full font-semibold text-sm tracking-wide
                       transition-all hover:scale-105"
          >
            View Cart
          </Link>
        </section>
      )}
    </div>
  );
}