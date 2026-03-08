"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateDessert(formData: FormData) {

  const id = formData.get("id") as string;

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const imageUrl = formData.get("imageUrl") as string;

  await prisma.dessert.update({
    where: { id },
    data: {
      name,
      description,
      price,
      imageUrl,
    },
  });

  revalidatePath("/");
  redirect("/");
}