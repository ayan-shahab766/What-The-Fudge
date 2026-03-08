import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#2C1810] flex flex-col items-center justify-center px-6 text-center">
      {/* Floating emoji */}
      <div className="text-8xl mb-6 animate-bounce">🍮</div>

      <p className="text-[#D2691E] text-sm font-semibold uppercase tracking-[0.3em] mb-3">
        404 — Lost in the kitchen
      </p>
      <h1 className="font-display text-5xl md:text-7xl text-[#F5DEB3] mb-4 leading-tight">
        This page<br />doesn&apos;t exist.
      </h1>
      <p className="text-[#D2B48C] text-lg max-w-md mb-10">
        Looks like this recipe was never written. Let&apos;s get you back to something sweet.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-[#D2691E] hover:bg-[#E07820] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
        >
          Go Home
        </Link>
        <Link
          href="/menu"
          className="border border-[#DEB887]/40 hover:border-[#DEB887] text-[#DEB887] px-8 py-3 rounded-full font-medium transition-all hover:bg-[#DEB887]/10"
        >
          View Menu
        </Link>
      </div>
    </main>
  );
}
