"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddDessert() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/desserts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        price: parseFloat(form.price),
      }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">Add Dessert</h1>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-3">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Add Dessert
        </button>
      </form>
    </main>
  );
}