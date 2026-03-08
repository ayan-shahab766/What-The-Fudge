import prisma from "@/lib/prisma";
import { updateDessert } from "@/app/actions/updateDessert";

export default async function EditDessert({ params }: { params: { id: string } }) {

  const dessert = await prisma.dessert.findUnique({
    where: { id: params.id },
  });

  if (!dessert) return <div>Dessert not found</div>;

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-5">Edit Dessert</h1>

      <form action={updateDessert} className="flex flex-col max-w-md gap-3">

        <input type="hidden" name="id" value={dessert.id} />

        <input
          name="name"
          defaultValue={dessert.name}
          className="border p-2 rounded"
        />

        <input
          name="description"
          defaultValue={dessert.description}
          className="border p-2 rounded"
        />

        <input
          name="price"
          type="number"
          defaultValue={dessert.price}
          className="border p-2 rounded"
        />

        <input
          name="imageUrl"
          defaultValue={dessert.imageUrl}
          className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Update Dessert
        </button>

      </form>

    </main>
  );
}