"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

export async function addDessert(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const file = formData.get("image") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = Date.now() + "-" + file.name;

  const filePath = path.join(process.cwd(), "public/Images", fileName);

  await fs.writeFile(filePath, buffer);

  const imageUrl = `/Images/${fileName}`;

  await prisma.dessert.create({
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