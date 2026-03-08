"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#2C1810] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-7xl mb-6">🍫</div>
      <p className="text-[#D2691E] text-sm font-semibold uppercase tracking-[0.3em] mb-3">
        Something went wrong
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[#F5DEB3] mb-4">
        The kitchen had an accident.
      </h1>
      <p className="text-[#D2B48C] max-w-md mb-8">
        Don&apos;t worry — no desserts were harmed. Try refreshing and we&apos;ll get right back to baking.
      </p>
      <button
        onClick={reset}
        className="bg-[#D2691E] hover:bg-[#E07820] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
      >
        Try Again
      </button>
    </main>
  );
}
