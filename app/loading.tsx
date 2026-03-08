export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] flex flex-col items-center justify-center gap-6">
      {/* Animated logo */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-[#DEB887]/30 border-t-[#D2691E] animate-spin" />
        <span className="absolute inset-0 flex items-center justify-center text-2xl">🍫</span>
      </div>
      <p className="font-display text-2xl text-[#8B4513] animate-pulse">
        Baking something good...
      </p>
    </div>
  );
}
