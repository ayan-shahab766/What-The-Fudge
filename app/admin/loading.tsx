export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#1A0E07] pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="h-3 w-20 bg-[#2C1810] rounded mb-3 animate-pulse" />
            <div className="h-10 w-48 bg-[#2C1810] rounded animate-pulse" />
          </div>
          <div className="h-11 w-36 bg-[#2C1810] rounded-full animate-pulse" />
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#2C1810] rounded-2xl p-6 animate-pulse">
              <div className="h-3 w-20 bg-[#3D1C02] rounded mb-3" />
              <div className="h-10 w-16 bg-[#3D1C02] rounded" />
            </div>
          ))}
        </div>

        {/* Table skeleton */}
        <div className="bg-[#2C1810] rounded-2xl overflow-hidden">
          <div className="h-12 bg-[#3D1C02]/50 animate-pulse" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 border-t border-[#8B4513]/10"
            >
              <div className="w-14 h-14 rounded-xl bg-[#3D1C02] animate-pulse" />
              <div className="flex-1 h-4 bg-[#3D1C02] rounded animate-pulse" />
              <div className="flex-[2] h-4 bg-[#3D1C02] rounded animate-pulse" />
              <div className="w-16 h-4 bg-[#3D1C02] rounded animate-pulse" />
              <div className="w-24 h-8 bg-[#3D1C02] rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
