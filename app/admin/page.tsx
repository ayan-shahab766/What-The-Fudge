import prisma from "@/lib/prisma";
import Link from "next/link";
import { deleteDessert } from "@/app/actions/deleteDessert";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";

export default async function AdminPage() {
  const desserts = await prisma.dessert.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-[#1A0E07] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#8B4513] text-xs uppercase tracking-widest mb-1">Dashboard</p>
            <h1 className="font-display text-4xl text-[#F5DEB3]">Admin Panel</h1>
          </div>
          <Link
            href="/admin/add"
            className="flex items-center gap-2 bg-[#D2691E] hover:bg-[#E07820] text-white px-5 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            <PlusCircle size={18} />
            Add Dessert
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#2C1810] rounded-2xl p-6 border border-[#8B4513]/20">
            <p className="text-[#8B6347] text-sm mb-1">Total Items</p>
            <p className="font-display text-4xl text-[#F5DEB3]">{desserts.length}</p>
          </div>
          <div className="bg-[#2C1810] rounded-2xl p-6 border border-[#8B4513]/20">
            <p className="text-[#8B6347] text-sm mb-1">Avg Price</p>
            <p className="font-display text-4xl text-[#D2691E]">
              ${desserts.length > 0
                ? (desserts.reduce((s, d) => s + d.price, 0) / desserts.length).toFixed(2)
                : "0.00"}
            </p>
          </div>
          <div className="bg-[#2C1810] rounded-2xl p-6 border border-[#8B4513]/20">
            <p className="text-[#8B6347] text-sm mb-1">Newest Item</p>
            <p className="font-display text-2xl text-[#F5DEB3] truncate">
              {desserts[0]?.name ?? "—"}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#2C1810] rounded-2xl overflow-hidden border border-[#8B4513]/20">
          <div className="grid grid-cols-[80px_1fr_2fr_100px_120px] gap-4 px-6 py-4 border-b border-[#8B4513]/20 text-[#8B6347] text-xs uppercase tracking-widest">
            <span>Image</span>
            <span>Name</span>
            <span>Description</span>
            <span>Price</span>
            <span className="text-right">Actions</span>
          </div>

          {desserts.length === 0 ? (
            <div className="py-16 text-center text-[#8B6347]">
              <p className="text-3xl mb-3">🍫</p>
              <p>No desserts yet. Add your first one!</p>
            </div>
          ) : (
            <div className="divide-y divide-[#8B4513]/10">
              {desserts.map((d) => (
                <div
                  key={d.id}
                  className="grid grid-cols-[80px_1fr_2fr_100px_120px] gap-4 px-6 py-4 items-center hover:bg-[#3D1C02]/40 transition-colors"
                >
                  <img
                    src={d.imageUrl}
                    alt={d.name}
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <span className="text-[#F5DEB3] font-medium truncate">{d.name}</span>
                  <span className="text-[#8B6347] text-sm truncate">{d.description}</span>
                  <span className="text-[#D2691E] font-bold">${d.price.toFixed(2)}</span>
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/edit/${d.id}`}
                      className="flex items-center gap-1 bg-[#8B4513]/30 hover:bg-[#8B4513]/60 text-[#DEB887] px-3 py-1.5 rounded-lg text-sm transition-colors"
                    >
                      <Pencil size={13} />
                      Edit
                    </Link>
                    <form action={deleteDessert.bind(null, d.id)}>
                      <button className="flex items-center gap-1 bg-red-900/30 hover:bg-red-900/60 text-red-400 px-3 py-1.5 rounded-lg text-sm transition-colors">
                        <Trash2 size={13} />
                        Del
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
