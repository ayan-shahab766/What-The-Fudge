"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteDessert(id: string) {
  await prisma.dessert.delete({
    where: { id },
  });

  revalidatePath("/");
}