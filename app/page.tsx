import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  // Prisma already infers the type of desserts
  const desserts = await prisma.dessert.findMany();

  return (
    <main className="p-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Desserts Menu</h1>

        <Link
          href="/add"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Dessert
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {desserts.map((dessert: typeof desserts[number]) => (
          <div key={dessert.id} className="border p-5 rounded shadow">
            <img
              src={dessert.imageUrl}
              alt={dessert.name}
              className="w-full h-40 object-cover mb-3 rounded"
            />

            <h2 className="text-xl font-semibold">{dessert.name}</h2>
            <p className="text-gray-600">{dessert.description}</p>
            <p className="mt-2 font-bold">${dessert.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}