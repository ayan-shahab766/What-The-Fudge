import { addDessert } from "../actions/addDessert";

export default function AddDessert() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">Add Dessert</h1>

      <form
        action={addDessert}
        encType="multipart/form-data"
        className="flex flex-col max-w-md gap-3"
      >
        <input name="name" placeholder="Name" className="border p-2 rounded" />

        <input
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="border p-2 rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Add Dessert
        </button>
      </form>
    </main>
  );
}
